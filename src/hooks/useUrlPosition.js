import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams] = useSearchParams();

  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  // console.log(lat, lng);
  // // const mapLat = searchParams.get("lat") || "";
  // // const mapLng = searchParams.get("lng") || "";

  // return { lat, lng };
  return [lat, lng];
}
