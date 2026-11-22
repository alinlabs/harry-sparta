import React from 'react';

interface DmsLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showBadge?: boolean;
  subtitle?: string;
  forceTheme?: 'light' | 'dark';
}

export const DmsLogo: React.FC<DmsLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  subtitle,
  forceTheme,
}) => {
  const markSizes = {
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-20 h-20 sm:w-24 sm:h-24',
    xl: 'w-28 h-28 sm:w-32 sm:h-32',
  };

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-xl',
    xl: 'text-2xl',
  };

  const subTextSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
    xl: 'text-sm',
  };

  const isLightForced = forceTheme === 'light';
  const isDarkForced = forceTheme === 'dark';

  const titleClass = isLightForced
    ? 'text-slate-900'
    : isDarkForced
      ? 'text-white'
      : 'text-slate-900 dark:text-white';

  const subClass = isLightForced
    ? 'text-slate-500'
    : isDarkForced
      ? 'text-slate-400'
      : 'text-slate-500 dark:text-slate-400';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      <img
        src="/logo.webp"
        alt="PT Sparta Computindo Teknologi"
        className={`${markSizes[size]} shrink-0 object-contain`}
        draggable={false}
      />

      {showText && (
        <div className="flex flex-col min-w-0">
          <span className={`font-black tracking-tight leading-tight whitespace-nowrap ${titleClass} ${textSizes[size]}`}>
            SPARTA
          </span>
          <span className={`font-semibold tracking-wider uppercase truncate ${subClass} ${subTextSizes[size]}`}>
            {subtitle ?? 'PT Sparta Computindo Teknologi'}
          </span>
        </div>
      )}
    </div>
  );
};

export default DmsLogo;
