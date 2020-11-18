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

        <div className="cart_title">Your Cart</div>
        <div className="items_number">{storeItems.length} Items</div>
        {
            
            storeItems.map((item) => (
                <CartItem  key={item.id} {...item}/>
            ))


        }
        <TotalPurchase>
            <div class="">Total: <span>${total}</span></div>               
            <button>Purchase</button> 
        </TotalPurchase>    
        
    </Wrapper>
  );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 245px;
    background-color: rgb(64, 31, 67);
    height: 100%;

    .items_number{
        margin-bottom: 25px;
        margin-left: 20px;
        color: lightgray;
    }

    .cart_title{
        margin-top: 25px;
        margin-left: 20px;
        font-size: 23px;
        font-weight: bold;
    }
`;

const TotalPurchase = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    margin-left: 20px;
    justify-content: space-around;
    align-items: center;

    span{
        font-weight: bold;
    }

    button{
        border-radius: 12px;
        background: #ff406e;
        color: white;
        border: none;
        padding: 8px;
        font-weight: bold;
    }
`;


export default Cart;

