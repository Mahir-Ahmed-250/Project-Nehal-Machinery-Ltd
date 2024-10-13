import React, { useEffect, useState } from 'react';
import './Machineries.css';
import BannerTitle from '../../../../Components/BannerTitle/BannerTitle';
import Machinery from '../Machinery/Machinery';

const Machineries = () => {
    const [machineries, setMachineries] = useState([]);
    useEffect(() => {
        fetch(
          "https://fakestoreapi.com/products/"
        )
          .then((res) => res.json())
          .then((data) => setMachineries(data));
      }, []);
    
    return (
      <>
        <div className="machineryBannerContainer">
          <BannerTitle title1="Machineries" title2="Nehal Machinery Ltd" />
        
        </div>
        <div className="container">
        <div className="row">
          {machineries.filter(machinery =>  machinery.category==="jewelery").map((machinery) => (
            <Machinery key={machinery.id} machinery={machinery} />
          ))}
        </div>
      
      </div>
      </>
    );
};

export default Machineries;