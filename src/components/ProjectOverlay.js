import React from "react";
import NBBOverlay from "./NBBOverlay";
import ElevateOverlay from "./ElevateOverlay";
import GMTROverlay from "./GMTROverlay";

const ProjectOverlay = ({activeProject}) => {
  let OverlayComponent;

  switch (activeProject) {
    case "NBB":
      OverlayComponent = NBBOverlay;
      break;
    case "Elevate":
      OverlayComponent = ElevateOverlay;
      break;
    case "GMTR":
      OverlayComponent = GMTROverlay;
      break;
    default:
      OverlayComponent = null;
  }

  return OverlayComponent ? <OverlayComponent/> : null;
};

export default ProjectOverlay;