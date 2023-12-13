import "./style.css";
import "./app.css";
import OBR from "@owlbear-rodeo/sdk";
import { setupContextMenu } from "./contextMenu";
import { createTool, createLine, createWall, createAction, createDoor,createSecretDoor, createObstruction, createPresets} from "./WallTool";
//import { createTool, createMode } from "./WallTool";


OBR.onReady(() => {
  setupContextMenu();
  createTool();
  createLine();
  createWall();
  createDoor();
  createSecretDoor();
  createObstruction();
  createAction();
  createPresets();

});

