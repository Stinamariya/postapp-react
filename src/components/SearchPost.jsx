import React from 'react'

const SearchPost = () => {
  return (
    <div>
        <div className="container">
            <h1><center>SEARCH POST</center></h1>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">SEARCH POST CENTER</label>
                    <input type="text" className="form-control" />
                </div>
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <center><button className="btn btn-success">Search</button></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchPost