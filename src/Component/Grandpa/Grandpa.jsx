import React from 'react';

import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import Fathers from '../Fathers/Fathers.jsx';

import './Grandpa.css'


const Grandpa = () => {
    return (
        <div className='d-flex border border-primary'>
           <h2>Grandpa</h2>

           <section className='grandpa-section d-flex gap-3'>
         <Fathers></Fathers>
           <Uncle></Uncle>
           <Aunty></Aunty>
           </section>
        </div>
    );
};

export default Grandpa;