import { Wrapper } from "@googlemaps/react-wrapper";
import { Map } from "./Map"
import React from "react";

export function Markers() {
  return (
    <Wrapper
      apiKey={
        process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
          ? process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
          : ""
      }
      libraries={["marker"]}
     >
      <Map />
     </Wrapper>
  );
}
