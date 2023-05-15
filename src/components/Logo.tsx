import Link from "next/link"
import React, { HTMLAttributes, Ref } from "react"

interface ILogo extends React.ComponentProps<"a"> {
  width: `${string}rem`
}

export const Logo = React.forwardRef<HTMLAttributes<HTMLAnchorElement>, ILogo>(
  ({ width, className, style, ...rest }, ref) => {
    return (
      <Link href="/" ref={ref as any} className="p-5 rounded-2xl w-fit block mx-auto mdx:mx-0" {...rest}>
        <svg
          width={width}
          height="unset"
          viewBox="0 0 768 168"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          <mask
            id="mask0_4_16"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="8"
            y="22"
            width="751"
            height="120"
          >
            <path
              d="M59.072 48.6L67.904 62.552L26.368 86.808L67.904 110.616L58.752 125.016L8.896 94.04V79.704L59.072 48.6ZM146.318 38.296L151.31 127H133.006L131.918 89.048C131.833 85.5067 131.79 82.3493 131.79 79.576C131.833 76.8027 131.897 74.2 131.982 71.768C132.067 69.2933 132.195 66.8187 132.366 64.344C132.579 61.8267 132.793 59.096 133.006 56.152L123.022 111.896H107.15L96.398 56.152C96.654 58.968 96.8673 61.6347 97.038 64.152C97.2513 66.6267 97.4007 69.1227 97.486 71.64C97.5713 74.1573 97.6353 76.8667 97.678 79.768C97.7207 82.6267 97.6993 85.8267 97.614 89.368L96.974 127H78.99L83.982 38.296H105.55L115.406 95.64L124.75 38.296H146.318ZM219.676 107.416C219.676 109.976 220.017 111.832 220.7 112.984C221.425 114.136 222.577 115.011 224.156 115.608L219.996 128.92C215.985 128.536 212.593 127.661 209.82 126.296C207.089 124.888 204.935 122.776 203.356 119.96C200.753 123.075 197.425 125.4 193.372 126.936C189.319 128.429 185.18 129.176 180.956 129.176C173.959 129.176 168.369 127.192 164.188 123.224C160.049 119.213 157.98 114.072 157.98 107.8C157.98 100.419 160.86 94.7227 166.62 90.712C172.423 86.7013 180.572 84.696 191.068 84.696H200.22V82.136C200.22 78.5947 199.068 75.9707 196.764 74.264C194.503 72.5573 191.175 71.704 186.78 71.704C184.604 71.704 181.809 72.024 178.396 72.664C174.983 73.2613 171.569 74.136 168.156 75.288L163.484 61.848C167.879 60.184 172.444 58.9253 177.18 58.072C181.959 57.2187 186.225 56.792 189.98 56.792C200.092 56.792 207.559 58.8613 212.38 63C217.244 67.096 219.676 73.0267 219.676 80.792V107.416ZM187.932 114.712C190.108 114.712 192.391 114.072 194.78 112.792C197.169 111.469 198.983 109.613 200.22 107.224V96.216H195.228C189.596 96.216 185.457 97.0907 182.812 98.84C180.167 100.547 178.844 103.064 178.844 106.392C178.844 108.995 179.633 111.043 181.212 112.536C182.833 113.987 185.073 114.712 187.932 114.712ZM239.85 127V113.432H248.81V72.472H239.85V59.032H264.234L267.946 74.328C270.378 68.4827 273.471 64.1307 277.226 61.272C281.023 58.4133 285.653 56.984 291.114 56.984C293.418 56.984 295.466 57.176 297.258 57.56C299.05 57.9013 300.735 58.392 302.314 59.032L296.17 75.736C294.933 75.3947 293.695 75.1387 292.458 74.968C291.221 74.7973 289.855 74.712 288.362 74.712C283.925 74.712 280.021 76.5253 276.65 80.152C273.322 83.7787 270.783 88.3867 269.034 93.976V113.432H282.474V127H239.85ZM285.866 87.448V67.608L288.874 59.032H302.314L298.538 87.448H285.866ZM380.472 59.032L358.136 89.112L382.328 127H359.288L336.952 89.752L359.288 59.032H380.472ZM336.184 29.912V127H315.96V32.024L336.184 29.912ZM434.246 59.032V113.176H451.526V127H394.758V113.176H414.022V72.856H395.398V59.032H434.246ZM422.022 23.448C425.521 23.448 428.379 24.536 430.598 26.712C432.817 28.888 433.926 31.5973 433.926 34.84C433.926 38.0827 432.817 40.8133 430.598 43.032C428.379 45.208 425.521 46.296 422.022 46.296C418.481 46.296 415.579 45.208 413.318 43.032C411.099 40.8133 409.99 38.0827 409.99 34.84C409.99 31.5973 411.099 28.888 413.318 26.712C415.579 24.536 418.481 23.448 422.022 23.448ZM496.724 114.712C500.095 114.712 502.804 114.179 504.852 113.112C506.943 112.045 507.988 110.445 507.988 108.312C507.988 106.861 507.583 105.645 506.772 104.664C505.961 103.683 504.404 102.744 502.1 101.848C499.796 100.952 496.383 99.8853 491.86 98.648C487.721 97.5387 484.052 96.1307 480.852 94.424C477.695 92.7173 475.22 90.52 473.428 87.832C471.679 85.144 470.804 81.7947 470.804 77.784C470.804 73.7307 471.935 70.1253 474.196 66.968C476.457 63.8107 479.785 61.336 484.18 59.544C488.575 57.7093 493.951 56.792 500.308 56.792C506.367 56.792 511.636 57.5813 516.116 59.16C520.639 60.696 524.543 62.6587 527.828 65.048L519.764 76.952C516.948 75.2027 513.919 73.816 510.676 72.792C507.433 71.7253 504.169 71.192 500.884 71.192C497.599 71.192 495.145 71.64 493.524 72.536C491.945 73.3893 491.156 74.6907 491.156 76.44C491.156 77.592 491.561 78.5947 492.372 79.448C493.225 80.2587 494.804 81.112 497.108 82.008C499.412 82.8613 502.783 83.928 507.22 85.208C511.615 86.4453 515.433 87.8747 518.676 89.496C521.961 91.1173 524.5 93.2933 526.292 96.024C528.084 98.712 528.98 102.275 528.98 106.712C528.98 111.661 527.508 115.821 524.564 119.192C521.62 122.52 517.716 125.016 512.852 126.68C507.988 128.344 502.655 129.176 496.852 129.176C490.281 129.176 484.479 128.237 479.444 126.36C474.409 124.483 470.121 122.008 466.58 118.936L476.756 107.544C479.401 109.592 482.388 111.299 485.716 112.664C489.087 114.029 492.756 114.712 496.724 114.712ZM689.534 36.824L758.654 79.576V94.04L708.798 125.016L699.646 111.256L741.246 86.808L680.574 51.352L689.534 36.824ZM646.206 141.336L630.398 134.104L684.222 22.424L699.902 29.656L646.206 141.336Z"
              fill="black"
            />
          </mask>
          <g mask="url(#mask0_4_16)">
            <rect width="768" height="174" fill="#FC0A8E" />
            <g filter="url(#filter0_f_4_16)">
              <rect x="-72.5404" y="-116" width="285.698" height="256" rx="128" fill="#D10C17" />
            </g>
            <g filter="url(#filter1_f_4_16)">
              <rect x="433.254" width="351.116" height="315" rx="157.5" fill="#FF502D" />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_4_16"
              x="-192.54"
              y="-236"
              width="525.698"
              height="496"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_4_16" />
            </filter>
            <filter
              id="filter1_f_4_16"
              x="313.254"
              y="-120"
              width="591.116"
              height="555"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur_4_16" />
            </filter>
          </defs>
        </svg>
      </Link>
    )
  }
)
