import React from 'react';
import { Card } from 'react-bootstrap';

const HomeMachinery = ({ product }) => {
    const { name, image, description } = product;
    return (
        <div className="col-md-6 col-lg-4 mt-4">
        <Card className='h-100' >
            <Card.Body>
                <Card.Img variant="top" className='product-img' src={image} />
                <h5 className='mt-3'>{name}</h5>

                <p className="">{description}</p>
               
               
            </Card.Body>
        </Card>
    </div>
    );
};

export default HomeMachinery;