import React from 'react';

const Machinery = ({machinery}) => {
    const { id, name, image, description } = machinery;
    return (
      <>
        <div
          className="col-md-6 col-lg-4 mt-4 mb-4"
          data-aos="fade-in"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div className="card h-100">
            <img src={image} alt="postsImage" />
            <div className="card-body " style={{ backgroundColor: "#f4f4f4" }}>
              <h3 className="card-title blog-title">{name}</h3>
              <h6 className="blog-post-description">
                {description}
                
              </h6>
              {/* <div className="mt-auto">
              <Link to={`/blog/${id}`}>
                <Button
                  title="Read More"
                  width="200px"
                  border="2px solid black"
                  color="black"
                  fontSize="20px"
                />
              </Link>
            </div> */}
            </div>
          </div>
        </div>
      </>
    );
};

export default Machinery;