import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = 'w-6 h-6' }) => {
  const normalized = name.toLowerCase();

  if (normalized.includes('react')) {
    return (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className={className}>
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  if (normalized.includes('javascript') || normalized === 'js') {
    return (
      <svg viewBox="0 0 105 105" className={className}>
        <rect width="105" height="105" fill="#F7DF1E" rx="8" />
        <path
          d="M29.8 82.5c4.7 2.8 9.9 4.4 15.2 4.4 7.6 0 11.4-3.6 11.4-9.3 0-6.1-4.3-8.8-12.7-12.4-12.5-5.3-17.6-11.4-17.6-21.6 0-12.4 9.6-20.9 24.8-20.9 6.8 0 12.3 1.6 16.5 3.8l-4.5 11.5c-3.7-1.9-8-3-12.4-3-6.6 0-9.8 3.1-9.8 7.3 0 5.4 3.7 7.7 12 11.4 13.8 6 18.4 12.2 18.4 22.8 0 13.7-10.4 22.2-26.8 22.2-8.3 0-15.6-2.2-20-4.9l5.5-11.3zM85.7 23.5v44.6c0 8.3-4.3 12.2-12.4 12.2-4.1 0-8-.9-10.9-2.3l2.8-11.2c2.1 1 4.5 1.6 6.8 1.6 3 0 4.4-1.4 4.4-4.8V23.5h9.3z"
          fill="#000"
        />
      </svg>
    );
  }

  if (normalized.includes('html')) {
    return (
      <svg viewBox="0 0 512 512" className={className}>
        <path fill="#E34F26" d="M71 460L30 0h452l-41 460-185 52z" />
        <path fill="#EF652A" d="M256 472l149-41 35-391H256v432z" />
        <path fill="#EBEBEB" d="M256 176h-84l-6-67h90V47H106l17 197h133v-68zm0 150h-78l-5-57h-62l10 117 135 38v-68z" />
        <path fill="#FFF" d="M256 176v68h82l-8 88-74 20v68l133-37 18-207H256zm0-129v62h150l6-62H256z" />
      </svg>
    );
  }

  if (normalized.includes('css')) {
    return (
      <svg viewBox="0 0 512 512" className={className}>
        <path fill="#1572B6" d="M71 460L30 0h452l-41 460-185 52z" />
        <path fill="#33A9DC" d="M256 472l149-41 35-391H256v432z" />
        <path fill="#EBEBEB" d="M256 176h-84l-6-67h90V47H106l17 197h133v-68zm0 150h-78l-5-57h-62l10 117 135 38v-68z" />
        <path fill="#FFF" d="M256 176v68h82l-8 88-74 20v68l133-37 18-207H256zm0-129v62h150l6-62H256z" />
      </svg>
    );
  }

  if (normalized.includes('php')) {
    return (
      <svg viewBox="0 0 256 256" className={className}>
        <path
          d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0z"
          fill="#777BB4"
        />
        <text
          x="50%"
          y="56%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#FFF"
          fontSize="84"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
        >
          php
        </text>
      </svg>
    );
  }

  if (normalized.includes('laravel')) {
    return (
      <svg viewBox="0 0 512 512" className={className}>
        <path
          fill="#FF2D20"
          d="M485.4 122.9L326.5 30.6c-10.4-6-23.2-6-33.6 0L134 122.9c-10.4 6-16.8 17.1-16.8 29.1v184.6c0 12 6.4 23.1 16.8 29.1l158.9 92.3c10.4 6 23.2 6 33.6 0l158.9-92.3c10.4-6 16.8-17.1 16.8-29.1V152c0-12-6.4-23.1-16.8-29.1z"
        />
        <path
          fill="#FFF"
          d="M309.7 184.2l-98.3 56.7v113.5l98.3-56.7V184.2zm-12.7-22l-85.6-49.4-85.6 49.4 85.6 49.4 85.6-49.4zm111 64.2l-85.6-49.4v98.8l85.6 49.4v-98.8z"
        />
      </svg>
    );
  }

  if (normalized.includes('node')) {
    return (
      <svg viewBox="0 0 256 256" className={className}>
        <path
          d="M128 25l100 58v114l-100 58-100-58V83l100-58z"
          fill="#339933"
        />
        <path
          d="M128 175c-26 0-47-21-47-47s21-47 47-47 47 21 47 47-21 47-47 47zm0-20c15 0 27-12 27-27s-12-27-27-27-27 12-27 27 12 27 27 27z"
          fill="#FFF"
        />
      </svg>
    );
  }

  if (normalized.includes('express')) {
    return (
      <svg viewBox="0 0 256 256" className={className}>
        <rect width="256" height="256" rx="40" fill="#222" />
        <text
          x="50%"
          y="56%"
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#FFF"
          fontSize="48"
          fontWeight="bold"
          fontFamily="system-ui, sans-serif"
        >
          ex
        </text>
      </svg>
    );
  }

  if (normalized.includes('mysql')) {
    return (
      <svg viewBox="0 0 256 256" className={className}>
        <rect width="256" height="256" rx="36" fill="#00758F" />
        <path
          d="M185 142c-8-12-23-18-42-18-20 0-35 8-43 20l-12-8c11-17 31-27 55-27s45 9 55 25l-13 8z"
          fill="#F29111"
        />
        <text
          x="50%"
          y="72%"
          textAnchor="middle"
          fill="#FFF"
          fontSize="44"
          fontWeight="900"
          fontFamily="system-ui, sans-serif"
        >
          MySQL
        </text>
      </svg>
    );
  }

  if (normalized.includes('sql')) {
    return (
      <svg viewBox="0 0 256 256" className={className}>
        <rect width="256" height="256" rx="36" fill="#005B96" />
        <ellipse cx="128" cy="70" rx="72" ry="24" fill="#FFF" />
        <path
          d="M56 70v116c0 13 32 24 72 24s72-11 72-24V70"
          fill="none"
          stroke="#FFF"
          strokeWidth="16"
        />
        <path
          d="M56 128c0 13 32 24 72 24s72-11 72-24"
          fill="none"
          stroke="#FFF"
          strokeWidth="16"
        />
      </svg>
    );
  }

  if (normalized.includes('python')) {
    return (
      <svg viewBox="0 0 110 110" className={className}>
        <path
          fill="#3776AB"
          d="M54.5 5.5c-24.6 0-23.1 10.7-23.1 10.7l.03 11.1h23.5v3.3H21.7s-15.7 1.8-15.7 23c0 21.3 13.7 22.3 13.7 22.3h8.2v-11.5s-.4-13.7 13.5-13.7h23.3s13.1.2 13.1-12.8V18.7s1.8-13.2-23.3-13.2zm-12.9 7.2a3.8 3.8 0 1 1 0 7.6 3.8 3.8 0 0 1 0-7.6z"
        />
        <path
          fill="#FFD43B"
          d="M55.5 104.5c24.6 0 23.1-10.7 23.1-10.7l-.03-11.1H55.1v-3.3h33.2s15.7-1.8 15.7-23c0-21.3-13.7-22.3-13.7-22.3h-8.2v11.5s.4 13.7-13.5 13.7H45.3s-13.1-.2-13.1 12.8v19.2s-1.8 13.2 23.3 13.2zm12.9-7.2a3.8 3.8 0 1 1 0-7.6 3.8 3.8 0 0 1 0 7.6z"
        />
      </svg>
    );
  }

  if (normalized.includes('git') && !normalized.includes('hub')) {
    return (
      <svg viewBox="0 0 256 256" className={className}>
        <path
          d="M250.6 117.8L138.2 5.4c-7.2-7.2-18.9-7.2-26.1 0L92.7 24.8l32.9 32.9c7.7-2.6 16.7-.8 22.7 5.2 6.1 6.1 7.8 15.2 5.1 22.9l31.7 31.7c7.7-2.7 16.8-.9 22.9 5.2 8.7 8.7 8.7 22.8 0 31.5-8.7 8.7-22.8 8.7-31.5 0-6.4-6.4-8-15.8-5-23.7l-29.5-29.5v58.2c2.4 1.2 4.6 2.9 6.4 4.8 8.7 8.7 8.7 22.8 0 31.5-8.7 8.7-22.8 8.7-31.5 0-8.7-8.7-8.7-22.8 0-31.5 2.2-2.2 4.8-3.9 7.6-5.1V97.3c-2.8-1.2-5.4-2.9-7.6-5.1-6.4-6.4-8-15.9-5-23.8L76.5 35.8 5.4 106.9c-7.2 7.2-7.2 18.9 0 26.1l112.4 112.4c7.2 7.2 18.9 7.2 26.1 0l106.7-106.7c7.2-7.2 7.2-18.9 0-20.9z"
          fill="#F05032"
        />
      </svg>
    );
  }

  if (normalized.includes('github')) {
    return (
      <svg viewBox="0 0 256 256" className={className}>
        <path
          fill="#FFF"
          d="M128 0C57.3 0 0 57.3 0 128c0 56.6 36.7 104.5 87.6 121.5 6.4 1.2 8.8-2.8 8.8-6.2 0-3.1-.1-11.2-.2-22-35.6 7.7-43.1-17.2-43.1-17.2-5.8-14.8-14.2-18.7-14.2-18.7-11.6-7.9.9-7.8.9-7.8 12.8.9 19.6 13.2 19.6 13.2 11.4 19.6 30 13.9 37.3 10.7 1.2-8.3 4.5-13.9 8.1-17.1-28.4-3.2-58.3-14.2-58.3-63.3 0-14 5-25.4 13.2-34.4-1.3-3.2-5.7-16.3 1.3-34 0 0 10.8-3.4 35.3 13.2 10.2-2.8 21.2-4.3 32.2-4.3 11 0 22 1.4 32.2 4.3 24.5-16.6 35.2-13.2 35.2-13.2 7.1 17.6 2.6 30.7 1.3 34 8.2 8.9 13.2 20.4 13.2 34.4 0 49.2-29.9 60-58.5 63.2 4.6 4 8.7 11.8 8.7 23.8 0 17.2-.2 31.1-.2 35.3 0 3.4 2.3 7.4 8.8 6.2 50.8-17 87.5-64.9 87.5-121.5C256 57.3 198.7 0 128 0z"
        />
      </svg>
    );
  }

  if (normalized.includes('vscode')) {
    return (
      <svg viewBox="0 0 256 256" className={className}>
        <path
          fill="#007ACC"
          d="M179.9 253.9c5.1 2.5 11.2 1.8 15.6-1.8l54.4-45.7c4.6-3.8 7.3-9.5 7.3-15.5V65.1c0-6-2.7-11.7-7.3-15.5l-54.4-45.7c-4.4-3.7-10.5-4.3-15.6-1.8-5.1 2.5-8.3 7.7-8.3 13.4v40.3L97.5 4.8c-3.9-3.4-9.3-4.3-14.2-2.5-4.8 1.9-8.1 6.4-8.5 11.6l-5.6 77.2L12.5 70.3C7.6 67.2 1.4 68.7-.9 73.7c-2.3 5-1.1 10.9 2.9 14.6l54.2 40.2-54.2 40.2c-4 3.7-5.2 9.6-2.9 14.6 2.3 5 8.5 6.5 13.4 3.4l56.7-20.8 5.6 77.2c.4 5.2 3.7 9.7 8.5 11.6 4.9 1.8 10.3.9 14.2-2.5l74.1-51.1v40.3c0 5.7 3.2 10.9 8.3 13.4z"
        />
      </svg>
    );
  }

  // npm
  return (
    <svg viewBox="0 0 256 256" className={className}>
      <rect width="256" height="256" rx="40" fill="#CB3837" />
      <path
        d="M48 48h160v160H48V48zm32 32v96h32V112h32v64h32V80H80z"
        fill="#FFF"
      />
    </svg>
  );
};
