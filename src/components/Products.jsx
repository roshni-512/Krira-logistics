import React, { useRef } from "react";
import "./products.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function Products() {

    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      
    
      const sliderRef= useRef(null)
      console.log(sliderRef.current)
      
  return (
    <div id='ab'>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-12 col-md-5 mt-5 mb-5" data-aos="fade-down"
     data-aos-easing="linear">
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "80px",
                lineHeight: "90px",
                marginTop:'35px'
              }}
            >
              Our Products
            </p>
            <Slider {...settings} ref={sliderRef}>
            <div className="card pb-3" style={{width: '100%'}}>
  <div className="card-body">
    <h5 className="card-title"><img src={"./images/productimage.png"} style={{ width: '10%', float: 'left' }}  alt='' /></h5>
    <div  style={{float:'left'}}>
    <spam className=''style={{fontFamily:'Poppins',fontSize:'30px',lineHeight:'90px'}}>Top Team</spam>
    <p className=''style={{fontFamily:'Poppins',fontSize:'20px',lineHeight:'33px',fontWeight:200, letterSpacing:'2%'}}>Your trusted choice for top-notch shipping and logistics services, delivering excellence and exceeding expectations.</p>
    <span>Know More<KeyboardDoubleArrowRightIcon/></span>
    </div>
    </div>
       </div>
       <div className="card pb-3" style={{width: '100%'}}>
  <div className="card-body">
    <h5 className="card-title"><img src={"./images/productimage.png"} style={{ width: '10%', float: 'left' }}  alt='' /></h5>
    <div  style={{float:'left'}}>
    <spam className=''style={{fontFamily:'Poppins',fontSize:'30px',lineHeight:'90px'}}>Top Team</spam>
    <p className=''style={{fontFamily:'Poppins',fontSize:'20px',lineHeight:'33px',fontWeight:200, letterSpacing:'2%'}}>Your trusted choice for top-notch shipping and logistics services, delivering excellence and exceeding expectations.</p>
    <span>Know More<KeyboardDoubleArrowRightIcon/></span>
    </div>
    </div>
       </div>
       <div className="card pb-3" style={{width: '100%'}}>
  <div className="card-body">
    <h5 className="card-title"><img src={"./images/productimage.png"} style={{ width: '10%', float: 'left' }}  alt='' /></h5>
    <div  style={{float:'left'}}>
    <spam className=''style={{fontFamily:'Poppins',fontSize:'30px',lineHeight:'90px'}}>Top Team</spam>
    <p className=''style={{fontFamily:'Poppins',fontSize:'20px',lineHeight:'33px',fontWeight:200, letterSpacing:'2%'}}>Your trusted choice for top-notch shipping and logistics services, delivering excellence and exceeding expectations.</p>
    <span className="">Know More<KeyboardDoubleArrowRightIcon/></span>
    </div>
    </div>
    
       </div>
       </Slider>
        <div className="row">
        <div className="col-6 "> <ArrowBackIcon className="mt-1" style={{float:'left'}} onClick={()=> sliderRef.current.slickPrev()}/></div>
        <div className="col-6"> 
        <ArrowForwardIcon className="mt-2" style={{float:'right'}} onClick={()=> sliderRef.current.slickNext()}/>
        
        </div>
       </div>
      
       
      
          </div>
    
          <div
            className="col-12 col-md-5 mt-5 mb-5 p-5"
            style={{ backgroundColor: " #3C3A3A" }}
            data-aos="fade-right"
     data-aos-easing="linear"
          >
            <p
              style={{
                fontFamily: "Poppins",
                fontSize: "80px",
                color: "white",
                lineHeight: "90px",
               
               
              }}
            >
              KRIRA
            </p>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Your Name" />
              </Form.Group>
              <Row className="mt-3">
                <Col>
                  <Form.Control placeholder="Your email" />
                </Col>
                <Col>
                  <Form.Control placeholder="Your Phone" />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col>
                  <Form.Control placeholder="Your Company" />
                </Col>
                <Col>
                  <Form.Control placeholder="Your position/role" />
                </Col>
              </Row>
              <Col>
                <Form.Control
                  as="textarea"
                  placeholder="Drop a line"
                  style={{ height: "100px" }}
                  className="mt-3"
                />
              </Col>
              <Col>
                <Button
                  className="mt-3 mb-5"
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    border: "none",
                    color: "black",
                  }}
                >
                  Send
                </Button>
              </Col>
            </Form>
          
          </div>
        </div>
      </div>
    </div>
  );
}
