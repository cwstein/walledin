import OBR from "@owlbear-rodeo/sdk";
import { getPluginId } from "/getPluginId";
const MyID = "OBWalledIn.onrender";
const SmokeID = "com.battle-system.smoke";

export function setupContextMenu() {
  OBR.contextMenu.create({
    id: getPluginId(MyID, "menu"),
    icons: [
      {
        icon: "/OBWalledIn_cb.png",
        label: "Walled In",
        filter: {
          every: [{ key: "type", value: "CURVE"}],
		  permissions: ["UPDATE"],
		  roles: ["GM"],
        },
      },
    ],
	
    embed: {
      url: "/pop.html",
      height: 60,
    }

  });
}