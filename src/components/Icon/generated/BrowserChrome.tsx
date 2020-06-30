import React from 'react'

function SvgBrowserChrome(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M21.275 8.28A9.921 9.921 0 0122 12c0 5.373-4.263 9.757-9.581 9.978l4.187-7.252c.022-.038.024-.08.04-.12A5.284 5.284 0 0017.353 12a5.324 5.324 0 00-1.518-3.72zm-18.13-.912l4.191 7.259c.02.033.052.054.075.085.933 1.572 2.63 2.641 4.59 2.641.453 0 .887-.075 1.308-.181l-2.723 4.716C5.741 21.197 2 17.033 2 12a9.93 9.93 0 011.145-4.632zM12 8.28A3.724 3.724 0 0115.721 12 3.726 3.726 0 0112 15.721a3.725 3.725 0 01-3.72-3.72A3.723 3.723 0 0112 8.281zM12 2c3.544 0 6.657 1.859 8.433 4.648h-8.376l-.02.004L12 6.648c-2.447 0-4.494 1.66-5.13 3.908L4.145 5.833C5.977 3.503 8.814 2 12 2z"
      />
    </svg>
  )
}

export default SvgBrowserChrome
