import axios from "axios";

const API = "http://localhost:4000";

export async function addCoordenadas(coor) {
  try {
    console.log(coor);
    const response = await axios.post(`${API}/coordenada`, coor);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function addPoligono(poligono) {
  try {
    console.log(poligono);
    const response = await axios.post(`${API}/poligono`, poligono);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getPoligonos() {
  try {
    const response = await axios.get(`${API}/poligono`);
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
}
