export const SELECT_STREET = "SELECT_STREET";
export const ADD_SELECTED_STREET = "ADD_SELECTED_STREET";
export const REMOVE_SELECTED_STREET = "REMOVE_SELECTED_STREET";
export const ADD_FORM_DATA = "ADD_FORM_DATA";
export const CLEAR_DATA = "CLEAR_DATA";
export const TOGGLE_MENU = "TOGGLE_MENU";
export const ADD_COORDENADAS = "ADD_COORDENADAS";
export const REMOVE_COOR = "REMOVE_COOR";
export const POLIGON_DATA = "POLIGON_DATA";
export const EDIT_MODE = "EDIT_MODE";
export const UPDATE_COOR = "UPDATE_COOR";
export const COORUPDATE = "COORUPDATE";
export const CLICKED_POLIGON_ID = "CLICKED_POLIGON_ID";

export const selectStreet = (street) => ({
  type: SELECT_STREET,
  payload: street,
});

export const addSelectedStreet = (street) => ({
  type: ADD_SELECTED_STREET,
  payload: street,
});

export const removeSelectedStreet = (street) => ({
  type: REMOVE_SELECTED_STREET,
  payload: street,
});

export const addFormData = (data) => ({
  type: ADD_FORM_DATA,
  payload: data,
});

export const clearData = () => ({
  type: CLEAR_DATA,
});

export const toggleMenu = () => ({
  type: TOGGLE_MENU,
});

export const addCoordenadas = (coordenadas) => ({
  type: ADD_COORDENADAS,
  payload: coordenadas,
});

export const removeSelectedCoor = (coor) => ({
  type: REMOVE_COOR,
  payload: coor,
});

export const poligonData = (data) => ({
  type: POLIGON_DATA,
  payload: data,
});

export const editMode = (coor) => ({
  type: EDIT_MODE,
  payload: coor,
});

export const updateCoor = () => ({
  type: UPDATE_COOR,
});

export const coorUpdate = (coor) => ({
  type: COORUPDATE,
  payload: coor,
});

export const clickedPoligonId = (id) => ({
  type: CLICKED_POLIGON_ID,
  payload: id,
});
