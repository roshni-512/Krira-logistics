import React from 'react'
import './story.css'
export default function StoryComponent() {
  return (
    <div >
    <div className='container my-4' style={{ fontFamily: "Fraunces" }} >
        <div className='row d-flex justify-content-between' >
        <div className='col-12 col-md-6 mt-5 mb-5'data-aos="fade-right">
                <img src={"./images/bgcontact.png"} style={{ width: '100%', float: 'right' }}  alt='' />
            </div>
            <div className='col-12 col-md-6 ps-sm-5'  data-aos="fade-left"
     data-aos-easing="linear"
     style={{display:'fllex', alignSelf:'center',padding:'10px'}}>
        <strong style={{fontFamily:'Poppins',fontWeight:900,fontSize:'82px',lineHeight:'90px',color:'#10265f' }} className='mt-5 mb-5'>Story behind <br></br>Azmuth</strong>
        <p style={{fontFamily:'Poppins',fontWeight:'200',fontSize:'26px',lineHeight:'43.4px',letterSpacing:'2%',verticalAlign:'top',alignContent:'left'}} className='my-4'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.</p>
        
        </div>
          
        </div>
    </div>
</div>
  )
}
