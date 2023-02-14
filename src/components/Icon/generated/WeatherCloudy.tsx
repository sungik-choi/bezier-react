import React from 'react'

function SvgWeatherCloudy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 4.953H9v-2.5h2v2.5zm-4.535 1.05L4.708 4.246 3.294 5.66 5.05 7.417l1.414-1.414zM1.5 11.953H4v-2H1.5v2zM16.707 5.66l-1.414-1.414-1.757 1.757 1.414 1.414 1.757-1.757zM8.216 19h8.72A3.067 3.067 0 0020 15.936a3.067 3.067 0 00-3.063-3.064h-1.073l-.29-.495a2.918 2.918 0 00-2.534-1.47c-1.448 0-2.696 1.086-2.904 2.528l-.123.857H8.216A2.218 2.218 0 006 16.508v.276C6 18.006 6.994 19 8.216 19zM10 8.453a2.503 2.503 0 00-2.5 2.5c0 .491.145.962.414 1.37.042-.004.083-.01.123-.015.059-.008.117-.016.179-.016h.144a4.982 4.982 0 013.323-3.18A2.501 2.501 0 0010 8.452zm4.15.584a4.98 4.98 0 012.819 1.835 5.069 5.069 0 015.03 5.064A5.069 5.069 0 0116.938 21H8.216A4.222 4.222 0 014 16.784v-.276a4.21 4.21 0 011.97-3.555 4.486 4.486 0 01-.47-2c0-2.48 2.019-4.5 4.5-4.5 1.47 0 2.85.721 3.693 1.928l.458.656z"
      />
    </svg>
  )
}

export default SvgWeatherCloudy