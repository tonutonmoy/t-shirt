import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';



const Special = () => {

    const newRing= useContext(RingContext)

    console.log(newRing)
    return (
        <div>
            <h2>Special</h2>

            <p><small>Ring: {newRing} </small></p>
        </div>
    );
};

export default Special;