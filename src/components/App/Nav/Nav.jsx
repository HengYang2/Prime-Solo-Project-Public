import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from './LogOutButton/LogOutButton';
// import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <h2 className="nav-title">Know Your Hours</h2>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <div>
              <Link className="navLink" to="/user">
                Client Cards
              </Link>
            </div>

            <div>
              <Link className="navLink" to="/postLibrary">
                Post Library
              </Link>
            </div>

            <div>
              <Link className="navLink" to="/info">
                Info Page
              </Link>
            </div>
            <div>
              <LogOutButton className="navLink" />
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default Nav;
