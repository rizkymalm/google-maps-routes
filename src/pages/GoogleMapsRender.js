import { DirectionsRenderer, GoogleMap, Marker } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import haversine from "haversine-distance";
import { useDispatch, useSelector } from "react-redux";
import { getJourneyDetail } from "../redux/actions/user";
import { useParams } from "react-router-dom";

const GoogleMapsRender = () => {
  const { journey } = useParams();
  const dispatch = useDispatch();
  const journeyState = useSelector((state) => state.journey);
  const [response, setResponse] = useState(null);
  const [longestPoint, setLongestPoint] = useState({
    lat: 0,
    lng: 0,
  });
  const [longest, setLongest] = useState(0);

  const calculateDistance = (coord1, coord2) => {
    const distance = haversine(coord1, coord2); // Menggunakan haversine-distance
    return distance;
  };

  useEffect(() => {
    async function _getJourneyDetail() {
      dispatch(
        await getJourneyDetail({
          journey: journey,
          callback: (data) => {
            for (let i = 0; i < data.length; i++) {
              var calculate = calculateDistance(
                { lat: data[0].lat, lng: data[0].lng },
                { lat: data[i].lat, lng: data[i].lng }
              );
              if (calculate > longest) {
                setLongest(calculate);
                setLongestPoint({
                  lat: data[i].lat,
                  lng: data[i].lng,
                });
              }
            }
          },
        })
      );
    }
    _getJourneyDetail();
  }, [longest, dispatch, journey]);

  const directionsCallback = (response, status) => {
    if (status === "OK") {
      setResponse(response);
    } else {
      console.log("Error:", status);
    }
  };
  return (
    <>
      {journeyState?.journey?.loading ? (
        "Loading"
      ) : (
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100vh" }}
          center={{
            lat: journeyState?.journey?.data?.data[0].lat,
            lng: journeyState?.journey?.data?.data[0].lng,
          }}
          zoom={17}
          onLoad={(map) => {
            const directionsService =
              new window.google.maps.DirectionsService();
            directionsService.route(
              {
                origin: {
                  lat: journeyState?.journey?.data?.data[0].lat,
                  lng: journeyState?.journey?.data?.data[0].lng,
                },
                destination: longestPoint,
                waypoints: [
                  {
                    location: {
                      lat: journeyState?.journey?.data?.data[0].lat,
                      lng: journeyState?.journey?.data?.data[0].lng,
                    },
                  },
                  {
                    location: longestPoint,
                  },
                ],
                optimizeWaypoints: true,
                travelMode: window.google.maps.TravelMode.DRIVING,
              },
              directionsCallback
            );
          }}
        >
          {journeyState?.journey?.data?.data.map((marker, index) => (
            <Marker
              key={index} // Unique key for each marker
              position={marker}
            />
          ))}
          {response !== null && (
            <DirectionsRenderer options={{ directions: response }} />
          )}
        </GoogleMap>
      )}
    </>
  );
};

export default GoogleMapsRender;
