import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';

import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Navbar() {
  return (
    <div style={{  backgroundColor:' #10265f',borderBottom:'1px solid white'}}>
    <div className="container ">
      <div className="row d-flex justify-content-between" >
        <div className="col-sm-1 col-4 d-flex" id='logo'>
              <p className='mt-3' style={{fontSize:'19.5px'}}><img src={"./images/Group 12.png"} style={{ width: '100%', float: 'left' }}  alt='' /></p>
        </div>
        <div className="col-sm-8 col-6 mt-3 mb-3 col-lg-3 d-flex justify-content-end">  
             
             <InstagramIcon className='mx-1 mt-3'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'4px',color:'#10265f'}}/>
             <LinkedInIcon className='mx-1 mt-3'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'4px',color:'#10265f'}}/>
             <WhatsAppIcon className='mx-1 mt-3'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'4px',color:'#10265f'}}/>
             <FacebookIcon className='mx-1 mt-3'style={{backgroundColor:'white',borderRadius:'50px',width:'30px',height:'30px',padding:'4px',color:'#10265f'}}/>
       
             </div>
      </div>
       </div>
  </div>
  )
}
