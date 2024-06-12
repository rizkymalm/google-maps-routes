import { LoadScript } from "@react-google-maps/api";
import React from "react";
import GoogleMapsRender from "./GoogleMapsRender";

const TrackingPage = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_API_KEY_GOOGLE}
        libraries={["directions"]}
      >
        <GoogleMapsRender />
      </LoadScript>
    </div>
  );
};

export default TrackingPage;
