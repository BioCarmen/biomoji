import React from "react";

export default function handWithPizza(props: {
  fillColor: string;
  strokeColor: string;
  face: "default" | "narrow" | "rounder";
  position: "left" | "right";
  style;
}) {
  const { fillColor, strokeColor, face, position, style } = props;
  const ele = (
    <g id="toppings">
      <path
        d="M29.77,71.24a29.36,29.36,0,0,0-5.37-4.5,14.1,14.1,0,0,1-4.78-5.58,4.08,4.08,0,0,1-.41-2.41,1.84,1.84,0,0,1,1.53-1.51,3.71,3.71,0,0,1,1.92.54l8.15,4"
        fill={fillColor}
        stroke={strokeColor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.4,60.85a1.14,1.14,0,0,0,.38.25c-.26-.05-.51-.13-.56-.29s0-.06-.06-.09Z"
        fill="#ad6c36"
      />
      <path
        d="M18.21,47.89a3.28,3.28,0,0,1,.37.33c.58.59,1.18,1.16,1.78,1.74q3.6,3.43,7.49,6.56c2.14,1.73,4.38,3.43,6.67,5,.6.41,1.2.8,1.81,1.19.21.14,1,.48,1,.83,0,.53-1.38.54-1.75.6-1.18.19-2.35.35-3.53.49a61.41,61.41,0,0,1-7.78.46A60.71,60.71,0,0,1,17,64.4a51.6,51.6,0,0,1-6.49-1.47c-1.24-.39-3.09-.74-4-1.66A1.5,1.5,0,0,1,6,60.52a5.2,5.2,0,0,1,.34-2.61,14.39,14.39,0,0,1,1.83-3.76,16.12,16.12,0,0,1,4.22-4.45,11.58,11.58,0,0,1,4.46-1.91C17.53,47.67,17.83,47.63,18.21,47.89Z"
        fill="#a1361d"
      />
      <path
        d="M7,50.09l0-.08"
        fill="none"
        stroke="#ec00ff"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <path
        d="M6.21,60.83A3.27,3.27,0,0,1,6,59.64a6.56,6.56,0,0,1,.26-1.06,12.74,12.74,0,0,1,.83-2.15,14.45,14.45,0,0,1,2.79-3.89,18.12,18.12,0,0,1,4.35-3.17,24,24,0,0,1,2.64-1.19c.86-.32,1.59-.28,1.36-1.39a2.67,2.67,0,0,0-.77-1.45c-.78-.69-1.69-.35-2.54,0a24.84,24.84,0,0,0-2.8,1.35,21,21,0,0,0-8.64,9.07c-.27.56-.51,1.13-.75,1.7l-.36.83c-.11.24-.13.5-.24.74a1.71,1.71,0,0,0,.17,1.44,1.38,1.38,0,0,0,1.11.67,5.94,5.94,0,0,0,3,.2A5.18,5.18,0,0,1,6.21,60.83Z"
        fill="#d19259"
      />
      <path
        d="M2.12,60.48c0-.25-.05-.49-.07-.73,0,0,0-.4,0-.44A3.71,3.71,0,0,1,2.45,59a2.93,2.93,0,0,1,1.48-.34c.25,0,.52,0,.78.07a8.46,8.46,0,0,1,.82.24c.18,0,.45,0,.58.13.67.29,3.18,1.21,3.42,1.31,1.28.51,2.57,1,3.89,1.44a46.38,46.38,0,0,0,10.49,1.53c1.43.11,2.89.24,4.32.28,1.59,0,3.18,0,4.76,0,.8,0,1.59-.07,2.38-.13a5.75,5.75,0,0,0,1.86-.17.21.21,0,0,1,.06.17c0,.53-1.38.54-1.75.6-1.18.19-2.35.35-3.53.49a61.41,61.41,0,0,1-7.78.46A60.71,60.71,0,0,1,17,64.4a50.8,50.8,0,0,1-5.7-1.24c-.95-.26-1.89-.54-2.83-.84a7,7,0,0,1-1.82-.62s0,0,0,0c-.07-.16-.7-.16-.86-.18l-1.1-.18-1.35-.22c-.23,0-1-.06-1.13-.36A.54.54,0,0,1,2.12,60.48Z"
        fill="#deb988"
      />
      <path
        d="M2.05,59.75s0-.4,0-.44A3.71,3.71,0,0,1,2.45,59a2.93,2.93,0,0,1,1.48-.34c.25,0,.52,0,.78.07a8.46,8.46,0,0,1,.82.24c.18,0,.45,0,.58.13.67.29,3.18,1.21,3.42,1.31,1.28.51,2.57,1,3.89,1.44a28.81,28.81,0,0,0,4.93,1c1.66.22,3.33.3,5,.46s3.49.27,5.24.32,3.5,0,5.25-.06c1.14-.05,2.27-.13,3.4-.23a3.67,3.67,0,0,1-1.4.27l-4.39.23a3.38,3.38,0,0,0-.63.07c-.27.07-.51.2-.78.25A4.1,4.1,0,0,1,28.32,64a11.45,11.45,0,0,0-1.75-.21l-5.52-.42L19,63.21a3,3,0,0,1-.85-.12,8.88,8.88,0,0,1-1.05-.22,1.73,1.73,0,0,0-1.08,0A3.24,3.24,0,0,1,15,63c-.15,0-.28,0-.35-.15a.56.56,0,0,0-.31-.31,1.71,1.71,0,0,0-.45-.09,1.11,1.11,0,0,1-.45-.12A3.89,3.89,0,0,1,13,61.9a1.87,1.87,0,0,0-.6-.21A13.23,13.23,0,0,1,10,60.86a1,1,0,0,0-.23-.12,2.3,2.3,0,0,0-.37,0l-.88,0H8.47A.2.2,0,0,0,8.4,61c0,.1.08.19.11.29a.37.37,0,0,1,0,.29.32.32,0,0,1-.34.14c-.26,0-.37-.22-.47-.44s-.06-.37-.11-.56a.53.53,0,0,0-.35-.39c-.17,0-.46-.11-.61,0-.32.25-.11.91.06,1.19.05.07.13.28,0,.23s-.12-.07-.18-.09a1.17,1.17,0,0,0-.26,0,2.29,2.29,0,0,1-.39,0,1.06,1.06,0,0,1-.09-.42l0,0A.81.81,0,0,0,6,60.84a1,1,0,0,0,.26-1,1.7,1.7,0,0,0-1.64-.89c-1.08-.17-2.43.24-2.42,1H2.06A.49.49,0,0,0,2.05,59.75Z"
        fill="#c99d69"
      />
      <path
        d="M7.87,61.91h0"
        fill="none"
        stroke="#c99d69"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0"
      />
      <path d="M18,64.55l-.66-.1h.1Z" fill="#ad6c36" />
      <path
        d="M17.54,46.08c.16.33,0,.83-.36.86s-.52-.17-.74,0-.23.61-.51.7a.83.83,0,0,1-.44-.06c-.44-.09-.84.24-1.18.52a8.69,8.69,0,0,1-1.51,1c-.23.12-.49.19-.72.3s-.32.44-.64.5a1.27,1.27,0,0,0-.69.33,11.58,11.58,0,0,1-1.44,1.27,3,3,0,0,0-.68.42c-.42.39-.45,1.06-1,1.38a2.74,2.74,0,0,0-.91.88,1.66,1.66,0,0,0-.23.84c0,.28,0,.7-.22.88s-.44.13-.52.47-.15.52-.55.63c-.16.05-.35.09-.47,0a.37.37,0,0,1-.09-.27c0-.37.19-.6.27-.93a2,2,0,0,0,0-.43,1.47,1.47,0,0,1,.15-.58,8.37,8.37,0,0,1,1.53-2.37c.32-.35.71-.62,1-1s.66-.8,1-1.19a3.5,3.5,0,0,1,1-.91,5.48,5.48,0,0,0,1-.53c.31-.28.44-.73.78-1s1.08-.21,1.55-.48a3.63,3.63,0,0,0,.71-.65,4.18,4.18,0,0,1,1.46-.77l.78-.28a2.54,2.54,0,0,1,.74-.27C17,45.37,17.4,45.8,17.54,46.08Z"
        fill="#d6a167"
      />
      <path
        d="M2.16,60.72a1.68,1.68,0,0,1-.05-.63c0-.2,0-.4,0-.61a2.92,2.92,0,0,1,.31-1.19l.36-.83c.24-.57.48-1.14.75-1.7a21,21,0,0,1,8.64-9.07,24.84,24.84,0,0,1,2.8-1.35c.85-.35,1.76-.69,2.54,0a2.67,2.67,0,0,1,.77,1.45c.23,1.11-.5,1.07-1.36,1.39a23.16,23.16,0,0,0-2.64,1.19,18.12,18.12,0,0,0-4.35,3.17A14.45,14.45,0,0,0,7.1,56.43a12.74,12.74,0,0,0-.83,2.15c0,.18-.11.36-.16.55.67.29,3.18,1.21,3.42,1.31,1.28.51,2.57,1,3.89,1.44.21.06.41.13.62.18l.26.07.36.1.32.08.31.07.34.07.29.06.34.07.3.06.33,0,.31.06.32,0,.33.05.3,0,.31,0c1.63.2,3.26.28,4.89.44h.08l.48,0,2.4.18c.76,0,1.52.08,2.28.1s1.7,0,2.54,0h.78l1.08,0c.8,0,1.59-.07,2.38-.13h.42l1.31-.11.13,0a.21.21,0,0,1,.06.17c0,.53-1.38.54-1.75.6-1.18.19-2.35.35-3.53.49a61.41,61.41,0,0,1-7.78.46A60.71,60.71,0,0,1,17,64.4a50.8,50.8,0,0,1-5.7-1.24c-.95-.26-1.89-.54-2.83-.84a7.94,7.94,0,0,1-1.77-.58h0v0h0c-.07,0-.12-.07-.18-.09l-.26,0a2.29,2.29,0,0,1-.39,0l-.68-.11a8.69,8.69,0,0,1-1-.16l-.79-.13c-.11,0-.34,0-.57-.07l-.09,0h0l-.08,0h0l-.06,0h0l-.05,0,0,0,0,0h0l0,0h0l0,0h0a.14.14,0,0,1,0-.06.09.09,0,0,1,0-.06Z"
        fill="none"
        stroke="#ad6c36"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <path
        d="M37.23,63.36a5.75,5.75,0,0,1-1.86.17c-.79.06-1.58.1-2.38.13l-1.54.05a2,2,0,0,0-1.27.31,1.33,1.33,0,0,1-1.12,0,21.11,21.11,0,0,0-5.15-.62c-1.45-.11-2.91-.2-4.36-.36q-1.07-.11-2.13-.27c-.4-.06-.8-.16-1.2-.2s-.54.19-.88.21a.88.88,0,0,1-.62-.22,2.24,2.24,0,0,0-.32-.3,1.24,1.24,0,0,0-.47-.11.92.92,0,0,1-.47-.24,2,2,0,0,0-.61-.22l-1.35-.49-1-.38a2.75,2.75,0,0,0-.82-.28l-.31,0a1.5,1.5,0,0,1-.86-.15c-.48-.26-.43.27-.25.56.08.13.19.27.13.4a.24.24,0,0,1-.34.06.55.55,0,0,1-.19-.34,1.84,1.84,0,0,1,0-.66.8.8,0,0,0,0-.31c0-.1-.13-.19-.23-.16s-.16.21-.27.29A.3.3,0,0,1,7,60.12a3.26,3.26,0,0,1-.15-.44c-.12-.31-.51-.31-.52-.7a1.06,1.06,0,0,1,.34-.69,2.85,2.85,0,0,0,.51-.59c.24-.45,0-.9.14-1.33a1.08,1.08,0,0,1,.15-.28A4.38,4.38,0,0,1,8,55.35c.15-.11.36-.15.53-.25.63-.39.87-1.19,1.37-1.75a12.3,12.3,0,0,1,2.27-1.48,14.28,14.28,0,0,0,1.6-1.41,4.06,4.06,0,0,1,1.45-1.08,4.66,4.66,0,0,0,1.29-.57,2.21,2.21,0,0,1,2-.53,2.45,2.45,0,0,1,.74.62L20.36,50c.8.76,1.61,1.51,2.42,2.25.37.33.77.6,1.15.9a10.63,10.63,0,0,1,1.07,1,30.76,30.76,0,0,0,2.85,2.36c2.14,1.73,4.38,3.43,6.67,5,.6.41,1.2.8,1.81,1.19.19.13.82.41.94.71Z"
        fill="#f8ce5b"
      />
      <path
        d="M26.12,63.27c.64,0,1.28.15,1.93.19.46,0,.82.44,1.29.44a2.54,2.54,0,0,0,.77-.23,1,1,0,0,1,.39-.05l.25.06a4.76,4.76,0,0,0-.57.34,1.33,1.33,0,0,1-1.12,0,21.11,21.11,0,0,0-5.15-.62l-.57,0A18.46,18.46,0,0,1,26.12,63.27Z"
        fill="#f7bc45"
      />
      <path
        d="M35.57,63.21c.2-.06.4-.12.6-.16s.14-.26,0-.39l-.26-.2c.12.09.27.15.39.23a2.26,2.26,0,0,0,.38.25,1,1,0,0,1,.61.47l0,0a5.75,5.75,0,0,1-1.86.17q-.78.06-1.56.09A12.12,12.12,0,0,0,35.57,63.21Z"
        fill="#f7bc45"
      />
      <path
        d="M6.29,59l.09,0c0,.23.27.39.44.49a.48.48,0,0,1,.24.27c0,.08,0,.16,0,.22a.22.22,0,0,0,.25.09A.58.58,0,0,0,7.58,60c-.08.09-.14.24-.24.31A.3.3,0,0,1,7,60.12a3.26,3.26,0,0,1-.15-.44C6.69,59.37,6.31,59.37,6.29,59Z"
        fill="#f7bc45"
      />
      <path
        d="M7.85,60.45v0l0,.24a.32.32,0,0,0,0,.14.12.12,0,0,0,.12.06c.05,0,.08-.08.08-.13a1,1,0,0,1,0-.17.21.21,0,0,1,.14-.16c-.08,0-.06.2-.05.26a.93.93,0,0,0,.12.33c.08.13.19.27.13.4a.24.24,0,0,1-.34.06.55.55,0,0,1-.19-.34A2.44,2.44,0,0,1,7.85,60.45Z"
        fill="#f7bc45"
      />
      <path
        d="M12.55,61.57l1,.27c.28.08.57,0,.82.22a2.64,2.64,0,0,0,.37.31,1,1,0,0,0,.46,0l.29,0a1.26,1.26,0,0,1,.28,0l.62.17-.19,0c-.35,0-.54.19-.88.21a.88.88,0,0,1-.62-.22,2.24,2.24,0,0,0-.32-.3,1.24,1.24,0,0,0-.47-.11.92.92,0,0,1-.47-.24,2,2,0,0,0-.61-.22l-.47-.17Z"
        fill="#f7bc45"
      />
      <path
        d="M18.82,57a.75.75,0,0,0,.25.4,1.62,1.62,0,0,0,.92.23,7.85,7.85,0,0,1,1,0c.74.12,1.36.66,2.1.75.93.12,1.91-.47,2.76-.1a.74.74,0,0,1,.5.73.93.93,0,0,1-.53.57,3.87,3.87,0,0,0-.82.51c-.21.19-.61,1-.21,1.22.15.07.34.06.47.16a.42.42,0,0,1,.07.54.94.94,0,0,1-.45.36,2,2,0,0,1-1.89,0c-.49-.34-.73-.93-1.18-1.31a3.1,3.1,0,0,0-2.12-.49,6.27,6.27,0,0,1-1.56-.05c-.31-.08-.59-.27-.91-.32a1.71,1.71,0,0,0-1.12.38,3.68,3.68,0,0,1-1.55.5,2.14,2.14,0,0,1-1.92-.78.64.64,0,0,1-.08-.78c.17-.2.47-.18.73-.17a4.25,4.25,0,0,0,3.12-1.19,1.47,1.47,0,0,0,.47-.73c.09-.47-.17-.93,0-1.39a1.45,1.45,0,0,1,.87-.81C18.83,54.9,18.6,56.27,18.82,57Z"
        fill="#f7bc45"
      />
      <path
        d="M22.06,53.62a6.2,6.2,0,0,1,.93-.28,1.12,1.12,0,0,1,.91.21.64.64,0,0,1,.09.87c-.23.24-.62.19-.95.14a4.09,4.09,0,0,0-1.48-.06,1.74,1.74,0,0,0-1.23.76c-.12.2-.21.45-.43.54s-.58-.14-.73-.4a2,2,0,0,0-.51-.74c-.48-.31-1.16.1-1.69-.13a1.36,1.36,0,0,1-.65-1,7.07,7.07,0,0,1-.2-1,.93.93,0,0,1,.06-.55c.48-.8,1.23.32,1.53.66A4,4,0,0,0,22.06,53.62Z"
        fill="#f7bc45"
      />
      <path
        d="M17.34,49.36a.49.49,0,0,1-.21.46,3.58,3.58,0,0,1-.48.24,1.75,1.75,0,0,0-.87,1c-.14.37-.46.76-.38,1.16a6.39,6.39,0,0,1,.13.63.53.53,0,0,1-.28.53c-.22.08-.45-.06-.66-.15a1.6,1.6,0,0,0-1.1,0c-.26.1-.54.27-.8.17a.57.57,0,0,1-.3-.65,1.07,1.07,0,0,1,.48-.59c.22-.14.46-.23.69-.36.67-.37,1-1,1.56-1.49C15.38,50.06,17.14,48.46,17.34,49.36Z"
        fill="#f7bc45"
      />
      <path
        d="M10.77,55a2.32,2.32,0,0,0-.62.71,1.65,1.65,0,0,0,.36,1.69,5.58,5.58,0,0,0,1.82,1.13c.17.08.36.2.35.39s-.28.3-.49.29a1.07,1.07,0,0,0-.62.05.5.5,0,0,0-.11.66,1.53,1.53,0,0,0,.52.49c-.2.33-.72.24-1,0a2.55,2.55,0,0,0-1-.58c-.4-.05-.78.21-1.18.19a1.2,1.2,0,0,1-1-.9,3.53,3.53,0,0,1,0-1.45,2.58,2.58,0,0,1,.39-1.31,7.35,7.35,0,0,1,1-.87c.43-.42.25-1,.63-1.45.69-.77,2.46-.91,1.49.5A2.38,2.38,0,0,1,10.77,55Z"
        fill="#f7bc45"
      />
      <path
        d="M29.21,58c.15.13.32.25.48.37a.27.27,0,0,1,.15.18c0,.11-.11.18-.21.21a2.33,2.33,0,0,1-1.05,0,1.48,1.48,0,0,0-1,.11c-.13.08-.23.2-.36.28a.4.4,0,0,1-.43,0c-.15-.1-.14-.32-.12-.5a.63.63,0,0,0-.13-.55c-.15-.16-.32-.24-.29-.49s.23-.43.22-.67a1,1,0,0,0-.27-.46.41.41,0,0,1-.06-.5.33.33,0,0,1,.4,0c.28.16.48.48.78.65A6,6,0,0,1,28,57C28.39,57.28,28.79,57.65,29.21,58Z"
        fill="#f7bc45"
      />
      <path
        d="M34.89,62.47a.89.89,0,0,1-.68.77,8.55,8.55,0,0,1-2.31.22c-.24,0-.54,0-.62-.25a.46.46,0,0,1,.24-.48,1.73,1.73,0,0,0,.44-.36.89.89,0,0,0,.09-.58A2.32,2.32,0,0,1,32,61.2c0-.28.18-.56.5-.54a2.76,2.76,0,0,1,1.2.59C34.05,61.5,34.89,62,34.89,62.47Z"
        fill="#f7bc45"
      />
      <path
        d="M37.23,63.36a5.75,5.75,0,0,1-1.86.17c-.79.06-1.58.1-2.38.13l-1.54.05a2,2,0,0,0-1.27.31,1.33,1.33,0,0,1-1.12,0,21.11,21.11,0,0,0-5.15-.62c-1.45-.11-2.91-.2-4.36-.36q-1.07-.11-2.13-.27c-.4-.06-.8-.16-1.2-.2s-.54.19-.88.21a.88.88,0,0,1-.62-.22,2.24,2.24,0,0,0-.32-.3,1.24,1.24,0,0,0-.47-.11.92.92,0,0,1-.47-.24,2,2,0,0,0-.61-.22l-1.35-.49-1-.38a2.75,2.75,0,0,0-.82-.28l-.31,0a1.5,1.5,0,0,1-.86-.15c-.48-.26-.43.27-.25.56.08.13.19.27.13.4a.24.24,0,0,1-.34.06.55.55,0,0,1-.19-.34,1.84,1.84,0,0,1,0-.66.8.8,0,0,0,0-.31c0-.1-.13-.19-.23-.16s-.16.21-.27.29A.3.3,0,0,1,7,60.12a3.26,3.26,0,0,1-.15-.44c-.12-.31-.51-.31-.52-.7a1.06,1.06,0,0,1,.34-.69,2.85,2.85,0,0,0,.51-.59c.24-.45,0-.9.14-1.33a1.08,1.08,0,0,1,.15-.28A4.38,4.38,0,0,1,8,55.35c.15-.11.36-.15.53-.25.63-.39.87-1.19,1.37-1.75a12.3,12.3,0,0,1,2.27-1.48,14.28,14.28,0,0,0,1.6-1.41,4.06,4.06,0,0,1,1.45-1.08,4.66,4.66,0,0,0,1.29-.57,2.21,2.21,0,0,1,2-.53,2.45,2.45,0,0,1,.74.62L20.36,50c.8.76,1.61,1.51,2.42,2.25.37.33.77.6,1.15.9a10.63,10.63,0,0,1,1.07,1,30.76,30.76,0,0,0,2.85,2.36c2.14,1.73,4.38,3.43,6.67,5,.6.41,1.2.8,1.81,1.19.19.13.82.41.94.71Z"
        fill="none"
        stroke="#f5aa27"
        stroke-miterlimit="10"
        stroke-width="0.12"
      />
      <ellipse
        cx="13.65"
        cy="56.07"
        rx="2.99"
        ry="2.18"
        transform="translate(-3.26 0.89) rotate(-3.35)"
        fill="#cc553b"
      />
      <path
        d="M10.73,56.25c.51,2.69,5.73,2.45,5.87-.35-.37-2.88-5.86-2.55-5.87.35Zm-.13,0c.16-2.94,5.6-3.26,6.07-.35,0,3.05-5.73,3.44-6.07.35Z"
        fill="#af2f1a"
      />
      <path
        d="M16.11,55.2a.08.08,0,0,1-.05.09.08.08,0,0,1-.08,0c-.07-.08-.11-.21-.18-.3a1.18,1.18,0,0,0-.31-.24c-.21-.12-.46-.13-.67-.23s0-.11.08-.11a1.13,1.13,0,0,1,.32,0,1.81,1.81,0,0,1,.57.33A1.3,1.3,0,0,1,16.11,55.2Z"
        fill="#efa9a3"
      />
      <path
        d="M13.71,54.4a.2.2,0,0,1,.16-.06l.17,0c.07,0,.21,0,.27,0s0,.06,0,.08-.22-.05-.29-.06A1.07,1.07,0,0,0,13.71,54.4Z"
        fill="#efa9a3"
      />
      <path
        d="M11.21,56.64l0,.06s0,0,0,0,0,0-.05,0-.2-.28-.17-.41c.05,0,.06.09.08.13A.5.5,0,0,0,11.21,56.64Z"
        fill="#efa9a3"
      />
      <path
        d="M17.5,50.05a1.75,1.75,0,0,1,.87-.87c.33-.16.89-.38,1.21-.1.61.55,1.21,1.11,1.8,1.67.39.37.79.72,1.15,1.12.14.14.46.4.45.6s-.26.4-.38.52a2.06,2.06,0,0,1-.89.49,3.55,3.55,0,0,1-2.36-.23C17.84,52.58,17,51.15,17.5,50.05Z"
        fill="#cc553b"
      />
      <path
        d="M17.48,50a1.87,1.87,0,0,1,2-1c.86.72,1.72,1.53,2.53,2.29l.7.67a1.14,1.14,0,0,1,.32.42c.05.25-.12.39-.21.51C21,55,16.49,52.8,17.48,50Zm0,0c-.79,2.52,3.51,4.54,5.19,2.7.31-.27.16-.44-.08-.68l-.69-.69c-.78-.77-1.64-1.61-2.45-2.34a1.81,1.81,0,0,0-2,1Z"
        fill="#af2f1a"
      />
      <path
        d="M21.09,50.91a.21.21,0,0,1-.24,0,.59.59,0,0,1-.2-.15L20,50.13c-.07-.07-.28-.27-.14-.35s.31.18.38.26S21.11,50.89,21.09,50.91Z"
        fill="#efa9a3"
      />
      <path
        d="M22.1,52a.62.62,0,0,1,.18.14.2.2,0,0,1,0,.21.12.12,0,0,1-.18.06c-.07-.05-.06-.15-.09-.22s-.05-.08-.05-.13.05-.1.09-.06"
        fill="#efa9a3"
      />
      <path
        d="M19.49,51.89a.11.11,0,0,1,.14.1.12.12,0,0,1-.13.11.12.12,0,0,1-.11-.13.14.14,0,0,1,.12-.13l0,0"
        fill="#efa9a3"
      />
      <path
        d="M19.09,49.28a.5.5,0,0,0-.38,0,.31.31,0,0,1-.12.05.08.08,0,0,1-.1-.05.11.11,0,0,1,.07-.11,1,1,0,0,1,.58-.15C19.34,49.1,19.31,49.34,19.09,49.28Z"
        fill="#efa9a3"
      />
      <path
        d="M20.09,56.64c-.16,1,1,2.09,2.61,2.33A4.17,4.17,0,0,0,25,58.65a1.38,1.38,0,0,0,.51-2.22l-.07-.07a3.09,3.09,0,0,0-1.7-.84,4.59,4.59,0,0,0-2.37-.23A1.89,1.89,0,0,0,20.09,56.64Z"
        fill="#cc553b"
      />
      <path
        d="M20.14,56.65c-.1,2.36,5,3.17,5.66.92.17-1.42-1.47-2-2.6-2.16-1.14-.42-2.79-.11-3.06,1.24Zm-.11,0c.31-1.42,2-1.72,3.19-1.28,1.16.23,2.85.71,2.7,2.23-.64,2.58-6.12,1.76-5.89-1Z"
        fill="#af2f1a"
      />
      <path
        d="M23.84,56.07h-.08a3.59,3.59,0,0,1-1-.16c-.1,0-.23-.2-.06-.2s.12.07.16.08l.27.08a2.58,2.58,0,0,0,.39,0c.08,0,.26,0,.32,0a.09.09,0,0,1,.05.11A.1.1,0,0,1,23.84,56.07Z"
        fill="#efa9a3"
      />
      <path
        d="M20.94,56a2.37,2.37,0,0,0-.19.35l-.06.07a.07.07,0,0,1-.09,0,.08.08,0,0,1,0-.09.78.78,0,0,1,.38-.58.58.58,0,0,1,.43,0c-.05,0-.12,0-.18.06A.6.6,0,0,0,20.94,56Z"
        fill="#efa9a3"
      />
      <path
        d="M20.56,63.12l-.75,0c-.67-.06-1.34-.14-2-.23-.18,0-1.82-.31-1.84-.26a2.92,2.92,0,0,1,2.91-1.39,3.75,3.75,0,0,1,2,.62,2.28,2.28,0,0,1,.89,1.43A5.26,5.26,0,0,0,20.56,63.12Z"
        fill="#cc553b"
      />
      <path
        d="M20.56,63.2C19,63,17.47,62.79,16,62.58a2.21,2.21,0,0,1,1.35-1.17c1.63-.62,4.23-.16,4.51,1.86-.33-.06-.9-.05-1.25-.07Zm0-.16a3.22,3.22,0,0,1,1.25.21s-.06,0-.06,0c-.52-2.43-4.67-2.76-5.77-.67a35.18,35.18,0,0,0,4.58.45Z"
        fill="#af2f1a"
      />
      <path
        d="M21.13,62.38a.12.12,0,0,1,0,.1.11.11,0,0,1-.18,0c-.06,0-.08-.12-.11-.18a.76.76,0,0,0-.39-.34,3,3,0,0,0-.51-.16s-.09,0-.09-.07a.06.06,0,0,1,0-.07.17.17,0,0,1,.1,0A1.5,1.5,0,0,1,21.13,62.38Z"
        fill="#efa9a3"
      />
      <path
        d="M26.22,60.91a2.64,2.64,0,0,0-.08.62c0,.89.68,1.29,1.47,1.47a5.35,5.35,0,0,0,2.32.06c1.18-.3,2.74-1.86,1.56-3a3.1,3.1,0,0,0-1.87-.77,3.27,3.27,0,0,0-2.79.62A2.39,2.39,0,0,0,26.22,60.91Z"
        fill="#cc553b"
      />
      <path
        d="M26.24,60.92c-.4,1.64,1,2.06,2.38,2.11a3.08,3.08,0,0,0,3.11-1.62c.57-1.42-1.25-2.16-2.4-2.18a2.58,2.58,0,0,0-3.09,1.69Zm0,0a2.68,2.68,0,0,1,3.14-1.7c1.19,0,3,.77,2.56,2.26a3,3,0,0,1-3.3,1.8c-1.38-.12-2.9-.67-2.4-2.36Z"
        fill="#af2f1a"
      />
      <path
        d="M31.14,60.05A.11.11,0,0,1,31,60a2.37,2.37,0,0,0-.83-.33H30c-.07,0-.21,0-.16-.12s.14-.05.2-.05a2.68,2.68,0,0,1,.64.11c.1,0,.18.09.27.12a.46.46,0,0,1,.23.16s0,.07,0,.1Z"
        fill="#efa9a3"
      />
      <path
        d="M29.38,59.55a.05.05,0,0,1,.06,0s0,0,0,.06h-.07l-.23,0a.08.08,0,0,1-.08,0,.07.07,0,0,1,0-.07.07.07,0,0,1,.06,0h0A.42.42,0,0,1,29.38,59.55Z"
        fill="#efa9a3"
      />
      <path
        d="M27,62.34l.24.09s.29,0,.25.12,0,0-.05,0a1,1,0,0,1-.6-.17.64.64,0,0,1-.4-.37s0-.06,0-.08.06,0,.09,0a1,1,0,0,1,.08.11.37.37,0,0,0,.13.12A1.35,1.35,0,0,0,27,62.34Z"
        fill="#efa9a3"
      />
      <path
        d="M28.67,60.46a.11.11,0,0,1,.09.1.1.1,0,0,1-.19,0,.11.11,0,0,1,.09-.1"
        fill="#efa9a3"
      />
      <path
        d="M16.42,44.94a1.54,1.54,0,0,1,1,.4,2.24,2.24,0,0,1,.41.51,2.42,2.42,0,0,1,.18.36,3,3,0,0,1,.18.58c.11.54,0,.81-.25,1l.22.12a3.28,3.28,0,0,1,.37.33l.31.31c.1.08.18.18.27.26l.16.17a.42.42,0,0,1,.26.12c.61.55,1.21,1.11,1.8,1.67.39.37.79.72,1.15,1.12a2.1,2.1,0,0,1,.41.47c.32.27.66.51,1,.77a10.61,10.61,0,0,1,1.07,1c.93.8,1.88,1.59,2.85,2.36h0l1.36,1.09c1.61,1.25,3.26,2.49,4.95,3.65l.36.25.17.11c.54.37,1.09.73,1.64,1.08l0,0h0a4.77,4.77,0,0,1,.61.36.85.85,0,0,1,.25.25h0l0,0a.25.25,0,0,1,0,.12c0,.16-.15.28-.35.36l-.13,0a4.06,4.06,0,0,1-.71.14H36l-.42,0c-1,.16-2,.3-3,.42l-.54.07c-1.09.12-2.19.23-3.29.31-1.27.1-2.56.15-3.84.15h-.65A60.71,60.71,0,0,1,17,64.4h0a50.15,50.15,0,0,1-5.69-1.24l-1.84-.53c-.39-.11-.8-.23-1.2-.37a6,6,0,0,1-1.56-.52h0v0h0c-.07,0-.12-.07-.18-.09h0l-.26,0H6.11l-.27,0h0l-.13,0-.55-.09h0l-.23,0h0l-.18,0H4.6l-.18,0h0l-.22-.05h0l-.79-.13H3.29l-.51-.06h0l-.1,0h0l-.08,0h0l-.06,0h0L2.35,61h0l0,0h0l0,0h0a.14.14,0,0,1,0-.06s0-.06-.06-.09h0a.19.19,0,0,0,0-.07,1.27,1.27,0,0,1,0-.34c0-.18,0-.37-.05-.56s0-.4,0-.44h0s0-.1,0-.15a3.76,3.76,0,0,1,.28-.86l.09-.21.27-.62c.24-.57.48-1.14.75-1.7a21,21,0,0,1,8.64-9.07c.65-.36,1.32-.7,2-1,.26-.13.53-.24.8-.35s.43-.18.65-.25L15.9,45a2.31,2.31,0,0,1,.52-.06m0-1h0a3.25,3.25,0,0,0-.74.09l-.41.11-.72.27-.83.36c-.72.33-1.42.68-2.08,1a22.11,22.11,0,0,0-9,9.51c-.26.53-.49,1.07-.71,1.6l-.06.14-.27.61,0,.1-.05.11a5.22,5.22,0,0,0-.33,1,1.68,1.68,0,0,0-.08.93l.05.52v0a2.35,2.35,0,0,0,.08.55.61.61,0,0,0,.05.15,1.63,1.63,0,0,0,.11.23l.08.13,0,.07.05,0,.1.11,0,0,.06.05.11.07,0,0h0a1.85,1.85,0,0,0,.29.13h0l0,0,.11,0,.09,0h0l.1.05H2.7l.36,0h.11l.65.11.16,0,.2,0h.06l.19,0,.07,0,.2,0h.07l.23,0,.47.08h0l.19,0a4.34,4.34,0,0,0,.44,0h0l.22.09a6,6,0,0,0,1.41.47l.21.06c.43.15.86.27,1.23.37.59.18,1.21.37,1.84.54a55.83,55.83,0,0,0,5.8,1.26,61.2,61.2,0,0,0,7.37.69h.68c1.22,0,2.5,0,3.92-.15,1-.08,2.13-.18,3.32-.32l.44,0,.11,0c1-.12,2-.27,3-.42l.2,0h.16l.15,0a4.63,4.63,0,0,0,.91-.17l.2-.08a1.42,1.42,0,0,0,1-1.21,1.27,1.27,0,0,0-.1-.58l-.06-.13,0-.06,0,0a1.64,1.64,0,0,0-.52-.53,3.88,3.88,0,0,0-.58-.35l-.1-.06c-.56-.36-1.1-.72-1.63-1.08l-.08,0-.08-.05-.22-.16-.14-.1c-1.57-1.08-3.22-2.29-4.9-3.61l-1.36-1.08c-.93-.75-1.87-1.53-2.79-2.31l-.24-.26a9.14,9.14,0,0,0-.89-.85L24.18,52l-.47-.36a3.48,3.48,0,0,0-.38-.43l-.07-.07c-.29-.31-.6-.6-.9-.88L22.07,50c-.54-.52-1.18-1.12-1.82-1.7a2,2,0,0,0-.39-.25h0l-.28-.28-.12-.11-.17-.18,0,0a2.51,2.51,0,0,0,0-.89,4.61,4.61,0,0,0-.24-.77,3.58,3.58,0,0,0-.24-.48,2.78,2.78,0,0,0-.61-.74,2.5,2.5,0,0,0-1.71-.66Z"
        fill="#ad6c36"
      />
      <path
        d="M5.22,52.39A2.37,2.37,0,0,0,6.63,53c3,.41,10.29-4.3,5.23-6.61C8.76,45,2,49.07,5.22,52.39Z"
        fill={fillColor}
        stroke={strokeColor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  );

  switch (face) {
    case "default":
      style.top = "-10%";
      if (position === "left") {
        style.left = "-1%";
      } else {
        style.left = "-1%";
      }
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          style={style}
        >
          {ele}
        </svg>
      );
    case "narrow":
      style.top = "-10%";
      if (position === "left") {
        style.left = "1%";
      } else {
        style.left = "-2%";
      }
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          style={style}
        >
          {ele}
        </svg>
      );
    case "rounder":
      style.top = "-10%";
      if (position === "left") {
        style.left = "-5%";
      } else {
        style.left = "8%";
      }
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          style={style}
        >
          {ele}
        </svg>
      );
  }
}