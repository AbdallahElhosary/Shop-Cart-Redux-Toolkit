import React from 'react'
import "./Order.scss";
import { order } from "../../assets/data/data"
const Order = () => {

  return (
    <div className='order-container container bg-white mx-auto my-5 shadow-md'>
      <div className='grid xs:grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-2'>
        {
          order.map((order, i) => {
            return (
              <div className='order  gap-2 items-center justify-center ' key={i}>
                <div className='order-title  bg-indigo-500 rounded-full mb-2'>
                  <h2 className=''>{order.id}</h2>
                </div>
                <div className='order-text '>
                  <h5>{order.title}</h5>
                  <p>{order.desc}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Order