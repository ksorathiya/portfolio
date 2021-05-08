// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2mqA18vU3vkpw8fmHw7GP9
// Component: PgYjHEPsSD
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_kartik_portfolio.module.css"; // plasmic-import: 2mqA18vU3vkpw8fmHw7GP9/projectcss
import * as sty from "./PlasmicHeroRight.module.css"; // plasmic-import: PgYjHEPsSD/css

export const PlasmicHeroRight__VariantProps = new Array();

export const PlasmicHeroRight__ArgProps = new Array();

function PlasmicHeroRight__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        data-plasmic-name={"_2D406C1010845191"}
        data-plasmic-override={overrides._2D406C1010845191}
        className={classNames(defaultcss.all, sty._2D406C1010845191)}
      />

      <img
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(defaultcss.img, sty.img)}
        role={"img"}
        src={"/plasmic/kartik_portfolio/images/ellipse165.svg"}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "_2D406C1010845191", "img"],
  _2D406C1010845191: ["_2D406C1010845191"],
  img: ["img"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeroRight__ArgProps,
      internalVariantPropNames: PlasmicHeroRight__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicHeroRight__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeroRight";
  } else {
    func.displayName = `PlasmicHeroRight.${nodeName}`;
  }
  return func;
}

export const PlasmicHeroRight = Object.assign(
  // Top-level PlasmicHeroRight renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    _2D406C1010845191: makeNodeComponent("_2D406C1010845191"),
    img: makeNodeComponent("img"),
    // Metadata about props expected for PlasmicHeroRight
    internalVariantProps: PlasmicHeroRight__VariantProps,
    internalArgProps: PlasmicHeroRight__ArgProps
  }
);

export default PlasmicHeroRight;
/* prettier-ignore-end */
