import React from "react";
import { Button } from "react-bootstrap";
import 'animate.css';

export default function HeroComponent() {
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-md-5 mt-5 mb-5 " data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "117px",
                fontWeight: "700",
                lineHeight: "102.5px",
              }}
            >
              Krira{" "}
              <span
                style={{
                  fontFamily: "Poppins",
                  fontSize: "70px",
                  fontWeight: "200",
                }}
              >
                Logistics
              </span>{" "}
            </p>
            <p
              style={{
                lineHeight: "40px",
                paddingTop: "10px",
                fontFamily: "Poppins",
                fontSize: "26px",
                fontWeight: 300,
                letterSpacing:'0.02em'
              }}
            >
              Banking services to accompany you every day, accessible everywhere
              and physical or virtual cards for your professional expenses.
            </p>
            <Button
              variant="dark"
              style={{ width: "100%", padding: "20px", border: "none" }}
              id="btn"
            >
              Get Started
            </Button>
          </div>
          <div className="col-12 col-md-5  mt-5 mb-5  " data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"
    >
            <div style={{position:'relative'}}>
            <div>
              <img
                src={"./images/heroimage.png"}
                style={{ width: "100%", float: "left",height:'450px' }}
                className="w-sm-80"
                alt=""
              />
            </div>
            <div className="row d-flex p-2" style={{position:'absolute',top:'360px' ,left:'80px',width:'75%',height:'155px',backgroundColor:'white',border:'1px #CFCFCF solid',borderRadius:'20px',boxShadow:'10px solid black'}} >
                 <div className="col-4">
                    <div style={{alignItems:'left'}}>
                        <h4 style={{borderBottom:'1px solid black'}} className="pb-0 pt-2" >980K+</h4>
                        <h2 style={{fontSize:"10px" ,paddingTop:'0px'}} >Consignment Done</h2>
                        <p style={{fontSize:"8px" ,paddingBottom:'10px'}}>Your trusted choice for top-notch shipping and logistics.</p>
                    </div>
                 </div>
                 <div className="col-4" style={{borderLeft:'1px #CFCFCF solid'}} > 
                 <div style={{alignItems:'left'}}>
                        <h4 style={{borderBottom:'1px solid black'}} className="pb-0 pt-2" >80K</h4>
                        <h2 style={{fontSize:"10px" ,paddingTop:'0px'}} >Registered customers</h2>
                        <p style={{fontSize:"8px" ,paddingBottom:'10px'}}>Your trusted choice for top-notch shipping and logistics.</p>
                    </div></div>
                 <div className="col-4" style={{borderLeft:'1px #CFCFCF solid'}}> 
                 <div style={{alignItems:'left'}}>
                        <h4 style={{borderBottom:'1px solid black'}} className="pb-0 pt-2" >900</h4>
                        <h2 style={{fontSize:"10px" ,paddingTop:'0px'}} >Pincodes</h2>
                        <p style={{fontSize:"8px" ,paddingBottom:'10px'}}>Your trusted choice for top-notch shipping and logistics.</p>
                    </div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



