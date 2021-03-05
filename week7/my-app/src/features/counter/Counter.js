import React, { useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addName, addPhone, addEmail, selectUsers } from './counterSlice';


export function Counter() {


  const users = useSelector(selectUsers);
  const dispatch = useDispatch();
  const [ userEmail,  emails ] = useState('');
  const [ userName, names ] = useState('');
  const [ userPhone, phones] = useState('');

  // const handleChange = (e) => {
  //   const { name, value } = e.target
  //   ({ [name] : value});
  
  //  }
  
  const clearField = () => {
    names('');
    phones('');
    emails('');
  }

  const movieList = users.map((user, id) =>
    <div key={id}>{user}</div>
  );
  console.log(movieList)

  return (
    <div>
        <div>
          <input
            type= "text"
            aria-label="Enter Name"
            placeholder="Enter Name"
            required={true}
            name="userName"
            value={userName}
            onChange={e => names(e.target.value)}
          />
          <input
            type= "text"
            aria-label="Enter Phone"
            placeholder="Enter Phone"
            required={true}
            name="userPhone"
            value={userPhone}
            onChange={e => {phones(e.target.value)
            addPhone(e.target.value)
            }}
            
          />
          <input
            type= "text"
            aria-label="Enter Email"
            placeholder="Enter Email"
            required={true}
            name="userEmail"
            value={userEmail}
            onChange={e => {emails(e.target.value)
              addEmail(e.target.value)
            }}
          />
          <button
            aria-label="Add User"
            onClick={() => dispatch(addName([userName, userPhone, userEmail]), clearField())}
          >
            Add Movie
          </button>
        </div>
        <div>
            <h2>{movieList}</h2>
        </div>
    </div>
  );
}