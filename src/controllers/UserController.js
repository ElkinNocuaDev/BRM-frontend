import axios from 'axios';

//const axios = require('axios');

const API_URL = 'http://localhost:5000/api/v1'; // Reemplaza con la URL de tu backend

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, {
      email: email,
      password: password,
    });

    // Maneja la respuesta de la API aquí, por ejemplo, puedes guardar el token de autenticación en el estado de tu aplicación.
    console.log('Respuesta del servidor:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    throw error;
  }
};

export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/users/add`, {
      username: username,
      email: email,
      password: password,
    });

    // Maneja la respuesta de la API aquí, por ejemplo, puedes mostrar un mensaje de éxito al usuario.
    console.log('Respuesta del servidor:', response.data);

    return response.data;
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    throw error;
  }
};
