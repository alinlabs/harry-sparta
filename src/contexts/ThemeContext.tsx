import React, { createContext, useContext, useState, useEffect, useLayoutEffect, useRef, ReactNode } from 'react';

import { Theme, getCachedTheme, setCachedTheme, DEFAULT_THEME } from '../utils/urlManager';

export type { Theme };

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode; initialTheme?: Theme }> = ({ 
  children,
  initialTheme
}) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    return initialTheme || getCachedTheme() || DEFAULT_THEME;
  });

  const isFirstMountRef = useRef(true);

  useEffect(() => {
    if (initialTheme && initialTheme !== theme) {
      setThemeState(initialTheme);
    }
  }, [initialTheme]);

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    let transitionTimer: number | undefined;

    if (!isFirstMountRef.current) {
      root.classList.add('theme-transitioning');
      transitionTimer = window.setTimeout(() => {
        root.classList.remove('theme-transitioning');
      }, 260);
    }
    isFirstMountRef.current = false;

    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
      root.style.backgroundColor = '#09090b';
      document.body.style.backgroundColor = '#09090b';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
      root.style.backgroundColor = '#ffffff';
      document.body.style.backgroundColor = '#ffffff';
    }
    setCachedTheme(theme);

    return () => {
      if (transitionTimer !== undefined) {
        window.clearTimeout(transitionTimer);
      }
    };
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};