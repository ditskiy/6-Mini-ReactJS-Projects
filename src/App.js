import React from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';
import { useState } from "react"
import { useEffect } from 'react';


// Тут список пользователей: https://reqres.in/api/users

function App() {
  const [users, setUsers] = useState([])
  const [invaise, setInvaise] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [success, setSuccess] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then(res => res.json())
      .then(json => setUsers(json.data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
  }, []);

  const onCangeSearchValue = (e) => {
    setSearchValue(e.target.value)
  }

  const onClicInvait = (id) => {
    if (invaise.includes(id)) {
      setInvaise(prev => prev.filter(_id => _id !== id))
    } else {
      setInvaise( prev => [...prev, id])
    }
  }

  const onSabmitClick = () => {
    setSuccess(!success)
  }

  return (
    <div className="App">
      {
        success ? <Success 
        onSabmitClick={onSabmitClick} 
        invaise={invaise}/> : <Users 
        onSabmitClick={onSabmitClick}
        invaise={invaise}
        onClicInvait={onClicInvait}
        onCangeSearchValue={onCangeSearchValue}
        searchValue={searchValue} 
        items={users} 
        isLoading={isLoading}/>
      }
      {/* <Success /> */}
    </div>
  );
}

export default App;
