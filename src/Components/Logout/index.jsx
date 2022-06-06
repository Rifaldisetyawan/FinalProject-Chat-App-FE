import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import axiosInstance from "../../config";
import { logoutRoute } from "../../Utils/APIRoutes";
import '../Logout/Logout.css'
import swal from "sweetalert";


const Logout = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    const data = await axiosInstance.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      swal({
        title: "Success",
        text: "Logout Success",
        icon: "success",
        button: false,
        timer: 800
      });
      setTimeout(function () {

        navigate("/login");
      }, 900);
    }
  };
  return (
    <Button onClick={handleClick} className='button-logout'>
      <BiPowerOff />
    </Button>
  );
}

export default Logout
const Button = styled.button`
`;
