import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { removeItem } from '../../actions';

const CartItem = ({id, title, src, price}) => {
    const dispatch = useDispatch();


    console.log("item", {id, title, price});
    return (
        <Wrapper>
            <div><button onClick={() =>

                dispatch(removeItem({id, title, price}))
                // console.log("inside onclick")
            }> Remove</button></div>

            <div>{title}</div>               
            <div>quantity: <input value="1"></input> </div>               


        </Wrapper>
    );
  };


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  

  div{
    margin: 5px;
  }
`;

export default CartItem;  