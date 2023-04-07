import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Fathers = ({ring}) => {
    return (
        <div >
            <h2>Father</h2>
           <section className='d-flex gap-3'>
           <Myself ring={ring}></Myself>
            <Brother></Brother>
            <Sister></Sister>
           </section>
        </div>
    );
};

export default Fathers;