import { ReactNode, useEffect, useRef } from "react";
import { Root, createRoot } from "react-dom/client";

interface IMarkerProps {
  map: any;
  position: any;
  children: ReactNode;
  handleMouseEnter: (key: string) => void
  handleMouseLeave: () => void
  handleKey: string
}

export function Marker({ map, children, position, handleMouseEnter, handleMouseLeave, handleKey }: IMarkerProps) {
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

    rootRef.current?.render(children)
    if(markerRef.current) {
      markerRef.current.position = position
      markerRef.current.map = map
    }

  }, [map, position, children]);

  return <div onMouseEnter={() => handleMouseEnter(handleKey)} onMouseLeave={() => {handleMouseLeave()}}>{children}</div>;
}
