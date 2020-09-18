import React from 'react';

const NavBar = ({ user, handleLogout }) => {
    return(
      <>
        {user ?
        <nav>
          <div className="nav-wrapper">
            <a className=" left" href="/"><img src="https://i.imgur.com/qx7UQ7E.png" height='66' alt="logo" border="0"/></a>
            <ul id="nav-mobile" className="right">
              <li><a href=" " className="nav-link">Welcome, {user.name}</a></li>
              <li><a className="nav-link-a" href="/messages">Message Board</a></li>
              <li><a className="nav-link-b" href="/playlists">Playlist Index</a></li>
              <li><a className="nav-link-a" href="/users">Users</a></li>
              <li><a className="nav-link-b" href="/profile">My Profile</a></li>
              <li><a href=" " className="nav-link" onClick={handleLogout}>Log Out</a></li>
            </ul>
          </div>
        </nav>
      :
        <nav>
          <div className="nav-wrapper">
            <a className=" left" href="/"><img src="https://i.imgur.com/qx7UQ7E.png" height='66' alt="logo" border="0"/></a>
            <ul id="nav-mobile" className="right">
              <li><a className="nav-link-a" href="/messages">Message Board</a></li>
              <li><a href='http://localhost:8888' > Login to Spotify </a></li>
            </ul>
          </div>
        </nav>
        }
      </>
    )
  }
  export default NavBar;