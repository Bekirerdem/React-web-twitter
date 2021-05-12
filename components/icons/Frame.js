import * as React from "react";

function SvgFrame(props) {
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
        d="M8.8 7.2002H5.6V3.9002C5.6 3.5002 5.3 3.1002 4.8 3.1002C4.3 3.1002 4.1 3.5002 4.1 3.9002V7.2002H0.8C0.4 7.2002 0 7.5002 0 8.0002C0 8.5002 0.3 8.8002 0.8 8.8002H4.1V12.1002C4.1 12.5002 4.4 12.9002 4.9 12.9002C5.4 12.9002 5.7 12.6002 5.7 12.1002V8.7002H9C9.4 8.7002 9.8 8.4002 9.8 7.9002C9.8 7.4002 9.3 7.2002 8.8 7.2002ZM23.8 2.3002V2.2002H23.7C23.6 2.2002 14.5 3.4002 9.3 13.9002C5.5 21.5002 5.7 23.8002 6 23.8002C6.3 23.9002 9.4 17.3002 12.7 14.6002C17.9 13.5002 19.3 11.0002 19.3 11.0002C19.3 11.0002 17.8 11.2002 17.2 11.2002C16.4 11.2002 15.8 11.0002 15.5 10.9002C16.8 9.7002 17.9 9.4002 19 9.2002C19.9 9.0002 20.8 8.8002 22 8.0002C24.2 6.4002 23.9 2.5002 23.8 2.3002Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgFrame;
