import { useTheme } from '@/hooks/use-theme';

export const ThemeToggle = () => {
  const { theme, cycleTheme } = useTheme();

  const getRotation = () => {
    if (theme === 'dark') {
      return 180;
    }

    if (theme === 'light') {
      return 0;
    }

    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return prefersDark ? 180 : 0;
    }

    return 0;
  };

  const rotation = getRotation();

  return (
    <button
      className="theme-toggle inline-flex items-center justify-center p-2.5 md:p-2 rounded-md transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 touch-manipulation min-w-[44px] min-h-[44px] md:min-w-0 md:min-h-0 cursor-pointer"
      type="button"
      onClick={cycleTheme}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="theme-toggle__dark-side w-5 h-5 md:w-6 md:h-6 text-slate-900 dark:text-slate-100 transition-all duration-300 ease-in-out"
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 32 32"
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: 'center',
        }}
      >
        <path d="M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z" />
      </svg>
    </button>
  );
};

