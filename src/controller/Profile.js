import axios from "axios";

    const getProfile = async () => {
        const token = localStorage.getItem("token");

        await new Promise(r => setTimeout(r, 1000));
    
        const response = await axios.get(
            process.env.REACT_APP_API_LINK + "auth/profile", {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
        );
        return response.data;
    };

export default getProfile;