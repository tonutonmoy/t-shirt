import React from 'react';
import Cusin from '../Cusin/Cusin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h1>aunty</h1>

            <section className='d-flex gap-3'>
                <Cusin>Abir</Cusin>
                <Cusin ring={ring} hasFriend={true}> Nibir</Cusin>
            </section>
        </div>
    );
};

export default Aunty;