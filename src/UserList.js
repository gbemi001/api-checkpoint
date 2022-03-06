import axios from "axios";
import React, {useEffect, useState} from "react";
 const UserList = () => {
     const baseUrl = 'https://jsonplaceholder.typicode.com/users'

    const[listofuser, setlistofuser] = useState([])

  useEffect(()=>{
      axios.get(baseUrl)
      .then((response) => {
        setlistofuser(response.data)
      })
  }, [])
  if (!listofuser) return null
     return(
      <div className='row'>
      {listofuser.map((user, key) =>
        <div user={user} key={key}>
          <h3>{user.id}</h3>
          <h3>{user.name}</h3>
          <h3>{user.username}</h3>
          <h3>{user.email}</h3>
          <h3>{user.address}</h3>
          <h3>{user.phone}</h3>
          <h3>{user.website}</h3>
          <h3>{user.company}</h3>
        </div>
      )}
     </div>
     )
 }; export default UserList