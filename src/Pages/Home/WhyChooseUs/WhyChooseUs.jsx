import React from "react";
import Title from "../../../Components/Title/Title";
import { Card } from "react-bootstrap";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <>
      <Title title="Why Choose Us" />
      <div className="container" data-aos="fade-up" data-aos-duration="1000">
        <div className="row text-center">
          <div className="col-md-6 col-lg-4 mt-4">
            <Card>
              <Card.Body>
                <Card.Img
                
                  className="chooseLogo"
                  src="https://img1.wsimg.com/isteam/ip/8234a433-abdd-4647-8989-84ba6d0f6d2b/pngtree-exploring-the-world-of-iot-devices-and.jpg/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365"
                />
                <h3 className="mt-3">Experience</h3>
                <p className="">
                  Our team of engineers has decades of combined experience in a
                  wide range of engineering disciplines. We have worked on
                  projects of all sizes and complexities, and we have the skills
                  and knowledge to tackle any challenge.
                </p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 col-lg-4 mt-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Img
            
                  className="chooseLogo"
                  src="https://img1.wsimg.com/isteam/ip/8234a433-abdd-4647-8989-84ba6d0f6d2b/istockphoto-1179633351-612x612.jpg/:/cr=t:0%25,l:21.9%25,w:56.21%25,h:100%25/rs=w:365,h:365,cg:true"
                />
                <h3 className="mt-3">Innovation</h3>
                <p className="">
                  We are committed to innovation and staying on the cutting edge
                  of technology. We use the latest tools and techniques to
                  deliver engineering solutions that are efficient, effective,
                  and sustainable.
                </p>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 col-lg-4 mt-4">
            <Card className="h-100">
              <Card.Body>
                <Card.Img
          
                  className="chooseLogo"
                  src="https://img1.wsimg.com/isteam/ip/8234a433-abdd-4647-8989-84ba6d0f6d2b/19414-HandShake-sstock1931473889.jpg/:/cr=t:0%25,l:22.22%25,w:55.56%25,h:100%25/rs=w:365,h:365,cg:true"
                />
                <h3 className="mt-3">Collaboration</h3>
                <p className="">
                  We believe that the best solutions come from working together.
                  We work closely with our clients to understand their needs and
                  develop customized solutions that meet their specific
                  requirements.
                </p>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
