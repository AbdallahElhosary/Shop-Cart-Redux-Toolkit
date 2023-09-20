import React from 'react'
import "./Category.scss";
import { category } from "../../assets/data/data";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const Category = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 5 },
    };
    const items = category.map((cat) => {
        return (
            <div className='swiper-item' key={cat.id} >
                <img src={cat.cover} alt="Catgeory" />
                <div>{cat.title}</div>
            </div>
        )
    })
    return (
        <div className='category my-4 p-4'>
            <div className='container flex'>
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                    autoPlay
                    autoPlayStrategy="none"
                    autoPlayInterval={1000}
                    animationDuration={1000}
                    animationType="slide"
                    infinite
                    disableDotsControls
                    disableButtonsControls
                />
            </div>
        </div>
    )
}

export default Category