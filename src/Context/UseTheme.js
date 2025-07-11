import { useEffect, useState } from 'react';

export function useThemeToggle(defaultTheme = 'light') {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || defaultTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return { theme, toggleTheme };
}