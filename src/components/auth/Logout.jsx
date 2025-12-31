import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logout.svg";
import { useAuth } from "../../hooks/useAuth";

export const Logout = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const handleLogout = () => {
    setAuth({});
    navigate("/login");
  };

  return (
    <button className="icon-btn cursor-pointer" onClick={handleLogout}>
      <img src={LogoutIcon} alt="Logout" />
    </button>
  );
};
