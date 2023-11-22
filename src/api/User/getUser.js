import axios from "axios";

    const getDataUser = async (pages) => {
      const token = localStorage.getItem("token");
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }

        await new Promise(r => setTimeout(r, 1000));
    
        const response = await axios.get(
            process.env.REACT_APP_API_LINK + "user" + pages, {
               headers: headers, 
              }
        );
        return response.data.data;
    };

export default getDataUser;