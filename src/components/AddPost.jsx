import React from 'react'

const AddPost = () => {
  return (
    <div>
        <div className="container">
            <h1><center>POST APPLICATION</center></h1>
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">USER ID</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">POST ID</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">TITLE</label>
                                <input type="text" className="form-control" />
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">BODY</label>
                                <input type="text" className="form-control" />
                            </div>
                            <br /><br /><br />
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                
                                <center><button className="btn btn-success">REGISTER</button></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddPost