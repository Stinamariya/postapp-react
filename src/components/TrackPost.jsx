import React from 'react'
import NavBar from './NavBar'

const TrackPost = () => {
  return (
    <div>
        <NavBar/>
        <div className="container">
            <h1><center>TRACK POST</center></h1>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label"> POST ID</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><button className="btn btn-success">Track</button></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrackPost