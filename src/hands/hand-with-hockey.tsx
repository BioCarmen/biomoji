import React from "react";

export default function handWithHockey(props: {
  fillColor: string;
  strokeColor: string;
  face: "default" | "narrow" | "rounder";
  position: "left" | "right";
  style;
}) {
  const { fillColor, strokeColor, face, position, style } = props;
  const ele = (
    <g id="Isolation_Mode" data-name="Isolation Mode">
      <path
        d="M70.37,60.4a1.4,1.4,0,0,0-1.83-.17L35.28,85.07a2.55,2.55,0,0,1-.6.35h0A7.57,7.57,0,0,1,33,86a5.63,5.63,0,0,1-3.24-.31c-2.17-.81-3.78-2.56-5.23-4.18l-5.2-5.81c-1-1.07-2.09-2.24-3.73-2.07a2.9,2.9,0,0,0-2.35,1.65c-.78,1.68,0,3.49,1.06,5a31.65,31.65,0,0,0,6.28,6.55,26.34,26.34,0,0,0,4.22,2.7,17.29,17.29,0,0,0,2.12.9,10,10,0,0,0,2.29.5,8.06,8.06,0,0,0,1.9.11,1.33,1.33,0,0,0,.79-.25h0a4.55,4.55,0,0,0,.78-.51q.65-.48,1.26-1L70.23,62A1.07,1.07,0,0,0,70.37,60.4Z"
        fill="#d8be93"
      />
      <path
        d="M70.56,60.69a1.12,1.12,0,0,1-.36.46L33.89,88.27c-.41.35-.83.7-1.26,1a5.19,5.19,0,0,1-.78.5h0a1.41,1.41,0,0,1-.79.26,8,8,0,0,1-1.9-.11,10.52,10.52,0,0,1-2.29-.5,18.18,18.18,0,0,1-2.13-.91,27.2,27.2,0,0,1-4.22-2.69,32.43,32.43,0,0,1-6.28-6.55,6.81,6.81,0,0,1-1.32-2.9,5.82,5.82,0,0,0,1.36,3.79,31.65,31.65,0,0,0,6.28,6.55,26.34,26.34,0,0,0,4.22,2.7,17.29,17.29,0,0,0,2.12.9,10,10,0,0,0,2.29.5,8.06,8.06,0,0,0,1.9.11,1.33,1.33,0,0,0,.79-.25h0a4.55,4.55,0,0,0,.78-.51q.65-.48,1.26-1L70.23,62A1,1,0,0,0,70.56,60.69Z"
        fill="#ceae80"
      />
      <path
        d="M70.37,60.4a1.4,1.4,0,0,0-1.83-.17L35.28,85.07a2.55,2.55,0,0,1-.6.35h0A7.57,7.57,0,0,1,33,86a5.63,5.63,0,0,1-3.24-.31c-2.17-.81-3.78-2.56-5.23-4.18l-5.2-5.81c-1-1.07-2.09-2.24-3.73-2.07a2.9,2.9,0,0,0-2.35,1.65c-.78,1.68,0,3.49,1.06,5a31.65,31.65,0,0,0,6.28,6.55,26.34,26.34,0,0,0,4.22,2.7,17.29,17.29,0,0,0,2.12.9,10,10,0,0,0,2.29.5,8.06,8.06,0,0,0,1.9.11,1.33,1.33,0,0,0,.79-.25h0a4.55,4.55,0,0,0,.78-.51q.65-.48,1.26-1L70.23,62A1.07,1.07,0,0,0,70.37,60.4Z"
        fill="none"
        stroke="#ad8c5e"
        stroke-miterlimit="10"
        stroke-width="0.25"
      />
      <path
        d="M56,69.26l-2.66,2a5.61,5.61,0,0,0,2.46,1.85l1.6-1.19A3.86,3.86,0,0,1,56,69.26Z"
        fill="#f2ede7"
        stroke="#999898"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.25"
      />
      <path
        d="M57.43,71.92l3.32-2.49a3.61,3.61,0,0,1-2.38-1.91L56,69.26A3.86,3.86,0,0,0,57.43,71.92Z"
        fill="#f2ede7"
        stroke="#999898"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.25"
      />
      <path
        d="M60.05,66.27l-1.68,1.25a3.61,3.61,0,0,0,2.38,1.91l2-1.48A10.57,10.57,0,0,1,60.05,66.27Z"
        fill="#f2ede7"
        stroke="#999898"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.25"
      />
      <path
        d="M64.72,66.47a4.54,4.54,0,0,1-2.07-2.15l-2.6,2A10.57,10.57,0,0,0,62.74,68Z"
        fill="#f2ede7"
        stroke="#999898"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.25"
      />
      <path
        d="M65.11,62.48l-2.46,1.84a4.54,4.54,0,0,0,2.07,2.15l1.51-1.13A3.81,3.81,0,0,1,65.11,62.48Z"
        fill="#f2ede7"
        stroke="#999898"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.25"
      />
      <path
        d="M70.57,60.25a1.68,1.68,0,0,0-1-.5,1.63,1.63,0,0,0-1.2.3l-3.27,2.43a3.81,3.81,0,0,0,1.12,2.86l4.17-3.12A1.3,1.3,0,0,0,70.57,60.25Z"
        fill="#f2ede7"
        stroke="#999898"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.25"
      />
      <path
        d="M21.43,77.69l-1.31-1.46a15.76,15.76,0,0,0-5,5.53c.5.62,1,1.21,1.52,1.77A10.14,10.14,0,0,1,21.43,77.69Z"
        fill="#f2ede7"
        stroke="#999898"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.25"
      />
      <path
        d="M20.43,81.59a13,13,0,0,1,3-1.68l-2-2.22a10.14,10.14,0,0,0-4.74,5.84c.32.34.64.68,1,1a11.67,11.67,0,0,1,2.79-3Z"
        fill="#f2ede7"
        stroke="#999898"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.25"
      />
      <path
        d="M23.42,79.91a12.82,12.82,0,0,0-3,1.66C20,83,19.34,84.35,19,85.77c.38.34.77.65,1.16,1a16.55,16.55,0,0,1,1.58-1.44,14.83,14.83,0,0,1,2.75-4.21Z"
        fill="#f2ede7"
        stroke="#999898"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.25"
      />
      <path
        d="M20.14,86.73l.24.19.78.58a8,8,0,0,1,.56-2.21A16.55,16.55,0,0,0,20.14,86.73Z"
        fill="#f2ede7"
        stroke="#999898"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.25"
      />
      <path
        d="M20.45,81.57a11.67,11.67,0,0,0-2.79,3c.43.44.87.85,1.32,1.24C19.34,84.35,20,83,20.45,81.57Z"
        fill="#f2ede7"
        stroke="#999898"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.25"
      />
      <path
        d="M24.69,81.33l-.22-.25a14.83,14.83,0,0,0-2.75,4.21,10.41,10.41,0,0,1,4.6-2.23C25.72,82.48,25.18,81.88,24.69,81.33Z"
        fill="#f2ede7"
        stroke="#999898"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.25"
      />
      <path
        d="M27.32,84a12.2,12.2,0,0,1-1-.89,10.41,10.41,0,0,0-4.6,2.23,8,8,0,0,0-.56,2.21c.7.5,1.38,1,2.05,1.35A7.11,7.11,0,0,1,27.32,84Z"
        fill="#f2ede7"
        stroke="#999898"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.25"
      />
      <path
        d="M28.59,84.85a10.39,10.39,0,0,1-1.27-.9,7.11,7.11,0,0,0-4.11,4.9c.48.29,1,.55,1.44.79a18.9,18.9,0,0,0,2.16.92l.06,0A11.81,11.81,0,0,1,28.59,84.85Z"
        fill="#f2ede7"
        stroke="#999898"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.25"
      />
      <path
        d="M28.42,84.74,28,85.1c-.3.28-.59.57-.86.87a5.71,5.71,0,0,0-.39.47,2307941759072.22,2307941759072.22,0,0,0-.1.16l-.12.22a.78.78,0,0,0-.05.14l0,.05,0,.06a.68.68,0,0,0,0,.14.34.34,0,0,0,0,.1v0s0,.07,0,.11.05.17,0,0c.18.51-.29,1-.86.76-.37-.12-.81-.1-1.2-.19a.62.62,0,0,1-.53-.83,5.18,5.18,0,0,1,1.4-1.93,6.54,6.54,0,0,1,2-1.38l-.14-.12-.21.15a.72.72,0,0,1-.32.27l-.17.08,0,0-.27.14a4.85,4.85,0,0,0-.49.29c-.33.2-.65.43-1,.66a19,19,0,0,1-2,1.3.76.76,0,0,1-.73,0,.62.62,0,0,1-.33-.59,1.55,1.55,0,0,1,.56-1.07,7.67,7.67,0,0,1,2.36-1.36c.57-.24,1.15-.45,1.71-.69l-.4-.41-.14.09c-.17.11-.36.21-.54.31l-.15.07-.15.08-.3.15c-.19.1-.36.2-.53.31a.69.69,0,0,1-.72,0c-1.05-.57.68-2.12,1.16-2.52a.47.47,0,0,1-.2-.22,22.25,22.25,0,0,1-3.19,3.54,1.35,1.35,0,0,1-1,.41c-.4,0-.74-.51-.53-.85a3.36,3.36,0,0,0,.3-.7l.08-.26.12-.41A2.34,2.34,0,0,1,20.3,82a2.13,2.13,0,0,1,.49-.55,6.6,6.6,0,0,1,1.08-.73,4.93,4.93,0,0,1,1.18-.5l.14,0,.2-.13.12-.06-.09-.1-.36-.4a4.1,4.1,0,0,1-.5.35c-.65.4-1.33.73-1.94,1.17l-.09.06a.75.75,0,0,1-.09.09l-.25.27-.57.65a2.91,2.91,0,0,1-1.29,1,.74.74,0,0,1-.91-.35,1.66,1.66,0,0,1,.29-1.51,8.3,8.3,0,0,1,1-1.27c.12-.13.25-.25.38-.37a.48.48,0,0,1,.15-.3,10,10,0,0,1,2.2-1.54l0,0L21,77.15a8.23,8.23,0,0,0-2.14,1.79,15.26,15.26,0,0,0-1.71,2.33A.74.74,0,0,1,16,81.5a1.85,1.85,0,0,1-.45-.43c-.14.23-.28.46-.4.69.5.62,1,1.21,1.52,1.77.32.34.64.68,1,1s.87.85,1.32,1.24.77.65,1.16,1l.24.19.78.58c.7.5,1.38,1,2.05,1.35.48.29,1,.55,1.44.79a18.9,18.9,0,0,0,2.16.92l.06,0a11.81,11.81,0,0,1,1.72-5.73Z"
        fill="#999898"
        opacity="0.5"
      />
      <path
        d="M68.72,63.16l-1.89-1.91a1.34,1.34,0,0,1,.11-2l.92-.74a1.76,1.76,0,0,1,2.27.16L72,60.55a1.35,1.35,0,0,1-.11,2l-.92.73A1.75,1.75,0,0,1,68.72,63.16Z"
        fill="#f2ede7"
        stroke="#999898"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="0.25"
      />
      <path
        d="M72,60.55l-.42-.43,0,.08a1.3,1.3,0,0,1,0,1,1.23,1.23,0,0,1-1.43.7,3.91,3.91,0,0,1-1.4-.61l-1-.65a2.36,2.36,0,0,1-1.07-1.25,1.33,1.33,0,0,0,0,1.86l-.14.1a.62.62,0,0,1,.2.15l.07.07a4.08,4.08,0,0,1,.88.93.2.2,0,0,1,0,.08l0,.09v0a.5.5,0,0,1,0,.12.79.79,0,0,1,0,.5,1.18,1.18,0,0,1-.73.59.92.92,0,0,1-.29,0,2.47,2.47,0,0,1-.72.26.74.74,0,0,1-.46-.1.6.6,0,0,1-.29-.3,4.37,4.37,0,0,1-.31-1,2.81,2.81,0,0,1,0-.29l-.41.31a1.4,1.4,0,0,1,.16.43c0,.14,0,.27.08.41a2.39,2.39,0,0,1,.08.59.75.75,0,0,1-.18.42.91.91,0,0,1-.39.27,1,1,0,0,1-.27.1l-.2,0-.2,0a.78.78,0,0,1-.37,0,1.2,1.2,0,0,1-.21-.13,1.56,1.56,0,0,1-.2-.16c.09.2.23.39.3.6a1.09,1.09,0,0,1,.06.59,1,1,0,0,1-.3.56,1.78,1.78,0,0,1-1.06.52,2.74,2.74,0,0,1-1.1-.11,2.09,2.09,0,0,1-.76-.42,1.07,1.07,0,0,1-.18-.19l-.11.09.09.09a5.73,5.73,0,0,1,.56.54.57.57,0,0,1,.13.45.56.56,0,0,1-.25.4,2.93,2.93,0,0,0-.45.3,2.18,2.18,0,0,0-.21.22.72.72,0,0,1-.56.21,1.34,1.34,0,0,1-.24.82,4.05,4.05,0,0,1-1.69,1.29.69.69,0,0,1-.61-.06h0a1.14,1.14,0,0,1-.31.75,3,3,0,0,1-1,.59l-.44.16-.17.07-.09,0h0l-.12,0a6.5,6.5,0,0,0,1.37.76l1.6-1.19,3.32-2.49,2-1.48,2-1.48,1.51-1.13,2.69-2a1.74,1.74,0,0,0,2.06,0l.92-.73A1.35,1.35,0,0,0,72,60.55Z"
        fill="#999898"
        opacity="0.5"
      />
      <path
        d="M68.89,58.14a1.76,1.76,0,0,1,1.24.5L72,60.55a1.46,1.46,0,0,1,.32.5,1.09,1.09,0,0,1,.07.24s0,0,0,.06a1.35,1.35,0,0,1-.51,1.24l-.92.73h0a1.64,1.64,0,0,1-.22.14h0l-.23.1h0l-.24.06h0l-.25,0h0a1.79,1.79,0,0,1-.79-.18h0a1.09,1.09,0,0,1-.23-.14l-2.69,2-1.51,1.13-2,1.48-2,1.48-3.32,2.49-1.6,1.19L55.57,73,33.92,89.16q-.62.54-1.26,1a4.55,4.55,0,0,1-.78.51h0a1.33,1.33,0,0,1-.79.25,3.25,3.25,0,0,1-.44,0,8.26,8.26,0,0,1-1-.08l-.47-.06a10.63,10.63,0,0,1-1.13-.18l-.1,0a8.56,8.56,0,0,1-.83-.23l-.23-.07h0v.25l-.06,0a18.9,18.9,0,0,1-2.16-.92c-.48-.24-1-.5-1.44-.79-.67-.4-1.35-.85-2.05-1.35l-.78-.58-.24-.19c-.39-.31-.78-.62-1.16-1s-.89-.8-1.32-1.24-.65-.66-1-1c-.51-.56-1-1.15-1.52-1.77l.13-.23c-.36-.44-.7-.89-1-1.34a2.27,2.27,0,0,1-.18-.25L14,79.86l-.11-.17-.07-.11-.1-.16-.06-.11-.14-.24-.07-.15-.06-.11s-.05-.11-.07-.17a.3.3,0,0,1,0-.08,5.1,5.1,0,0,1-.3-.91v0a4.08,4.08,0,0,1-.1-1h0a2.09,2.09,0,0,1,0-.25h0a3.49,3.49,0,0,1,.3-1.16,2.9,2.9,0,0,1,2.35-1.65,1.51,1.51,0,0,1,.3,0c1.48,0,2.53,1.09,3.43,2.09l.63.71.2-.14.83.92.48.54,0,0,1.59,1.78.36.4.09.1,1,1.07.22.25c.36.4.75.83,1.16,1.26l.4.41h0l.07.06c.25.25.52.49.79.72l.13.11.08.06a9.57,9.57,0,0,0,1.1.79l.17.11a2.12,2.12,0,0,1-.11.21,8.27,8.27,0,0,0,1.24.59,5.91,5.91,0,0,0,2.15.42A5.1,5.1,0,0,0,33,86a7.57,7.57,0,0,0,1.71-.54h0a2.55,2.55,0,0,0,.6-.35L53.52,71.45l-.15-.19,2.66-2,2.34-1.74,1.46-1.09.11-.09.11-.07,2.6-2,2-1.51h0l.41-.31,0,0,1.7-1.26a1.32,1.32,0,0,1-.36-.69h0a1.94,1.94,0,0,1,0-.24h0a1.32,1.32,0,0,1,.52-1.05l.92-.74a1.68,1.68,0,0,1,1-.34m-56,18.26h0m0,0h0m56-19.26a2.69,2.69,0,0,0-1.65.56l-.92.73a2.34,2.34,0,0,0-.9,1.85,3,3,0,0,0,0,.43l.06.22-1,.75-.43.32-2,1.52-2.6,1.94-.1.08-.12.09-1.45,1.08-2.35,1.75-2.66,2a1.05,1.05,0,0,0-.38.6L34.69,84.27a1.69,1.69,0,0,1-.41.23,7.74,7.74,0,0,1-1.51.48,4.66,4.66,0,0,1-.9.09,5.12,5.12,0,0,1-1.8-.35l-.55-.24a1,1,0,0,0-.42-.5l-.09,0-.06,0a9.59,9.59,0,0,1-1-.71l-.07-.06-.12-.1c-.28-.24-.53-.46-.75-.68L27,82.28l-.38-.38c-.4-.42-.78-.84-1.13-1.24l-.23-.25-.95-1.06-.09-.1-.37-.41-1.58-1.77,0,0-.48-.54-.83-.92a1,1,0,0,0-.62-.33L20,75c-.81-.9-2.17-2.42-4.18-2.42l-.4,0a3.92,3.92,0,0,0-3.15,2.23,4.5,4.5,0,0,0-.4,1.5c0,.1,0,.21,0,.31A4.65,4.65,0,0,0,12,77.85a7.07,7.07,0,0,0,.36,1.1l0,.1.09.19.06.13.09.17.15.27,0,.09.13.21.08.12.12.19.06.09.2.28c.22.29.45.6.71.92a1,1,0,0,0,.22.68c.5.62,1,1.21,1.56,1.81.33.36.67.71,1,1s.9.87,1.37,1.28.77.65,1.21,1l.09.07.16.13.8.59c.71.51,1.42,1,2.11,1.39.52.31,1,.59,1.51.83a19.23,19.23,0,0,0,2.28,1l.07,0a1,1,0,0,0,.3,0,1.1,1.1,0,0,0,.4-.08l.48.13.11,0a10.66,10.66,0,0,0,1.24.2l.44,0a9.41,9.41,0,0,0,1.12.09,4.41,4.41,0,0,0,.52,0,2.36,2.36,0,0,0,1.25-.41,6,6,0,0,0,.85-.56c.46-.34.89-.69,1.29-1l21.2-15.83h.08a1,1,0,0,0,.59-.2L58,72.72l3.33-2.49,2-1.48,2-1.48,1.51-1.13L69,64.5a2.79,2.79,0,0,0,1.34.13h0a2.49,2.49,0,0,0,.37-.09h0l.37-.16.06,0a2.54,2.54,0,0,0,.34-.23l.92-.73a2.3,2.3,0,0,0,.88-2.16l0-.1a1.85,1.85,0,0,0-.11-.42,2.55,2.55,0,0,0-.55-.84l-1.88-1.91a2.74,2.74,0,0,0-2-.8Zm-56,20.26Zm0,0Z"
        fill="#705026"
      />
      <path
        d="M27.55,90.27,27,94.39c-.31,2.15-4.85,3.29-10.15,2.55s-9.35-3.09-9-5.24l.58-4.13Z"
        fill="#424242"
        stroke="#262626"
        stroke-miterlimit="10"
        stroke-width="0.25"
      />
      <ellipse
        cx="17.95"
        cy="88.92"
        rx="3.93"
        ry="9.69"
        transform="translate(-72.6 94.32) rotate(-82)"
        fill="#606060"
        stroke="#262626"
        stroke-miterlimit="10"
        stroke-width="0.25"
      />
      <path
        d="M25.94,91.39c-4.42,2.11-9.89,1.28-14.22-.69-1.31-.74-3.2-1.77-3.05-3.51.07,1.68,1.9,2.5,3.21,3.17,4.36,1.77,9.53,2.59,14.06,1Z"
        fill="#a0a0a0"
      />
      <path
        d="M15.33,84.8A23.59,23.59,0,0,1,18.5,85c5.3.75,9.35,3.1,9,5.25h0L27,94.39c-.24,1.71-3.15,2.78-7,2.78a23.66,23.66,0,0,1-3.17-.23c-5.3-.74-9.35-3.09-9-5.24l.58-4.13h0c.24-1.7,3.15-2.77,7-2.77m0-1c-4.6,0-7.65,1.39-8,3.63l-.58,4.13c-.2,1.47.83,2.94,2.92,4.15a19.91,19.91,0,0,0,7,2.22,23.56,23.56,0,0,0,3.31.24c4.6,0,7.65-1.4,8-3.64l.58-4.12v-.07c.37-3.14-4.81-5.59-9.9-6.31a25.25,25.25,0,0,0-3.31-.23Z"
        fill="#262626"
      />
      <path
        d="M35.51,73.64c3,1.8,6.75,4.37,10.31,4.8a5.93,5.93,0,0,0,3.67-.57,3.19,3.19,0,0,0,1.65-3.13c-.3-1.82-2.1-2.69-3.61-3.26a14.51,14.51,0,0,1-4.33-2.33"
        fill={fillColor}
        stroke={strokeColor}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M67.6,57.77a15.42,15.42,0,0,0,6.51,4.74A2.62,2.62,0,0,0,76.76,62c4.31-4.4-3.62-10.2-8-8.41C66.4,54.58,66.48,56.18,67.6,57.77Z"
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