import axios from "axios";

const API = "http://localhost:4000";

const axiosInstance = axios.create({
  timeout: 5000, // tiempo de espera de 5 segundos
});

export async function addCoordenadas(coor) {
  try {
    console.log(coor);
    const response = await axiosInstance.post(`${API}/coordenada`, coor);
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function updateCoordenadas(id, coor) {
  try {
    const response = await axiosInstance
      .put(`${API}/coordenada/${id}`, coor)
      .then(alert("se modifico la coor"));
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteCoordenadas(id) {
  try {
    const response = await axiosInstance.delete(`${API}/coordenada/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function addPoligono(poligono) {
  try {
    const response = await axiosInstance.post(`${API}/poligono`, poligono);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getPoligonos() {
  try {
    const response = await axiosInstance.get(`${API}/poligono`);
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getPoligono(id) {
  try {
    const response = await axiosInstance.get(`${API}/poligono/${id}`);
    return response;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function deletePoligono(id) {
  try {
    const response = await axiosInstance.delete(`${API}/poligono/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function updatePoligono(id, data) {
  try {
    const response = await axiosInstance.put(`${API}/poligono/${id}`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
}
