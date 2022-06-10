import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'

function SvgLinkCopy(props: SVGProps<SVGSVGElement>) {
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
        d="M19.358 4.63a2.152 2.152 0 0 0-3.043 0 1 1 0 0 1-1.414-1.414 4.152 4.152 0 0 1 5.871 5.871l-2.576 2.577a4.153 4.153 0 0 1-5.872 0 1 1 0 1 1 1.414-1.414c.84.84 2.203.84 3.044 0l2.576-2.577c.84-.84.84-2.203 0-3.043Zm-4.115 4.116a2.153 2.153 0 0 0-3.044 0l-2.569 2.57a2.152 2.152 0 0 0 3.042 3.042 1 1 0 0 1 1.414 1.415A4.15 4.15 0 1 1 8.216 9.9l2.569-2.569a4.153 4.153 0 0 1 5.872 0 1 1 0 0 1-1.414 1.414ZM7.854 5.05c.542-.044 1.22-.05 2.146-.05V3c-.92 0-1.68.005-2.309.057-.728.06-1.369.185-1.96.487A5 5 0 0 0 3.544 5.73c-.302.592-.428 1.233-.487 1.961C3 8.4 3 9.273 3 10.357v3.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C8.4 21 9.273 21 10.357 21h3.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C20.994 15.68 21 14.92 21 14h-2c0 .927-.007 1.604-.051 2.146-.05.605-.142.953-.276 1.216a3 3 0 0 1-1.311 1.311c-.263.134-.611.226-1.216.276-.617.05-1.41.051-2.546.051h-3.2c-1.137 0-1.929 0-2.546-.051-.605-.05-.953-.142-1.216-.276a3 3 0 0 1-1.311-1.311c-.134-.263-.226-.611-.276-1.216C5.001 15.529 5 14.736 5 13.6v-3.2c0-1.137 0-1.929.051-2.546.05-.605.142-.953.276-1.216a3 3 0 0 1 1.311-1.311c.263-.134.611-.226 1.216-.276Z"
      />
    </svg>
  )
}

export default createBezierIcon(SvgLinkCopy)
