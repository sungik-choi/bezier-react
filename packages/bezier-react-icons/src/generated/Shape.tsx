import * as React from 'react'
import { SVGProps } from 'react'

function SvgShape(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="m19.406 17.052-.641-1.924c-.06-.205-.034-.256.307-.948l.053-.109c.29-.635.506-1.305.654-1.988.299-1.37.287-2.798.01-4.157-.56-2.763-2.358-5.2-4.778-6.599-1.206-.7-2.575-1.159-3.965-1.27C9.666-.086 8.24.032 6.91.473A10.132 10.132 0 0 0 .859 5.923 9.626 9.626 0 0 0 0 9.994c.011 1.383.258 2.798.848 4.074 1.139 2.565 3.39 4.577 6.056 5.446 1.337.429 2.749.579 4.14.43a9.906 9.906 0 0 0 3.026-.818c.155-.066.335-.157.48-.231.138-.071.244-.125.265-.124a.509.509 0 0 1 .313-.007l.894.298 1.027.342c.103.033.208.069.313.105.194.067.389.134.577.177.291.05.513.014.712-.042.432-.111.88-.557.992-.99.057-.2.094-.42.044-.71-.041-.186-.107-.378-.174-.57-.037-.107-.074-.215-.107-.322Zm-2.546-2.834a2.51 2.51 0 0 0 .006 1.544l.553 1.656-.764-.254-.896-.3a2.51 2.51 0 0 0-1.544-.003 4.38 4.38 0 0 0-.67.299c-.099.052-.185.098-.294.14a7.805 7.805 0 0 1-.783.303c-.53.177-1.079.29-1.633.351a8.065 8.065 0 0 1-3.313-.344c-2.121-.69-3.944-2.315-4.848-4.36-.47-1.013-.66-2.132-.672-3.256a7.627 7.627 0 0 1 .684-3.255 8.128 8.128 0 0 1 4.841-4.36c1.062-.354 2.2-.445 3.316-.331 1.122.086 2.194.45 3.163 1.01 1.938 1.12 3.382 3.083 3.822 5.268a8.111 8.111 0 0 1-.007 3.336 7.815 7.815 0 0 1-.521 1.59c-.042.11-.089.199-.143.3-.081.15-.178.332-.297.666ZM4.206 9.993c0 .744.609 1.353 1.353 1.353.745 0 1.353-.609 1.353-1.353S6.304 8.64 5.56 8.64c-.744 0-1.353.608-1.353 1.352Zm4.48 0c0 .744.61 1.353 1.354 1.353.745 0 1.353-.609 1.353-1.353S10.784 8.64 10.04 8.64s-1.353.608-1.353 1.352Zm5.835 1.353a1.356 1.356 0 0 1-1.353-1.353c0-.744.608-1.352 1.353-1.352.743 0 1.353.608 1.353 1.352 0 .744-.61 1.353-1.353 1.353Z"
      />
    </svg>
  )
}

export default SvgShape
