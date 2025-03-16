import axios from "axios";

export const loginUser = async (formData) => {
  
    try{
        const response = await axios.post(`http://127.0.0.1:3000/api/login`, formData);
        console.log('Login Successful', response.data);
        return response.data;

    }catch(error){
        throw error
    }
}


export const registerUser = async (formData) => {
    try {
        const response = await axios.post('http://127.0.0.1:3000/api/register', formData);
        console.log('Register Successful:', response.data);
        return response.data;  // Return the response for further use
    } catch (error) {
        console.error('Registration Failed:', error.response?.data || error);
        throw error;
    }
};