import './Header.scss';
import logo from "../../assets/images/Medicine.svg";
import Card from './Card';
import User from './User';
import { Link } from 'react-router-dom';
const Header = () => {

    return (
        <header className='shadow-xl'>
            <div className='container mx-auto flex items-center justify-between py-3'>
                <Link to="/" className='left'>
                    <img src={logo} alt='logo' />
                </Link>
                <div className='center'>
                    <input type='search' placeholder='Search' />
                </div>
                <div className='right flex items-center'>
                    <Card />
                    <User  />
                </div>
            </div>

        </header>
    )
}

export default Header