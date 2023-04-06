import React, { useState } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';

import toast from 'react-hot-toast';


const Home = () => {


   


    

    const tShirts= useLoaderData();

    const [cart,setCart]=useState([]);


     const handleAddToCart=(tShirt)=>{


        let find=cart.find(a=> a._id === tShirt._id)

        if(find){

             toast('you have all ready added this t shirt')
            return

        }

      else{
        let newCart=[...cart,tShirt];


        setCart(newCart)

      }
       


     }
     const handleRemoveToCart=(id)=>{

        let filter= cart.filter(a=> a._id !== id)

    


        setCart(filter)

       console.log(filter)


     }


    
 
    return (
        <div className='row container mx-auto '>

           
            <h2 > this is home</h2>

            <div className='col-9'>
           
               <div className="row row-cols-3">

               {
                tShirts.map(a=> <TShirt tShirts={a} key={a._id} handleAddToCart={handleAddToCart} 
                   ></TShirt>)
               }
               </div>
            
            </div>


             <div className='col-3'>
                <Cart cart={cart}  handleRemoveToCart={handleRemoveToCart}></Cart>
             </div>
          

           
        </div>
    );
};

export default Home;