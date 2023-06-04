import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from './LogOutButton/LogOutButton';
import ClientCardsButton from './ClientCardsButton/ClientCardsButton';
// import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="navbar">
      <div className='navLogo'>
        <h2 className="navLogoText">Know Your Hours</h2>
      </div>

      <div className='navFlexDiv'>
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
            <ClientCardsButton />


{/*         <div>
              <Link className="navLink" to="/postLibrary">
                Post Library
              </Link>
            </div>

            <div>
              <Link className="navLink" to="/graphData">
                Graph Data
              </Link>
            </div> */}
            <LogOutButton />
          </>
        )}

      </div>
      <div className='navbarFooter'>
            App developed by Heng Yang
      </div>
    </div>
  );
}

export default Nav;
