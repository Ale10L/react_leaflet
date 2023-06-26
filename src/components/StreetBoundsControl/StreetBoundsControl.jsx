import { Polygon } from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import * as streetActions from "../../redux/reducers/street/street.action";

function StreetBoundsControl({ coordenadas, status }) {
  const coordinates = coordenadas.map((c) => [c.lat, c.lon]);
  const poligonId = coordenadas.map((c) => c.poligonoId);
  const clickedPoligonId = useSelector(
    (state) => state.street.clickedPoligonId
  );
  const dispatch = useDispatch();

  return (
    <Polygon
      positions={coordinates}
      color={
        status === "activo" ? "purple" : status === "inactivo" ? "gray" : "red"
      }
      eventHandlers={{
        click: () => {
          dispatch(streetActions.clickedPoligonId(poligonId[0]));
          if (clickedPoligonId !== poligonId[0]) {
            dispatch(streetActions.clearData());
            dispatch(streetActions.poligonData(poligonId[0]));
          }
        },
      }}
    />
  );
}

export default StreetBoundsControl;
