import React from "react";
import BrightvineOverlay from "./BrightvineOverlay";
import NBBOverlay from "./NBBOverlay";
import GMTROverlay from "./GMTROverlay";

const ProjectOverlay = ({activeProject}) => {
  let OverlayComponent;

  // Determine which overlay component to render based on the active project
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

  // Render the selected overlay component
  return OverlayComponent ? <OverlayComponent/> : null;
};

export default ProjectOverlay;