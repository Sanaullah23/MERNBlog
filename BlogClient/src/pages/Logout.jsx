import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Logout() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(AuthContext);

  const logout =async () => {
   
     axios.post('http://localhost:8080/api/v1/auth/lgout')
    setCurrentUser(localStorage.removeItem("user"));
  };
  return (
    <div>
      <button className="cursor-pointer font-medium bg-teal-500 text-white px-2 py-1 rounded-md" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Logout;
