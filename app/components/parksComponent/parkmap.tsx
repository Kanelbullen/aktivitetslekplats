'use client'
import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect} from "react";

const parkmap = () => {

  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: 'weekly'
      });

      const { Map } = await loader.importLibrary('maps');
      const position = {
        lat: 57.7210,
        lng: 12.9398,
      }

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 15,
        mapId: '3164088431'
      }

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);
    }
    initMap();
  }, []);

  return (
    <div className="h-[60vh] rounded-md" ref={mapRef}/>
  );
};

export default parkmap;
