import axios from "axios";

const postUser = async (form) => {
    const token = localStorage.getItem("token");
    const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    }

    await new Promise(r => setTimeout(r, 1000));

    const response = await axios.post(
        process.env.REACT_APP_API_LINK + "user", form, {
           headers: headers, 
          }
    );

    return response.data;

}

export default postUser;
