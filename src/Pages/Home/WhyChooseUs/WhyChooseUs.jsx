import React from 'react';
import Title from '../../../Components/Title/Title';
import { Card } from 'react-bootstrap';
import './WhyChooseUs.css';


const WhyChooseUs = () => {
    return (
      <>
        <Title title="Why Choose Us" />
        <div className="container">
          <div className="row text-center">
            <div className="col-md-6 col-lg-4 mt-4">
              <Card>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    className="chooseLogo"
                    src="https://img1.wsimg.com/isteam/ip/8234a433-abdd-4647-8989-84ba6d0f6d2b/pngtree-exploring-the-world-of-iot-devices-and.jpg/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365"
                  />
                  <h3 className='mt-3'>Experience</h3>
                  <p className="">Our team of engineers has decades of combined experience in a wide range of engineering disciplines. We have worked on projects of all sizes and complexities, and we have the skills and knowledge to tackle any challenge.</p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 col-lg-4 mt-4">
              <Card>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    className="chooseLogo"
                    src="https://img1.wsimg.com/isteam/ip/8234a433-abdd-4647-8989-84ba6d0f6d2b/istockphoto-1179633351-612x612.jpg/:/cr=t:0%25,l:21.9%25,w:56.21%25,h:100%25/rs=w:365,h:365,cg:true"
                  />
                  <p className=""></p>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-6 col-lg-4 mt-4">
              <Card>
                <Card.Body>
                  <Card.Img
                    variant="top"
                    className="chooseLogo"
                    src="https://img1.wsimg.com/isteam/ip/8234a433-abdd-4647-8989-84ba6d0f6d2b/19414-HandShake-sstock1931473889.jpg/:/cr=t:0%25,l:22.22%25,w:55.56%25,h:100%25/rs=w:365,h:365,cg:true"
                  />
                  <p className="">{}</p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
};

export default WhyChooseUs;