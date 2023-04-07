

import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import Fathers from '../Fathers/Fathers.jsx';

import './Grandpa.css'

import React, { createContext} from 'react';
 export  const RingContext=createContext('')

const Grandpa = () => {

  let ring='diamond';

   
    return (
        <div className='border border-primary p-5'>
        
           <h2 className='text-center'>Grandpa</h2>

           <section className='grandpa-section d-flex gap-3'>
        

           <RingContext.Provider value='golden ring'>

           <Fathers ring={ring}></Fathers>
           <Uncle></Uncle>
           <Aunty ring={ring}></Aunty>

           </RingContext.Provider>


           </section>
        </div>
    );
};

export default Grandpa;