import React from "react";

export default function handWithTube(props: {
  fillColor: string;
  strokeColor: string;
  face: "default" | "narrow" | "rounder";
  position: "left" | "right";
  style;
}) {
  const { fillColor, strokeColor, face, position, style } = props;
  const top = "-5%";
  const left = "-1%";

  switch (face) {
    case "default":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          style={style}
        >
          <g id="eyes">
            <path
              d="M26.45,54.39a9.17,9.17,0,0,1-4.87-.85c-1.54-.65-3-1.51-4.52-2.15a6.16,6.16,0,0,0-2.26-.56,2.67,2.67,0,0,0-2.1.86c-.86,1-.54,2.6.19,3.71,1.76,2.66,5.55,5.08,8.2,6.79a19.24,19.24,0,0,0,7.65,3.08"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.26,83.24l-.11,0a.38.38,0,0,1-.26-.44l2-9.48a.37.37,0,0,1,.17-.24.41.41,0,0,1,.19,0h.1l1.48.4a.37.37,0,0,1,.25.5L4.61,83A.39.39,0,0,1,4.26,83.24Z"
              fill="#a3d0e3"
            />
            <path
              d="M6.27,73.38l1.48.4L4.26,82.86l2-9.48m0-.75a.79.79,0,0,0-.39.11.75.75,0,0,0-.34.49l-2,9.47a.76.76,0,0,0,.52.88l.22,0a.75.75,0,0,0,.7-.48l3.49-9.08a.7.7,0,0,0,0-.6A.79.79,0,0,0,8,73.06l-1.48-.4a.69.69,0,0,0-.2,0Z"
              fill="#498da5"
            />
            <path
              d="M5.81,73.64l3.68-13a1,1,0,0,1,1-.64,1.57,1.57,0,0,1,.37,0,1,1,0,0,1,.86,1.19L8,74.24Z"
              fill="#aaa"
            />
            <path
              d="M10.46,60.34l.27,0c.41.11.68.44.6.73L7.75,73.78l-1.48-.4L9.85,60.7a.59.59,0,0,1,.61-.36m0-.75h0a1.3,1.3,0,0,0-1.33.91L5.55,73.18l-.21.73.73.2,1.48.4.72.19.2-.71,3.58-12.68a1.41,1.41,0,0,0-1.12-1.66,1.84,1.84,0,0,0-.47-.06Z"
              fill="#7a7a7a"
            />
            <path
              d="M11.11,52.45l4.34-16a1,1,0,0,1,1-.77,1.33,1.33,0,0,1,.28,0,1,1,0,0,1,.73,1.29L13.13,53Z"
              fill="#aaa"
            />
            <path
              d="M16.46,36.23h.14a.55.55,0,0,1,.39.68L12.78,52.39l-1.06-.29,4.21-15.47a.56.56,0,0,1,.53-.4m0-1h0A1.53,1.53,0,0,0,15,36.37L10.76,51.84l-.27,1,1,.26,1,.29,1,.27.26-1L18,37.18A1.49,1.49,0,0,0,17.8,36a1.52,1.52,0,0,0-.93-.73,1.4,1.4,0,0,0-.41-.05Z"
              fill="#7a7a7a"
            />
            <path
              d="M17.43,38.13a1.24,1.24,0,0,1-.38-.05l-1.63-.44a1.45,1.45,0,0,1-1-1.78l.13-.47a1.46,1.46,0,0,1,1.4-1.07,1.58,1.58,0,0,1,.38,0l1.63.44a1.46,1.46,0,0,1,1,1.79l-.13.46a1.45,1.45,0,0,1-1.4,1.07Z"
              fill="#bfc5c6"
            />
            <path
              d="M15.93,34.82a1.07,1.07,0,0,1,.25,0l1.63.45a.94.94,0,0,1,.67,1.16l-.13.47a.94.94,0,0,1-.92.7l-.25,0-1.63-.44A1,1,0,0,1,14.89,36l.12-.47a1,1,0,0,1,.92-.7m0-1a2,2,0,0,0-1.88,1.44l-.13.47a2,2,0,0,0,1.37,2.39l1.63.45a2.22,2.22,0,0,0,.51.06,2,2,0,0,0,1.89-1.43l.12-.47a2,2,0,0,0-1.37-2.4l-1.63-.44a1.75,1.75,0,0,0-.51-.07Z"
              fill="#656868"
            />
            <rect
              x="9.52"
              y="57.89"
              width="2.7"
              height="3.98"
              rx="1.06"
              transform="translate(5.62 120.5) rotate(-164.77)"
              fill="#595959"
            />
            <path
              d="M12.24,60.46a1.84,1.84,0,0,1-.47-.06l-1.89-.52A1.74,1.74,0,0,1,8.79,59a1.78,1.78,0,0,1-.18-1.37l3.6-13.24.08-.31c.06-.23.12-.46.2-.68s.25-.71.72-.71a.83.83,0,0,1,.51.21.81.81,0,0,0,.28.17l.56.15.14,0a.57.57,0,0,0,.55-.42l.26-1c.08-.3.12-.51.16-.72a5.69,5.69,0,0,1,.27-1.08L16,40l.12-.13a.64.64,0,0,1,.43-.16,2.52,2.52,0,0,1,1.17.48,5.93,5.93,0,0,1,1.84,1.46c.48.65,1.27,1.89,1,2.93a1,1,0,0,1-1,.8,1.09,1.09,0,0,1-.72-.29,4.65,4.65,0,0,1-.49-.5l-.26-.29L18,44.22,14,59.13A1.81,1.81,0,0,1,12.24,60.46Z"
              fill="#476eb2"
            />
            <path
              d="M16.54,40.21a3.13,3.13,0,0,1,1,.45A5.63,5.63,0,0,1,19.15,42a3.65,3.65,0,0,1,.92,2.51.53.53,0,0,1-.33.39.32.32,0,0,1-.14,0,.64.64,0,0,1-.39-.16c-.25-.22-.49-.53-.73-.77l-.69-.7L13.5,59a1.31,1.31,0,0,1-1.26,1,1,1,0,0,1-.34-.05L10,59.4a1.31,1.31,0,0,1-.92-1.6L10.14,54l1.8-6.64c.25-.93.51-1.85.76-2.77.08-.31.15-.65.26-1s.17-.37.25-.37.3.26.66.36l.56.15a.84.84,0,0,0,.27,0,1.07,1.07,0,0,0,1-.79c.1-.34.19-.69.29-1a13.19,13.19,0,0,1,.39-1.65s0,0,0-.06a.15.15,0,0,1,.1,0m0-1a1.13,1.13,0,0,0-.77.29,1,1,0,0,0-.29.43,6.2,6.2,0,0,0-.31,1.17,3.73,3.73,0,0,1-.12.58l0,.15-.24.9a.09.09,0,0,1-.07.05l-.56-.15L14,42.55a1.28,1.28,0,0,0-.81-.32,1.31,1.31,0,0,0-1.19,1,5.84,5.84,0,0,0-.21.73c0,.1-.05.2-.08.3L11,47.06l-.76,2.79L9.17,53.7,8.27,57l-.14.51a2.3,2.3,0,0,0,1.62,2.83l1.89.51a2.41,2.41,0,0,0,.6.08,2.32,2.32,0,0,0,2.23-1.7l3.82-14a3.07,3.07,0,0,0,.26.25,1.63,1.63,0,0,0,1.05.41,1.33,1.33,0,0,0,.45-.08,1.51,1.51,0,0,0,1-1.1c.31-1.24-.55-2.63-1.09-3.35A6.5,6.5,0,0,0,18,39.79l-.07,0a2.87,2.87,0,0,0-1.42-.55Z"
              fill="#163f70"
            />
            <line
              x1="13.47"
              y1="44.9"
              x2="10.77"
              y2="55.57"
              fill="none"
              stroke="#6a93ce"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.6"
            />
            <path
              d="M6.49,51.4a4,4,0,0,0-.38,1.46,3.37,3.37,0,0,0,.5,2.34A2.53,2.53,0,0,0,9.09,56a5.16,5.16,0,0,0,2.36-1.33c1.77-1.57,4.27-5.65.22-6.12A5.21,5.21,0,0,0,6.49,51.4Z"
              fill={fillColor}
              stroke={strokeColor}
              stroke-miterlimit="10"
            />
          </g>
        </svg>
      );
    case "narrow":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: top,
            left: left,
          }}
        >
          <g id="eyes">
            <path
              d="M32.45,56.17a9.17,9.17,0,0,1-4.87-.85c-1.54-.65-3-1.51-4.52-2.15a6.18,6.18,0,0,0-2.26-.57,2.75,2.75,0,0,0-2.11.87c-.85,1-.53,2.6.2,3.71,1.76,2.65,5.55,5.07,8.2,6.79a19.39,19.39,0,0,0,7.65,3.08"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.26,85h-.11a.38.38,0,0,1-.26-.44l2-9.48a.4.4,0,0,1,.18-.24.31.31,0,0,1,.19-.06l.1,0,1.48.4a.37.37,0,0,1,.23.19.37.37,0,0,1,0,.31l-3.49,9.07A.38.38,0,0,1,10.26,85Z"
              fill="#a3d0e3"
            />
            <path
              d="M12.27,75.16l1.48.4-3.49,9.08,2-9.48m0-.75a.77.77,0,0,0-.39.11.72.72,0,0,0-.34.48l-2,9.48a.76.76,0,0,0,.52.88.83.83,0,0,0,.22,0,.77.77,0,0,0,.7-.48l3.49-9.08a.72.72,0,0,0,0-.61.74.74,0,0,0-.47-.38l-1.48-.41-.2,0Z"
              fill="#498da5"
            />
            <path
              d="M11.81,75.42l3.68-13a1,1,0,0,1,1-.64,1.18,1.18,0,0,1,.37,0A1,1,0,0,1,17.69,63L14,76Z"
              fill="#aaa"
            />
            <path
              d="M16.46,62.11a1.26,1.26,0,0,1,.27,0c.41.11.68.44.6.73L13.75,75.56l-1.48-.4,3.58-12.68a.59.59,0,0,1,.61-.37m0-.75h0a1.33,1.33,0,0,0-1.34.92L11.55,75l-.21.73.73.2,1.48.4.72.2.2-.72,3.58-12.68a1.4,1.4,0,0,0-1.12-1.65,1.53,1.53,0,0,0-.47-.07Z"
              fill="#7a7a7a"
            />
            <path
              d="M17.11,54.23l4.34-16a1.05,1.05,0,0,1,1-.77.8.8,0,0,1,.27,0,1,1,0,0,1,.74,1.29l-4.34,16Z"
              fill="#aaa"
            />
            <path
              d="M22.46,38l.14,0a.55.55,0,0,1,.39.67L18.78,54.16l-1.06-.28,4.21-15.47a.55.55,0,0,1,.53-.41m0-1h0A1.54,1.54,0,0,0,21,38.14L16.75,53.61l-.26,1,1,.26,1.05.29,1,.26.26-1L24,39a1.52,1.52,0,0,0-.15-1.18,1.5,1.5,0,0,0-.93-.72,1.45,1.45,0,0,0-.41-.06Z"
              fill="#7a7a7a"
            />
            <path
              d="M23.43,39.91a1.65,1.65,0,0,1-.38,0l-1.63-.44a1.45,1.45,0,0,1-1-1.78l.13-.47a1.46,1.46,0,0,1,1.4-1.07,1.2,1.2,0,0,1,.38,0l1.63.44a1.45,1.45,0,0,1,1,1.78l-.13.47a1.46,1.46,0,0,1-1.4,1.07Z"
              fill="#bfc5c6"
            />
            <path
              d="M21.93,36.6a1.07,1.07,0,0,1,.25,0l1.63.44a1,1,0,0,1,.67,1.17l-.13.47a1,1,0,0,1-.92.7l-.25,0-1.63-.45a1,1,0,0,1-.67-1.16L21,37.3a1,1,0,0,1,.92-.7m0-1A2,2,0,0,0,20.05,37l-.13.47a2,2,0,0,0,1.37,2.4l1.63.44a1.79,1.79,0,0,0,.51.07A2,2,0,0,0,25.31,39l.13-.47a2,2,0,0,0-1.37-2.39l-1.63-.44a1.75,1.75,0,0,0-.51-.07Z"
              fill="#656868"
            />
            <rect
              x="15.52"
              y="59.66"
              width="2.7"
              height="3.98"
              rx="1.06"
              transform="translate(16.94 125.57) rotate(-164.77)"
              fill="#595959"
            />
            <path
              d="M18.24,62.24a1.49,1.49,0,0,1-.47-.07l-1.89-.51a1.82,1.82,0,0,1-1.27-2.22l3.6-13.23.08-.31c.06-.23.12-.47.2-.69s.25-.7.72-.7a.83.83,0,0,1,.51.21,1,1,0,0,0,.28.17l.56.15.14,0a.57.57,0,0,0,.55-.42l.26-1c.08-.3.12-.5.16-.71a5.69,5.69,0,0,1,.27-1.08l0-.11.12-.13a.64.64,0,0,1,.44-.16A2.52,2.52,0,0,1,23.7,42a5.88,5.88,0,0,1,1.85,1.47c.48.65,1.26,1.89,1,2.92a1.06,1.06,0,0,1-.66.76,1,1,0,0,1-.3,0,1.12,1.12,0,0,1-.72-.28,4.78,4.78,0,0,1-.49-.51l-.26-.28L24,46,20,60.91A1.81,1.81,0,0,1,18.24,62.24Z"
              fill="#476eb2"
            />
            <path
              d="M22.54,42a3.13,3.13,0,0,1,1,.45,5.47,5.47,0,0,1,1.62,1.29,3.63,3.63,0,0,1,.92,2.5.54.54,0,0,1-.33.4.34.34,0,0,1-.14,0,.59.59,0,0,1-.39-.16c-.25-.21-.49-.53-.73-.77L23.79,45,19.5,60.78a1.29,1.29,0,0,1-1.6.91L16,61.18a1.31,1.31,0,0,1-.92-1.6c.35-1.28.7-2.56,1-3.84q.91-3.32,1.81-6.64c.25-.92.5-1.84.76-2.76.08-.32.15-.65.26-1s.17-.37.25-.37.3.26.66.36l.55.15a1.45,1.45,0,0,0,.28,0,1.08,1.08,0,0,0,1-.79c.1-.35.19-.7.29-1.05a13.19,13.19,0,0,1,.39-1.65.05.05,0,0,1,0,0s.06,0,.1,0m0-1a1.18,1.18,0,0,0-.77.28,1.22,1.22,0,0,0-.3.44,6.73,6.73,0,0,0-.3,1.17,4,4,0,0,1-.12.58l0,.15-.24.9a.09.09,0,0,1-.07.05l-.57-.16L20,44.33a1.23,1.23,0,0,0-.81-.32c-.83,0-1.1.78-1.2,1a5.87,5.87,0,0,0-.2.74c0,.1,0,.2-.08.3l-.38,1.38L17,48.84l-1.79,6.58,0,.06-.9,3.32-.14.51a2.32,2.32,0,0,0,.22,1.75,2.27,2.27,0,0,0,1.4,1.08l1.88.52a2.49,2.49,0,0,0,.61.08A2.3,2.3,0,0,0,20.46,61l3.83-14,.26.26a1.62,1.62,0,0,0,1.05.4,1.33,1.33,0,0,0,.45-.07,1.51,1.51,0,0,0,1-1.11c.31-1.23-.55-2.62-1.1-3.34A6,6,0,0,0,24,41.57l-.06,0A2.94,2.94,0,0,0,22.54,41Z"
              fill="#163f70"
            />
            <line
              x1="19.47"
              y1="46.67"
              x2="16.76"
              y2="57.35"
              fill="none"
              stroke="#6a93ce"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.6"
            />
            <path
              d="M12.49,53.18a4,4,0,0,0-.38,1.46,3.39,3.39,0,0,0,.5,2.34,2.56,2.56,0,0,0,2.48.77,5.35,5.35,0,0,0,2.36-1.33c1.77-1.57,4.27-5.65.22-6.13A5.23,5.23,0,0,0,12.49,53.18Z"
              fill={fillColor}
              stroke={strokeColor}
              stroke-miterlimit="10"
            />
          </g>
        </svg>
      );
    case "rounder":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: top,
            left: left,
          }}
        >
          <g id="eyes">
            <path
              d="M23.29,53.28a9.17,9.17,0,0,1-4.87-.85c-1.54-.65-3-1.51-4.52-2.15a6.18,6.18,0,0,0-2.26-.57,2.75,2.75,0,0,0-2.11.87c-.85,1-.53,2.6.2,3.71,1.76,2.65,5.55,5.07,8.2,6.79a19.39,19.39,0,0,0,7.65,3.08"
              fill={fillColor}
              stroke={strokeColor}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.87,84.08a.36.36,0,0,1-.34-.37L9.64,74a.36.36,0,0,1,.12-.28.39.39,0,0,1,.25-.1l1.56.11a.42.42,0,0,1,.27.14.4.4,0,0,1,.07.3l-1.64,9.58a.38.38,0,0,1-.37.31Z"
              fill="#a3d0e3"
            />
            <path
              d="M10,74l1.53.1L9.9,83.71,10,74m0-.75a.74.74,0,0,0-.51.2.73.73,0,0,0-.24.54L9.15,83.7a.76.76,0,0,0,.68.76H9.9a.75.75,0,0,0,.74-.62l1.64-9.59a.74.74,0,0,0-.15-.59.72.72,0,0,0-.54-.28l-1.53-.11Z"
              fill="#498da5"
            />
            <path
              d="M9.61,74.37l1-13.52a1,1,0,0,1,1.1-.84,1.37,1.37,0,0,1,.85.29.84.84,0,0,1,.33.71l-1,13.51Z"
              fill="#aaa"
            />
            <path
              d="M11.75,60.39h.08c.42,0,.75.3.73.6l-1,13.13L10,74l1-13.14c0-.28.34-.49.72-.49m0-.75h0a1.38,1.38,0,0,0-1.47,1.19L9.26,74l0,.76.75,0,1.53.1.74,0,.06-.74L13.3,61a1.19,1.19,0,0,0-.47-1,1.57,1.57,0,0,0-.95-.37Z"
              fill="#7a7a7a"
            />
            <path
              d="M10.64,52.55l1.12-16.5a1.06,1.06,0,0,1,1-1,1.07,1.07,0,0,1,1,1.12l-1.12,16.5Z"
              fill="#aaa"
            />
            <path
              d="M12.8,35.57h0a.55.55,0,0,1,.51.58l-1.09,16-1.09-.08,1.09-16a.55.55,0,0,1,.54-.52m0-1h0A1.56,1.56,0,0,0,11.26,36L10.17,52l-.07,1,1,.07,1.1.07,1,.07.07-1,1.09-16A1.53,1.53,0,0,0,14,35.11a1.51,1.51,0,0,0-1.06-.53H12.8Z"
              fill="#7a7a7a"
            />
            <path
              d="M12,37.18a1.45,1.45,0,0,1-1.35-1.55l0-.49a1.46,1.46,0,0,1,1.45-1.35l1.78.12a1.45,1.45,0,0,1,1.35,1.55l0,.48a1.45,1.45,0,0,1-1.45,1.35Z"
              fill="#bfc5c6"
            />
            <path
              d="M12.09,34.29h.06l1.69.11a1,1,0,0,1,.88,1l0,.49a.94.94,0,0,1-.95.88h-.06L12,36.68a1,1,0,0,1-.88-1l0-.48a1,1,0,0,1,.95-.89m0-1a2,2,0,0,0-1.95,1.82l0,.49A1.88,1.88,0,0,0,10.59,37a2,2,0,0,0,1.33.67l1.69.11h.13A2,2,0,0,0,15.69,36l0-.49a1.88,1.88,0,0,0-.48-1.41,1.91,1.91,0,0,0-1.33-.67l-1.69-.11Z"
              fill="#656868"
            />
            <rect
              x="10.51"
              y="57.89"
              width="2.7"
              height="3.98"
              rx="1.06"
              transform="translate(19.63 120.41) rotate(-176.11)"
              fill="#595959"
            />
            <path
              d="M12.85,60.21l-2-.13a1.8,1.8,0,0,1-1.67-1.93l.93-13.68v-.32a5.51,5.51,0,0,1,.06-.71c0-.21.12-.85.69-.85a1,1,0,0,1,.42.12.82.82,0,0,0,.31.11l.58,0a.57.57,0,0,0,.59-.53l.08-1.08c0-.22,0-.43,0-.64a5.28,5.28,0,0,1,0-1.11l0-.11.09-.16a.69.69,0,0,1,.58-.26,3.61,3.61,0,0,1,1.06.25,6,6,0,0,1,2.09,1.08c.61.54,1.62,1.6,1.57,2.67a1.07,1.07,0,0,1-.5.87,1,1,0,0,1-.48.12,1.18,1.18,0,0,1-.57-.15,5.15,5.15,0,0,1-.58-.41l-.31-.23-.1-.06L14.77,58.53A1.8,1.8,0,0,1,13,60.21Z"
              fill="#476eb2"
            />
            <path
              d="M13.64,39.47a3.81,3.81,0,0,1,1,.26,5.44,5.44,0,0,1,1.84.94c.56.51,1.44,1.45,1.4,2.28a.54.54,0,0,1-.25.45.46.46,0,0,1-.23.06.62.62,0,0,1-.32-.09c-.29-.16-.58-.42-.86-.61l-.82-.55L14.27,58.5A1.3,1.3,0,0,1,13,59.71h-.09l-2-.13a1.32,1.32,0,0,1-1.22-1.39l.27-4q.24-3.42.47-6.86c.07-1,.13-1.91.2-2.86,0-.33,0-.67.06-1s.11-.42.2-.42.34.2.7.23l.57,0h.07a1.05,1.05,0,0,0,1.06-1l.08-1.09a13.57,13.57,0,0,1,.06-1.69s0-.05,0-.06.09-.06.17-.06m0-1a1.19,1.19,0,0,0-1,.46,1.13,1.13,0,0,0-.2.48,5.69,5.69,0,0,0-.06,1.21c0,.2,0,.39,0,.59l0,.53,0,.56a.09.09,0,0,1-.07.06l-.58,0-.12-.06a1.55,1.55,0,0,0-.64-.17c-.38,0-1,.17-1.19,1.27a7,7,0,0,0-.06.77c0,.1,0,.2,0,.3l-.1,1.48-.1,1.38-.23,3.43L9,54.16l-.14,2-.13,2a2.29,2.29,0,0,0,2.14,2.45l2,.14H13a2.31,2.31,0,0,0,2.3-2.15l1-14.52a3.28,3.28,0,0,0,.31.2,1.67,1.67,0,0,0,.81.22,1.46,1.46,0,0,0,.72-.19A1.53,1.53,0,0,0,18.86,43a4.34,4.34,0,0,0-1.74-3.06,6,6,0,0,0-2.19-1.15l-.07,0a3.73,3.73,0,0,0-1.22-.28Z"
              fill="#163f70"
            />
            <line
              x1="11.47"
              y1="44.68"
              x2="10.92"
              y2="55.67"
              fill="none"
              stroke="#6a93ce"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="0.6"
            />
            <path
              d="M5.9,52.42a4,4,0,0,0-.08,1.51,3.32,3.32,0,0,0,.95,2.19,2.51,2.51,0,0,0,2.59.27,5.24,5.24,0,0,0,2-1.76c1.43-1.89,3.08-6.38-1-6.05A5.23,5.23,0,0,0,5.9,52.42Z"
              fill={fillColor}
              stroke={strokeColor}
              stroke-miterlimit="10"
            />
          </g>
        </svg>
      );
  }
}
