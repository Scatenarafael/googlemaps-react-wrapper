import { ReactNode, useEffect, useRef } from "react";
import { Root, createRoot } from "react-dom/client";

interface IMarkerProps {
  map: any;
  position: any;
  children: ReactNode;
}

export function Marker({
  map,
  children,
  position,
}: IMarkerProps) {
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement>();
  const rootRef = useRef<Root>();

  useEffect(() => {
    if (!rootRef.current) {
      const container = document.createElement("div");
      rootRef.current = createRoot(container);

      markerRef.current = new google.maps.marker.AdvancedMarkerElement({
        position,
        content: container,
      });
    }
  }, []);

  useEffect(() => {
    rootRef.current?.render(children);
    if (markerRef.current) {
      markerRef.current.position = position;
      markerRef.current.map = map;
      const listener = markerRef.current.addListener('click', ()=>{})
      return () => listener.remove()
    }
  }, [map, position, children]);

  return null;
}
