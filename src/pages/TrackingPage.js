import { LoadScript } from "@react-google-maps/api";
import React from "react";
import GoogleMapsRender from "./GoogleMapsRender";

const TrackingPage = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <LoadScript
        googleMapsApiKey="AIzaSyCJYy_62-FNjEV74uwiXbI4JnZ_OAPjJfA"
        libraries={["directions"]}
      >
        <GoogleMapsRender />
      </LoadScript>
    </div>
  );
};

export default TrackingPage;
