export function AccountCircle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        fill="#5F6368"
        d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15S8.1 27.5 15 27.5 27.5 21.9 27.5 15 21.9 2.5 15 2.5zM8.838 22.85c.537-1.125 3.812-2.225 6.162-2.225s5.637 1.1 6.163 2.225A9.866 9.866 0 0115 25c-2.325 0-4.463-.8-6.162-2.15zm14.112-1.813c-1.787-2.174-6.125-2.912-7.95-2.912-1.825 0-6.162.738-7.95 2.913A9.937 9.937 0 015 15C5 9.488 9.488 5 15 5s10 4.488 10 10a9.937 9.937 0 01-2.05 6.038zM15 7.5a4.364 4.364 0 00-4.375 4.375A4.364 4.364 0 0015 16.25a4.364 4.364 0 004.375-4.375A4.364 4.364 0 0015 7.5zm0 6.25a1.872 1.872 0 01-1.875-1.875c0-1.037.838-1.875 1.875-1.875 1.038 0 1.875.838 1.875 1.875A1.872 1.872 0 0115 13.75z"
      ></path>
    </svg>
  );
}

export function HelpOutline() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#585858"
        fillRule="evenodd"
        d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm11 4v2h-2v-2h2zm-1 4c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM8 10c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.283-.79 1.973-1.56 2.646C13.712 13.283 13 13.905 13 15h-2c0-1.821.942-2.543 1.77-3.178.65-.498 1.23-.943 1.23-1.822 0-1.1-.9-2-2-2s-2 .9-2 2H8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function NotificationImportant() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 30 30"
    >
      <path
        fill="#5F6368"
        d="M12.512 26.887A2.486 2.486 0 0015 29.375a2.486 2.486 0 002.488-2.488h-4.976zM15 8.125c3.45 0 6.25 2.8 6.25 6.25v8.75H8.75v-8.75c0-3.45 2.8-6.25 6.25-6.25zM15 2.5a1.872 1.872 0 00-1.875 1.875v1.463c-3.925.85-6.875 4.35-6.875 8.537v7.5l-2.5 2.5v1.25h22.5v-1.25l-2.5-2.5v-7.5c0-4.188-2.95-7.688-6.875-8.537V4.375A1.872 1.872 0 0015 2.5z"
      ></path>
    </svg>
  );
}

export function Search() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="#404041"
        fillRule="evenodd"
        d="M9.977 9.503h.526l3.327 3.334-.993.993-3.334-3.327v-.526l-.18-.187a4.314 4.314 0 01-2.82 1.047 4.333 4.333 0 114.334-4.334c0 1.074-.394 2.06-1.047 2.82l.187.18zm-6.474-3c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

interface SpinnerProps {
  color: string;
  size: number;
}

export function Spinner({ color, size }: SpinnerProps) {
  return (
    <svg
      className="spin-animation"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={color}
        fillOpacity="0.25"
        fillRule="evenodd"
        d="M8 14A6 6 0 108 2a6 6 0 000 12zm0 2A8 8 0 108 0a8 8 0 000 16z"
        clipRule="evenodd"
      ></path>
      <path
        fill={color}
        fillRule="evenodd"
        d="M8 1c0 .552-.45.992-.995 1.083a6 6 0 106.912 6.912C14.008 8.451 14.447 8 15 8c.552 0 1.006.45.938.997A8 8 0 117.003.062C7.55-.006 8 .448 8 1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
