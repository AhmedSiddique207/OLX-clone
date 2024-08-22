import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, clearUsers } from '../features/UserSlice'
import './UserDetails.css';

const UserDetails = () => {

  const dispatch = useDispatch();
  // const users = useSelector((state) => state.user);
  const users = useSelector((state) => state.user || []);
  const handleAddUser = () => {
    const newUser =
    {
      id: users.length + 1,
      name: 'Name',
      age: 'How Long Live',
      qualification: 'Education',
    }

    dispatch(addUser(newUser));
  };

  const handleClearUsers = () => {
    dispatch(clearUsers());
  };

  return (
    <>
      <div className="post-containerrr">
        <header className="header">
          <hr />
          <p className="welcome-text">Welcome, to Ahmed Education Hub</p>
          <h1 className="titleee">ADMIN TABLE</h1>
          <p className="subtitleee">One Destination for complete Web Development</p>
        </header>

        <nav className="navbarrrr">
          <ul className="nav-linksss">
            <li><a href="#">HOME</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">PROJECTS</a></li>
            <li><a href="#">CODE</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </nav>

        <main className="main-contenttt">
          <h2>List of User Details</h2>
          <div className="buttonssss">
            <button className="add-user-btn" onClick={handleAddUser}>Add new users</button>
            <button className="clear-users-btn" onClick={handleClearUsers}>Clear All Users</button>
          </div>
        </main>
      </div>

      <div className="table-container">
        <table >
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Qualification</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.qualification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserDetails;
