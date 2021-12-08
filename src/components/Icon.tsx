import React, { forwardRef, HTMLAttributes, memo } from "react";

export const icons = {
  "add-circle-filled":
    "M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,6 L11.8833789,6.00672773 C11.3860402,6.06449284 11,6.48716416 11,7 L11,11 L7,11 C6.44771525,11 6,11.4477153 6,12 L6.00672773,12.1166211 C6.06449284,12.6139598 6.48716416,13 7,13 L11,13 L11,17 C11,17.5522847 11.4477153,18 12,18 L12.1166211,17.9932723 C12.6139598,17.9355072 13,17.5128358 13,17 L13,13 L17,13 C17.5522847,13 18,12.5522847 18,12 L17.9932723,11.8833789 C17.9355072,11.3860402 17.5128358,11 17,11 L13,11 L13,7 C13,6.44771525 12.5522847,6 12,6 Z",
  alert:
    "M12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12.0025235,14.8184342 C10.9525518,14.8184342 10.1013816,15.6696044 10.1013816,16.7195761 C10.1013816,17.7695477 10.9525518,18.6207179 12.0025235,18.6207179 C13.0524952,18.6207179 13.9036654,17.7695477 13.9036654,16.7195761 C13.9036654,15.6696044 13.0524952,14.8184342 12.0025235,14.8184342 Z M13.0541922,4.76638674 L10.9511703,4.76638674 C10.8382593,4.76630328 10.7299443,4.81109832 10.6500746,4.89090885 C10.5901723,4.95076674 10.5499544,5.02663975 10.5335894,5.10846945 L10.5253296,5.19191218 L10.7265788,12.6785061 C10.714,12.86597 10.832663,13.0322196 11.0044311,13.0867881 L11.0943789,13.1043467 L12.9109835,13.1043467 C13.098283,13.0895183 13.2455,12.9479309 13.274498,12.7700514 L13.2787837,12.6785061 L13.4800328,5.19191218 C13.4800328,5.07900121 13.4351575,4.97071938 13.3552879,4.89090885 C13.2754182,4.81109832 13.1671031,4.76630328 13.0541922,4.76638674 Z",
  "align-top-horizontal":
    "M22.1429745,2.89707437 C22.1429745,3.40991021 21.7569343,3.83258153 21.2595956,3.89034664 L21.1429745,3.89707437 L18.3979745,3.89707437 L18.3970744,13.1156237 C18.3970744,13.6679085 17.9493591,14.1156237 17.3970744,14.1156237 L14.3970744,14.1156237 C13.8447896,14.1156237 13.3970744,13.6679085 13.3970744,13.1156237 L13.3979745,3.89707437 L10.3979745,3.89707437 L10.3970744,21.1156237 C10.3970744,21.6679085 9.94935912,22.1156237 9.39707437,22.1156237 L6.39707437,22.1156237 C5.84478962,22.1156237 5.39707437,21.6679085 5.39707437,21.1156237 L5.3979745,3.89707437 L2.63847614,3.89707437 C2.12564031,3.89707437 1.70296898,3.51103418 1.64520388,3.01369549 L1.63847614,2.89707437 C1.63847614,2.38423853 2.02451633,1.96156721 2.52185502,1.9038021 L2.63847614,1.89707437 L21.1429745,1.89707437 C21.6952593,1.89707437 22.1429745,2.34478962 22.1429745,2.89707437 Z M8.39707437,20.1156237 L8.39707437,4.11562372 L7.39707437,4.11562372 L7.39707437,20.1156237 L8.39707437,20.1156237 Z M16.3970744,12.1156237 L16.3970744,4.11562372 L15.3970744,4.11562372 L15.3970744,12.1156237 L16.3970744,12.1156237 Z",
  "default-face":
    "M61.91,20.79c-6.28-3.48-14.4-3.51-24.22-.39C15,27.63,20,69.16,38,78.88,72.5,97.41,88.26,35.4,61.91,20.79Z",
  "narrow-face":
    "M63.22,13.5c-7.73-5.37-19.67-4.81-27.15.37-8.61,6-7.92,16.78-7.87,26.15.07,14.63.24,37.28,14.83,45.72,5.9,3.41,12.12,3.19,16.84-2,8.86-9.67,10.32-26.49,11.29-38.9.69-8.69,1.67-19.59-3.74-27.24A16.85,16.85,0,0,0,63.22,13.5Z",
  "rounder-face":
    "M63.15,21.38A36.93,36.93,0,0,0,50,18.66c-20.16-.24-36.13,21.93-30.94,41.09,7.13,26.25,59,24,66.55-.78C90.62,42.59,78.22,27.4,63.15,21.38Z",
};

export type IconName = keyof typeof icons;

export type IconProperties = {
  name: IconName;
  color?: string;
  height?: string;
  width?: string;
  fill?: string;
  stroke?: string;
} & HTMLAttributes<SVGSVGElement>;

const Icon = memo(
  forwardRef<SVGSVGElement, IconProperties>(
    (
      { name, color, height = "100", width = "100", fill, stroke, ...props },
      ref
    ) => (
      <svg
        ref={ref}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        {...props}
        className={`icon icon-color-${color} icon-name-${name} ${
          props.className || ""
        }`}
        fill={fill}
        stroke={stroke}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
        }}
      >
        <path d={icons[name]} />
      </svg>
    )
  )
);

export default Icon;
