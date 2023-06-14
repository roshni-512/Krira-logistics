import React from "react";
import { Button } from "react-bootstrap";
import 'animate.css';
import './story.css'

export default function HeroComponent() {
  return (
    <div style={{backgroundColor:'#10265f'}}>
      <div className="container">
        <div className="row" style={{height:'700px'}} >
          <div className="col-12 col-md-5 mt-5 mb-5 "  data-aos="fade-right"
     data-aos-easing="ease-in-sine">

            <p
              style={{
                fontFamily: "Arbutus Slab",
                fontSize: "100px",
                fontWeight: "700",
                lineHeight: "102.5px",
                color:'white',
                paddingTop:'100px'
               
              }}
              
            >
              Azmuth
             
            </p>
            <p
              style={{
                lineHeight: "40px",
                paddingTop: "10px",
                fontFamily: "Poppins",
                fontSize: "26px",
                fontWeight: 300,
                letterSpacing:'0.02em',
                color:'white'
              }}
            >
              Banking services to accompany you every day, accessible everywhere
              and physical or virtual cards for your professional expenses.
            </p>
            <Button
              variant="light"
              style={{ width: "100%", padding: "20px", border: "none" }}
              id="btn"
              className="mb-5 mt-3"
            >
              Get Started
            </Button>
          </div>
         
        </div>
      </div>
    </div>
  );
}



