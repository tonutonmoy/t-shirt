import React from 'react';

import './TShirt.css'

const TShirt = ({tShirts,handleAddToCart}) => {

    const {name,picture,price}=tShirts;
    return (
        <div>
            
            <div className="card t-shirt-container p-3 mb-5" >
  <img src={picture} className=' t-shirt-img' alt="..."/>
  <div className="card-body text-center">
    <h5 className="card-title mt-5">{name}</h5>
    <p className="card-text mt-3">Price: ${price}</p>
    <button onClick={()=> handleAddToCart(tShirts)}  className="btn btn-primary mt-3">Buy now</button>
  </div>
</div>
        </div>
    );
};

export default TShirt;