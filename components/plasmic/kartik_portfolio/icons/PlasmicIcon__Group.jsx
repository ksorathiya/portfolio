// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function GroupIcon(props) {
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
          "M11.43 1.585a7.117 7.117 0 00-.757-.541l-.46.743c.231.144.453.302.664.475l.552-.677zm1.27 1.358a7.127 7.127 0 00-.59-.721l-.639.598c.187.199.36.41.517.631l.713-.508z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M13.19 3.736l-.772.41a6.123 6.123 0 11-2.925-2.739L9.85.608a6.998 6.998 0 103.34 3.128z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6.56 4.533a1.75 1.75 0 00-1.31-.592H3.061v6.123H5.25a1.75 1.75 0 001.156-3.062 1.75 1.75 0 00.155-2.469zM5.25 9.189H3.936V7.44H5.25a.875.875 0 110 1.75zm0-2.624H3.936v-1.75H5.25a.875.875 0 110 1.75zm6.56 1.312A2.089 2.089 0 009.84 5.69a2.089 2.089 0 00-1.968 2.187 2.089 2.089 0 001.968 2.187c.5-.004.977-.209 1.324-.568l-.622-.613a.992.992 0 01-.702.307 1.13 1.13 0 01-1.03-.875h2.999v-.438zm-3-.437a1.13 1.13 0 011.031-.875c.5.031.92.387 1.031.875H8.81zm2.125-3.5H8.748v.875h2.187v-.874z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
