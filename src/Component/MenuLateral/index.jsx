import { Container } from "./style";
import { Link } from "react-router-dom";
import { UserContext } from "../../Providers/User";
import { useContext } from "react";


export const MenuLateral = ({ isOpen, isLogged, handleLogout }) => {

  const { user } = useContext(UserContext);

  return (
      <Container isOpen={isOpen}>
        <div className="wrapper">
          {isLogged ? (
          <ul>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/aboutUs" className="link">
              About Us
            </Link>
          </li>
          {user.category === "Churrasqueiro" ? 
          (
              <li><Link to="/dashboardBbc" className="link">Dashboard</Link></li>
          ) : (
              <li><Link to="/events" className="link">Eventos</Link></li>
          )}
          <li>
            <button className="logoutBtn" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
          ) : (
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutUs" className="link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/login" className="link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="link">
                Register
              </Link>
            </li>
          </ul>
          )}

        </div>
      </Container>
  );
};
