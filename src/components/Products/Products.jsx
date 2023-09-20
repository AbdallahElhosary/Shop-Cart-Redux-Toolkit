import React from 'react'
import "./Products.scss"
import { product } from '../../assets/data/data'
import ProductItem from './ProductItem';
const Products = () => {
    
    return (
        <div className='product'>
            <div className='container'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {
                        product.map((pro) => {
                            return (
                                <ProductItem key={pro.id} id={pro.id}  cover={pro.cover} name={pro.name} price={pro.price} />
                        )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products