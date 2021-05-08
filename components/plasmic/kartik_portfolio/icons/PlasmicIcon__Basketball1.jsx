// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Basketball1Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 14 14"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7 0C3.146 0 0 3.146 0 7s3.146 7 7 7 7-3.146 7-7-3.146-7-7-7zm4.748 3.05a6.15 6.15 0 011.43 3.852c-1.095-.257-2.312-.274-3.55-.048a10.72 10.72 0 00-.966.223 19.608 19.608 0 00-.728-1.72c1.476-.564 3.076-1.404 3.814-2.308zM7 .82c1.608 0 3.075.618 4.175 1.628-.429.586-1.652 1.438-3.615 2.173a17.828 17.828 0 00-2.456-3.503A6.153 6.153 0 017 .82zm-2.708.626a17.072 17.072 0 012.487 3.447c-2.042.661-4.11.93-5.81.756a6.203 6.203 0 013.323-4.203zM.82 7c0-.182.009-.361.024-.539.375.04.767.06 1.171.06 1.595 0 3.387-.307 5.146-.89.269.55.51 1.116.723 1.695-.686.247-1.353.56-1.98.933-1.538.916-2.662 2.093-3.129 3.246A6.164 6.164 0 01.82 7zM7 13.18a6.145 6.145 0 01-3.55-1.125c.31-1.053 1.365-2.193 2.873-3.09a10.582 10.582 0 011.829-.858 19.18 19.18 0 01.866 4.734A6.151 6.151 0 017 13.18zm2.818-.681a19.853 19.853 0 00-.887-4.639c1.329-.365 2.805-.488 4.205-.124a6.195 6.195 0 01-3.318 4.763z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Basketball1Icon;
/* prettier-ignore-end */
