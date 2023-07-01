import React, { useEffect, useState } from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";
import { FcCancel } from "react-icons/fc";
import {
  ButtonListStyled,
  FormStyled,
  InputContainerStyled,
  InputZone,
  InputZoneContainerStyled,
  LabelStyled,
  ListContainerStyled,
  SideMenuContainerStyled,
  StreetsStyled,
  TextAreaZone,
  UpdateButtonStyled,
} from "./SideMenuStyles";
import { useDispatch, useSelector } from "react-redux";
import * as streetActions from "../../redux/reducers/street/street.action";
import {
  addCoordenadas,
  addPoligono,
  deleteCoordenadas,
  getPoligono,
  updateCoordenadas,
  updatePoligono,
} from "../../api/data";
import { useForm } from "react-hook-form";

export const SideMenu = () => {
  const dispatch = useDispatch();
  // const formData = useSelector((state) => state.street.formData);
  const coordenadas = useSelector((state) => state.street.coordenadas);
  const [nombre, setNombre] = useState("");
  const [nombreZona, setNombreZona] = useState("");
  const [zonaDescripcion, setZonaDescripcion] = useState("");
  const poligonId = useSelector((state) => state.street.poligon);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPoligono, setCurrentPoligono] = useState("");
  const editmode = useSelector((s) => s.street.editMode);
  const [coorId, setCoorId] = useState("");

  const getCurrentPoligono = async () => {
    try {
      const data = await getPoligono(poligonId);
      setCurrentPoligono(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (poligonId) {
      getCurrentPoligono();
    }
    // eslint-disable-next-line
  }, [poligonId]);

  useEffect(() => {
    if (!isLoading && currentPoligono) {
      setNombre(currentPoligono.data.name);
      setNombreZona(currentPoligono.data.zone);
      setZonaDescripcion(currentPoligono.data.description);
      currentPoligono?.data.coordenadas.forEach((c) => {
        dispatch(
          streetActions.addCoordenadas({
            lat: parseFloat(c.lat),
            lon: parseFloat(c.lon),
            id: c.id,
          })
        );
      });
    }
    // eslint-disable-next-line
  }, [isLoading, currentPoligono]);

  // USE FORM!!!!
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();
  const { onChange } = register(
    "nombrePoligono",
    "nombreZona",
    "zonaDescripcion"
  );

  const onSubmit = async () => {
    if (currentPoligono) {
      try {
        await updatePoligono(poligonId, {
          name: nombre,
          zone: nombreZona,
          description: zonaDescripcion,
        });

        if (coorId) {
          await deleteCoordenadas(coorId);
        }
        await Promise.all(
          coordenadas.map(async (c) => {
            isNaN(c.id)
              ? await addCoordenadas({
                  lat: c.lat,
                  lon: c.lon,
                  poligonoId: poligonId,
                })
              : await updateCoordenadas(c.id, {
                  lat: c.lat,
                  lon: c.lon,
                });
          })
        );

        dispatch(streetActions.selectStreet(""));
        // Reiniciar la página
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    } else {
      if (coordenadas.length) {
        try {
          const responsePoligono = await addPoligono({
            name: nombre,
            zone: nombreZona,
            description: zonaDescripcion,
          });

          const poligonoId = responsePoligono.data.id;
          await Promise.all(
            coordenadas.map(async (c) => {
              await addCoordenadas({
                lat: c.lat,
                lon: c.lon,
                poligonoId: poligonoId,
              });
            })
          );

          dispatch(streetActions.selectStreet(""));
          // Reiniciar la página
          window.location.reload();
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  return (
    <SideMenuContainerStyled>
      <div
        style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        onClick={() => dispatch(streetActions.toggleMenu())}
      >
        <button
          style={{
            cursor: "pointer",
            backgroundColor: "purple",
            color: "white",
            border: "none",
            borderRadius: "5px",
            width: "20px",
            height: "20px",
          }}
        >
          x
        </button>
      </div>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputContainerStyled>
          <label
            htmlFor="nombre-poligono"
            style={{ color: "black", fontWeight: "600" }}
          >
            Nombre:
          </label>
          <input
            {...register("nombrePoligono", {
              required: true,
              value: nombre,
            })}
            type="text"
            id="nombre-poligono"
            onChange={(e) => {
              setNombre(e.target.value);
              onChange(e);
              clearErrors("nombrePoligono");
            }}
            placeholder="Ingrese el nombre de la zona"
            value={nombre}
          />

          {errors.nombrePoligono?.type === "required" && (
            <p style={{ color: "red", fontSize: "15px" }}>* Requerido</p>
          )}
        </InputContainerStyled>

        <ListContainerStyled>
          {coordenadas.map((s) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                key={`${s.lat}-${s.lon}-${s.id}`}
              >
                <StreetsStyled>{`${s.lat} ${s.lon}`}</StreetsStyled>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "7px",
                  }}
                >
                  {editmode.id && s.id === editmode.id ? (
                    <ButtonListStyled
                      onClick={() => dispatch(streetActions.editMode({}))}
                    >
                      <FcCancel />
                    </ButtonListStyled>
                  ) : (
                    ""
                  )}
                  <ButtonListStyled
                    onClick={() => {
                      const response = window.confirm(
                        "Desea modificar la coordenada?"
                      );
                      if (response) {
                        dispatch(streetActions.editMode(s));
                      }
                    }}
                    type="button"
                  >
                    <BsFillPencilFill />
                  </ButtonListStyled>
                  {editmode.id && s.id === editmode.id ? (
                    <ButtonListStyled
                      onClick={async () => {
                        const response = window.confirm(
                          "Desea eliminar la coordenada?"
                        );
                        if (response) {
                          setCoorId(s.id);
                          dispatch(streetActions.removeSelectedCoor(s));
                          dispatch(streetActions.editMode({}));
                        }
                      }}
                      type="button"
                    >
                      x
                    </ButtonListStyled>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </ListContainerStyled>
        <InputZoneContainerStyled>
          <InputZone
            {...register("nombreZona", {
              required: true,
              value: nombreZona,
            })}
            type="text"
            id="nombre-zone"
            onChange={(e) => {
              setNombreZona(e.target.value);
              onChange(e);
              clearErrors("nombreZona");
            }}
            placeholder="Ingrese el nombre de la zona"
            value={nombreZona}
          />
          {errors.nombreZona?.type === "required" && (
            <p style={{ color: "red", fontSize: "15px" }}>* Requerido</p>
          )}
          <TextAreaZone
            style={{ resize: "none" }}
            {...register("zonaDescripcion", {
              required: true,
              value: zonaDescripcion,
            })}
            type="text"
            id="zona-descripcion"
            onChange={(e) => {
              setZonaDescripcion(e.target.value);
              onChange(e);
              clearErrors("zonaDescripcion");
            }}
            placeholder="Ingrese el nombre de la zona"
            value={zonaDescripcion}
          />
          {errors.zonaDescripcion?.type === "required" && (
            <p style={{ color: "red", fontSize: "15px" }}>* Requerido</p>
          )}
        </InputZoneContainerStyled>
        {currentPoligono ? (
          <button type="submit" style={{ cursor: "pointer" }}>
            Modificar
          </button>
        ) : (
          <button type="submit" style={{ cursor: "pointer" }}>
            Agregar
          </button>
        )}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <UpdateButtonStyled
            onClick={() => {
              window.location.reload();
            }}
          >
            <RxUpdate />
          </UpdateButtonStyled>
        </div>
      </FormStyled>
    </SideMenuContainerStyled>
  );
};
