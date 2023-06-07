import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';
export default function Footer() {
  return (
        <div style={{backgroundColor:' #3C3A3A'}}>
    <div className="container ">
      <div className="row d-flex justify-content-around">
        <div className="col-sm-1 col-12 d-flex" id='logo'>
              <p className='mt-3' style={{fontWeight:900,color:'white',fontSize:'19.5px'}}>KRIRA</p>
        </div>
        <div className="col-sm-6 col-lg-8 col-12 mt-3  col-md-6 " style={{fontSize:'15px'}} id='info'>
               <a href="#action1" className='mx-3 ' style={{fontSize:'15px',color:'white',textDecoration:'none',fontFamily:'Poppins',fontWeight:200}}>Account</a>
               <a href="#action2"  className='mx-3'style={{fontSize:'15px',color:'white',textDecoration:'none',fontFamily:'Poppins',fontWeight:200}}>Condition of Solution</a>
              <a href="#action3"   className='mx-3' style={{fontSize:'15px',color:'white',textDecoration:'none',fontFamily:'Poppins',fontWeight:200}}>Privacy Notice</a>
              <a href="#action2"  className='mx-3'style={{fontSize:'15px',color:'white',textDecoration:'none',fontFamily:'Poppins',fontWeight:200}}>Intrest-based Ads</a>
              <a href="#action3"   className='mx-3'style={{fontSize:'15px',color:'white',textDecoration:'none',fontFamily:'Poppins',fontWeight:200}}><CopyrightIcon fontSize='10px'/>2022-2023 , KRIRIA LOGISTICS</a>
             </div>
        <div className="col-sm-3 col-12 mt-3  col-lg-3 d-flex justify-content-end"id='social-links' >  
            
             <InstagramIcon className='mx-1'style={{backgroundColor:'white',borderRadius:'30px',width:'10%',height:'30px',padding:'5px'}}/>
             <YouTubeIcon className='mx-1'style={{backgroundColor:'white',borderRadius:'30px',width:'10%',height:'30px',padding:'5px'}}/>
             <WhatsAppIcon className='mx-1'style={{backgroundColor:'white',borderRadius:'30px',width:'10%',height:'30px',padding:'5px'}}/>
             <TwitterIcon className='mx-1'style={{backgroundColor:'white',borderRadius:'30px',width:'10%',height:'30px',padding:'5px'}}/>
             <FacebookIcon className='mx-1'style={{backgroundColor:'white',borderRadius:'30px',width:'10%',height:'30px',padding:'5px'}}/>
             </div>
      </div>
       </div>
  </div>
  )
}
