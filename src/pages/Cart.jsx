import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItems } from '../store/cartSlice/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItem = useSelector(state =>
        state.cart

    );

    const deleteItem = (productId) => {
        dispatch(removeItems(productId))}
  return (
    <>
    {cartItem.map(item =>(
        <>
        <img src={item.image_url} alt={item.title} width={100} />
        <p>{item.title}</p>
        <button onClick={() => deleteItem(item.id)} >Remove Item</button>
        </>
    ))}
  
    
    </>
  )
}

export default Cart