// import { use, useContext } from 'react'
// import ThemeContext from '../Utils/Context/ThemeContext'
import { useSelector, useDispatch  } from 'react-redux';
import { toggleTheme } from '../Features/theme/themeSlice';
import { FaSun, FaMoon} from 'react-icons/fa';
const ThemeToggle = () => {
  const themeItems = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleTheme());
  };


  return (
    <button 
    onClick={handleToggle}
    className="p-2 text-xl rounded-md border border-slate-400 dark:border-slate-700 hover:bg-slate-300 dark:hover:bg-slate-800 transition-all"
    aria-label="Toggle theme">
     {themeItems.mode === "dark" ?(

     <FaSun className="text-yellow-400" />
    ):(
        <FaMoon className ="text-gray-400" />
    )}
    </button>
    
  )
}

export default ThemeToggle
