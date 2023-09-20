import React from 'react'
import "./Slide.scss";
import { slide } from "../../assets/data/data"
const Slide = () => {
    return (
        <div className='slide my-3'>
            <div className='container mx-auto flex justify-center'>
                <div className='grid xs:grid-cols-1 gap-4 md:grid-cols-4 sm:grid-cols-2'>
                    {
                        slide.map((sli,i) => {
                            return (
                                <div className='box' key={i}>
                                    <img src={sli.image} alt="Slide" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Slide