import React, { Component } from 'react';
import { loginUser, registerUser } from '../controllers/UserController';

class UserLogin extends Component {
  
  handleLogin = async (email, password) => {
    try {
      const response = await loginUser(email, password);
        console.log(response); 
    } catch (error) {
        console.log(error); // Manejar el error, como mostrar un mensaje de error al usuario.
    }
  };

  
  handleRegister = async (username, email, password) => {
    try {
      const response = await registerUser(username, email, password);
        console.log(response); // Hacer algo con la respuesta, como mostrar un mensaje de éxito.
    } catch (error) {
        console.log(error); // Manejar el error, como mostrar un mensaje de error al usuario.
    }
  };

}

export default UserLogin;