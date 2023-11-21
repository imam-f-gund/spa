import axios from "axios";

const deleteUser = async (id) => {
    const token = localStorage.getItem("token");
    const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    }

    await new Promise(r => setTimeout(r, 1000));

    const response = await axios.delete(
        process.env.REACT_APP_API_LINK + "user/"+id, {
           headers: headers, 
          }
    );

    return response.data;
}

export default deleteUser;
