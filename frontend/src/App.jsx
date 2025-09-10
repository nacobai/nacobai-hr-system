import React, {useEffect, useState} from 'react'

export default function App(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('/api/users').then(r=>r.json()).then(setUsers).catch(()=>setUsers([]))
  },[])
  return (
    <div style={{fontFamily:'system-ui,Segoe UI,Roboto,Helvetica,Arial',padding:20}}>
      <h1>Nacobai HR System (Frontend)</h1>
      <p>Users from backend:</p>
      <pre>{JSON.stringify(users,null,2)}</pre>
    </div>
  )
}