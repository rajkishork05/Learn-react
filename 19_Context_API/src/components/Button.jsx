import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Button = () => {

    const[theme, setTheme] = useContext(ThemeDataContext)
    
    const changeTheme = ()=>{
        if(theme === "light") {
            setTheme("dark")
        }else{
            setTheme("light");
    }
}
    return (
        <div>
           <button onClick={changeTheme} className='bg-white text-3xl px-6 py-3 m-4 font-bold rounded-2xl cursor-pointer active:scale-95' > Change Theme {theme}</button>
        </div>
    )
}

export default Button
