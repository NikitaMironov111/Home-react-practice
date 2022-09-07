import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../context/context';
const NavBar = () => {
  const { setOpenModalLogin, isLoginUser, setIsLoginUser } =
    useContext(Context);
  const logOut = () => {
    setIsLoginUser(false);
    localStorage.clear();
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav mr-1 mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="Main">
              Main
            </Link>
          </li>
        </ul>
        {isLoginUser ? (
          <>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="users">
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="posts">
                  Posts
                </Link>
              </li>
            </ul>
            <button className="btn btn-primary" onClick={() => logOut()}>
              LogOut
            </button>
          </>
        ) : (
          <Link
            to="login"
            className="btn btn-primary"
            onClick={() => setOpenModalLogin(true)}
          >
            LogIn
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;