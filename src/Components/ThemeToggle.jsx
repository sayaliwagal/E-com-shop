import { useContext } from 'react'
import ThemeContext from '../Utils/Context/ThemeContext'
import { FaSun, FaMoon} from 'react-icons/fa';
const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button 
    onClick={toggleTheme}
    className="p-2 text-xl rounded-md border border-slate-400 dark:border-slate-700 hover:bg-slate-300 dark:hover:bg-slate-800 transition-all"
    aria-label="Toggle theme">
     {theme === "dark" ?(

     <FaSun className="text-yellow-400" />
    ):(
        <FaMoon className ="text-gray-400" />
    )}
    </button>
    
  )
}

export default ThemeToggle
