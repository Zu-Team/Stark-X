'use client';

export type Theme = 'dark' | 'light';

export const getTheme = (): Theme => {
  if (typeof window === 'undefined') return 'dark';
  
  const savedTheme = localStorage.getItem('theme') as Theme;
  return savedTheme || 'dark';
};

export const setTheme = (theme: Theme): void => {
  localStorage.setItem('theme', theme);
  document.documentElement.classList.toggle('dark', theme === 'dark');
};

export const toggleTheme = (): Theme => {
  const currentTheme = getTheme();
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  setTheme(newTheme);
  return newTheme;
};

export const initializeTheme = (): void => {
  const theme = getTheme();
  setTheme(theme);
};
