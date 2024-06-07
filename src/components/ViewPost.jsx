import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewPost = () => {
    const [data,setdata]=useState(
        [
            {"userid":1,"postid":1,"title":"ABC"},
            {"userid":2,"postid":2,"title":"HGG"},
            {"userid":3,"postid":3,"title":"MJM"},
            {"userid":4,"postid":4,"title":"UJK"},
            {"userid":5,"postid":5,"title":"JKL"},
            {"userid":6,"postid":6,"title":"tfh"},
            {"userid":7,"postid":7,"title":"kjg"},
            {"userid":8,"postid":8,"title":"dgh"},
            {"userid":9,"postid":9,"title":"dhj"},
            {"userid":10,"postid":10,"title":"RED"},
            {"userid":11,"postid":11,"title":"RGV"},
            {"userid":12,"postid":12,"title":"RRC"},
            {"userid":13,"postid":13,"title":"KGS"}
        ]
    )
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
      <th scope="col">POST ID</th>
      <th scope="col">TITLE</th>
    
    </tr>
  </thead>
  {data.map(
    (value, index) => {
        return <tbody>
        <tr>
        
          <td>{value.userid}</td>
          <td>{value.postid}</td>
          <td>{value.title}</td>
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