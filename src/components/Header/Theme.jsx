import React, { useEffect } from 'react'
import { BsMoon, BsFillSunFill } from "react-icons/bs";
import UnopDropdown from "unop-react-dropdown";

const Theme = ({dark,setDark}) => {
    
    const handleClick = () => {
        setDark(!dark);
    }
    useEffect(() => {
        if (dark) {
            document.body.classList.add("dark")
        } else {
            document.body.classList.remove("dark")
        }
    }, [dark])
  return (
      <div className='flex'>
          <UnopDropdown trigger={
              <div className='theme'>
                  {dark ? <BsFillSunFill /> : <BsMoon  />}

              </div>}
          >
              <div className={`theme-content shadow-xl py-1  ${dark?"dark-theme":"light-theme"}`}>
                  <ul className='theme-list '>
                      <li className='hover:bg-slate-600	 transition duration-300' onClick={handleClick}>
                          <BsMoon />
                          <span>Light</span>
                      </li>
                      <li className='hover:bg-slate-600	 transition duration-300' onClick={handleClick}>
                          <BsFillSunFill />
                          <span>Dark</span>
                      </li>
                  </ul>
              </div>
          </UnopDropdown>
      </div>
  )
}

export default Theme