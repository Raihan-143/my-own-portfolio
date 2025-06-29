import React from 'react';

import { Moon, Sun } from 'lucide-react';
import { useThemeToggle } from '../Context/UseTheme';


function ThemeToggleButton() {
  const { theme, toggleTheme } = useThemeToggle();

  return (
     <button
      onClick={toggleTheme}
      className="text-gray-800 dark:text-yellow-300 transition duration-300"
      title="Toggle Theme"
    >
      {theme === 'dark' ? <Sun size={20} className='text-yellow-300'/> : <Moon size={20} />}
    </button>
  );
}

export default ThemeToggleButton;