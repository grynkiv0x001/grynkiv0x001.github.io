import { useEffect, useState } from 'react';

export type Theme = 'auto' | 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme';
const STORED_THEME_VALUES = ['light', 'dark'] as const;

const applyTheme = (themeValue: Theme) => {
  const root = document.documentElement;

  root.classList.remove('dark', 'light');

  if (themeValue === 'auto') {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    if (prefersDark) {
      root.classList.add('dark');
    }
  } else if (themeValue === 'dark') {
    root.classList.add('dark');
  }
};

const initializeTheme = () => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);

  const theme: Theme =
    stored && STORED_THEME_VALUES.includes(stored as 'light' | 'dark')
      ? (stored as 'light' | 'dark')
      : 'auto';

  applyTheme(theme);

  return theme;
};

if (typeof document !== 'undefined') {
  initializeTheme();
}

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return 'auto';
    }

    const stored = localStorage.getItem(THEME_STORAGE_KEY);

    if (stored === 'auto') {
      localStorage.removeItem(THEME_STORAGE_KEY);
      return 'auto';
    }

    if (stored && STORED_THEME_VALUES.includes(stored as 'light' | 'dark')) {
      return stored as 'light' | 'dark';
    }

    return 'auto';
  });

  useEffect(() => {
    applyTheme(theme);

    if (theme === 'light' || theme === 'dark') {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } else {
      localStorage.removeItem(THEME_STORAGE_KEY);
    }

    if (theme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme('auto');

      mediaQuery.addEventListener('change', handleChange);

      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  const cycleTheme = () => {
    setTheme((current) => {
      const next: Theme = current === 'light' ? 'dark' : 'light';

      applyTheme(next);
      localStorage.setItem(THEME_STORAGE_KEY, next);

      return next;
    });
  };

  return { theme, cycleTheme };
};
