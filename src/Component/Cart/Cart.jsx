import React from 'react';

const Cart = ({cart,handleRemoveToCart}) => {

    return (
        <div>
            <h2>order summary: {cart.length}</h2>

            {
                cart.map(a=> <p key={a._id}> 
                    
                    {a.name} 

                    <button onClick={()=> handleRemoveToCart(a._id)} >X</button>
                    
                     </p>)
            }
        </div>
    );
};

export default Cart;