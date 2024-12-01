import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import { fetchUser } from '../Store/UserSlice';

const UserList = ({ searchQuery }) => {
  // const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const dispatch = useDispatch();
const {userList,status} = useSelector((state) => state.userReducer);

console.log("status",status)

  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //   const data = await response.json();
    //   setUsers(data);
    //   setFilteredUsers(data); // Initialize filteredUsers
    // };

    // fetchData();
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    const filtered = (userList || []).filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.company.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchQuery,userList]);

  return (
    <div className="w-100">
      <p className="text-4xl font-bold capitalize mt-5">User List</p>
      {status === 'loading' ? 
      (
        <>
        <p className="text-xl font-bold mt-[100px]">Loading...</p>
        </>
      ):
      (
        <>
      
     { 
        filteredUsers.map((user) => (
          <Link to={`/details/${user?.id}`} key={user?.id}>
            <div className="border-2 border-current p-5 m-5 rounded-[12px] bg-cyan-600 hover:bg-cyan-900 hover:text-white">
              <div className="mb-5">
                <p className="text-3xl font-bold">{user?.name}</p>
              </div>
              <div className="grid md:grid-cols-1 lg:grid-cols-3">
                <div>
                  <p>
                    <strong>Email:</strong> {user?.email}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Phone:</strong> {user?.phone}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Company:</strong> {user?.company?.name}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))
   }  </>
  ) }
    </div>
  );
};

export default UserList;
