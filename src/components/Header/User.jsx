import React from 'react'
import avater from "../../assets/images/avater.png";
import UnopDropdown from "unop-react-dropdown";
import "./User.scss";
import { FiSettings } from "react-icons/fi";
import { BsBagCheck } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineQuestion } from "react-icons/ai"
import { TbLogout2 } from "react-icons/tb";

const User = () => {
    return (
        <div>
            <UnopDropdown trigger={
                <div className='user'>
                    <img src={avater} alt="avater" />
                </div>}
            >
                <div className={`dropdown-content shadow-xl py-1`}>
                    <div className='user-info mb-4'>
                        <img src={avater} alt='avater2' />
                        <div>
                            <div className='name'>Abdullah Ho</div>
                            <span className='location'>Cairo , EG</span>
                        </div>
                    </div>
                    <ul className='user-list '>
                        <li className='hover:bg-cyan-100 transition duration-300'>
                            <FiSettings />
                            <span>My Account</span>
                        </li>
                        <li className='hover:bg-cyan-100 transition duration-300'>
                            <BsBagCheck />
                            <span>My Order</span>
                        </li>
                        <li className='hover:bg-cyan-100 transition duration-300'>
                            <AiOutlineHeart />
                            <span>Wishlist</span>
                        </li>
                        <li className='hover:bg-cyan-100 transition duration-300'>
                            <AiOutlineQuestion />
                            <span>Help</span>
                        </li>
                        <li className='hover:bg-cyan-100 transition duration-300'>
                            <TbLogout2 />
                            <span>Log out</span>
                        </li>
                    </ul>
                </div>
            </UnopDropdown>
        </div>
    )
}

export default User