import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';
import { getStoreItemArray } from "../../reducers";
import { useSelector } from 'react-redux';


const Cart = () => {
    const storeItems  = useSelector(getStoreItemArray);
    
    console.log("store items" , storeItems);

    let total = 0;

    storeItems.forEach((item) =>{ 
        total+=item.price;
    });

    total = (total/100).toFixed(2);

  return (
    <Wrapper>

        <div>Your Cart</div>
        <div>{storeItems.length} Items</div>
        {
            
            storeItems.map((item) => (
                <CartItem  key={item.id} {...item}/>
            ))


        }

        <div>Total: {total}$</div>               
        <div><button>Purchase</button></div>     
        
    </Wrapper>
  );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 245px;
    background-color: rgb(64, 31, 67);
    height: 100%;
`;


export default Cart;

