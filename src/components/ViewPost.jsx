import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewPost = () => {
    const [data,setdata]=useState([])
    const fetchData=() => {
axios.get("https://jsonplaceholder.typicode.com/posts").then(
  (response)=>{
    console.log(response.data)
    setdata(response.data)
  }
).catch().finally()
    }
useEffect(()=>fetchData(),[])
    
  return (
    <div>
        <NavBar/>
        
        <div className="container">
            <h1><center>VIEW POST</center></h1>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table"BORDER="3">
  <thead>
    <tr>
      <th scope="col">USER ID</th>
      <th scope="col"> ID</th>
      <th scope="col">TITLE</th>
    
    </tr>
  </thead>
  {data.map(
    (value, index) => {
        return <tbody>
        <tr>
        
          <td>{value.userId}</td>
          <td>{value.id}</td>
          <td>{value.title}</td>
          <td>{value.body}</td>
        </tr>
        
      </tbody>
    }
  )}
</table>
                </div>
                
            </div>
        </div>
        
    </div>

  )
}

export default ViewPost