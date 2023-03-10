import * as React from 'react'
import { SVGProps } from 'react'
import { createBezierIcon } from '../utils'
function SvgChatQuestion(props: SVGProps<SVGSVGElement>) {
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
        d="m20.767 17.13.825 2.475c.237.738.106 1.141-.282 1.624-.198.216-.47.367-.705.428a1.53 1.53 0 0 1-.868-.024l-2.135-.712-.415-.138c-.094-.031-.104-.032-.136-.036a.632.632 0 0 0-.354.074 9.982 9.982 0 0 1-3.689 1.128c-2.577.273-5.26-.52-7.269-2.156-2.018-1.611-3.414-4.043-3.662-6.636-.335-2.565.445-5.255 2.028-7.3 1.603-2.025 3.991-3.469 6.581-3.764 2.557-.357 5.274.322 7.334 1.909a9.953 9.953 0 0 1 3.873 6.52 10.088 10.088 0 0 1-.18 3.857 10.122 10.122 0 0 1-.786 2.112c-.026.052-.053.103-.078.155-.053.1-.061.126-.079.182l-.004.014a.497.497 0 0 0 0 .288Zm-1.898.632a2.494 2.494 0 0 1-.036-1.438c.055-.215.164-.462.246-.612.02-.042.042-.083.063-.125a8.023 8.023 0 0 0 .628-1.687 8.075 8.075 0 0 0 .143-3.091 7.948 7.948 0 0 0-3.099-5.21c-1.648-1.27-3.804-1.807-5.867-1.522-2.07.229-3.974 1.392-5.263 3.01-1.261 1.643-1.892 3.77-1.62 5.846.194 2.066 1.306 4 2.928 5.3a7.985 7.985 0 0 0 5.813 1.726 7.998 7.998 0 0 0 2.965-.91c.4-.21.871-.33 1.364-.303.227.007.53.081.686.138l.415.14 1.185.395-.551-1.657Zm-5.684-.833a1.243 1.243 0 1 1-2.486.001 1.243 1.243 0 0 1 2.486-.001ZM10.93 14.54h1.9v-.708c0-.719.549-1.143.785-1.292.832-.523 2.225-1.402 2.225-3.055 0-1.941-1.688-3.462-3.842-3.462-2.083 0-3.841 1.586-3.841 3.462h1.9c0-.832.907-1.561 1.941-1.561.94 0 1.941.547 1.941 1.56 0 .509-.47.902-1.337 1.448-1.047.66-1.672 1.744-1.672 2.9v.708Z"
      />
    </svg>
  )
}
export default createBezierIcon(SvgChatQuestion)