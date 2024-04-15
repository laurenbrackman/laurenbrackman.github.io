import React from "react";
import BrightvineOverlay from "./BrightvineOverlay";
import NBBOverlay from "./NBBOverlay";
import GMTROverlay from "./GMTROverlay";

const ProjectOverlay = ({activeProject}) => {
  let OverlayComponent;

  switch (activeProject) {
    case "Brightvine":
      OverlayComponent = BrightvineOverlay;
      break;
    case "NBB":
      OverlayComponent = NBBOverlay;
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