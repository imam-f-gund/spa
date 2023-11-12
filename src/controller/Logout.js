import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function Logout() {
    const navigate = useNavigate();
    
    const logoutData = () => {
        
        localStorage.removeItem("token");
        
        setTimeout(() => {
            navigate('/login');
        }, 1000)
        navigate(0);
        
    }
    
    return (
        <>
        <li><a className="dropdown-item" href="#" onClick={logoutData}>Logout</a></li>
      </>
    )
}
