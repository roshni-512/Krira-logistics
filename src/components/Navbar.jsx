import React from 'react'

export default function Navbar() {
  return (
    <div style={{  backgroundColor:' #3C3A3A'}}>
    <div className="container ">
      <div className="row d-flex justify-content-between" style={{backgroundColor:'#3C3A3A'}}>
        <div className="col-sm-1 col-6 d-flex" id='logo'>
              <p className='mt-3' style={{fontWeight:900,color:'white',fontSize:'19.5px'}}>KRIRA</p>
        </div>
        <div className="col-sm-3 col-6 mt-3 col-lg-3 d-flex justify-content-end ">  
            
        <a href='#ab'  className='mx-5 mb-3 text-center' style={{width:'100%',padding:'10px',marginLeft:'20px',backgroundColor:'white',color:'black',borderRadius:'5px',textDecoration:'none',scrollBehavior:'smooth'}}  id='btn'>Enquiry</a>
             </div>
      </div>
       </div>
  </div>
  )
}
