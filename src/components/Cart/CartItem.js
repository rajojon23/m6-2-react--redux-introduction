import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { removeItem } from '../../actions';

const CartItem = ({id, title, src, price}) => {
    const dispatch = useDispatch();


    console.log("item", {id, title, price});
    return (
        <Wrapper>
            
            <ItemContainer>
            <TitleRemove>
                <div>{title}</div> 
                <button className="remove" onClick={() =>

                dispatch(removeItem({id, title, price}))
                // console.log("inside onclick")
                }> X </button>
            </TitleRemove>        
                <div className="quantity"><span>Quantity:</span> <input value="1"></input> </div>               
            </ItemContainer>

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

  .remove{
      color: #fff;
      cursor: pointer;
      border: none;
      background: none;
      margin-left: auto; //needed to put on the far right as a flex child
      
  }

  input{
    width: 19px;
    border: none;
    background-color: darkmagenta;
    color: #fff;
    border-bottom: 2px solid #fff;
    text-align: center;
  }
  .quantity{
    background-color: darkmagenta;
    padding: 6px;
  }

  .quantity span{
    color: lightgray;
  }
`;

const TitleRemove = styled.div`
  display: flex;
  flex-direction: row;
`;

const ItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 235px;
    background-color: rgb(64, 31, 67);
    height: 100%;
    border: 2px dashed #fff;
`;



export default CartItem;  