import React, { useState } from 'react'
import { BsBagCheck } from "react-icons/bs";
import './Header.scss';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Card = () => {
    const [show, setShow] = useState(false);

    // const quantity = useSelector((state) => state.cart.totalQuantity)
    const cartItems = useSelector((state) => state.cart.itemsList)

    // console.log(cartItems);
    //total
    let total = 0
    const itemsLists = useSelector((state) => state.cart.itemsList)
    itemsLists.forEach((item) => {
        total += item.totalPrice
    }) 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='cart' onClick={handleShow}>
                <BsBagCheck />
                <span>{cartItems.length}</span>
            </div>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} id={item.id} cover={item.cover} name={item.name} price={item.price} quantity={item.quantity} totalPrice={item.totalPrice} />
                    ))}
                    
                    {
                        total > 0 ? 
                        <div className='bg-gray-900 text-white flex justify-between p-3 rounded-md'>
                            <span>Priceed To Checkout</span>
                            <span>${parseFloat(total.toFixed(2))}</span>
                        </div>
                        :
                        <h2 className="text-center">
                                The Cart If Empty
                        </h2>
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default Card