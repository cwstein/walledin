  import type from "@owlbear-rodeo/sdk";
  import OBR, { buildText, buildImage, buildCurve, buildLine  } from "@owlbear-rodeo/sdk";
  import {getPluginId} from "./getPluginId";
  import { isImage, isText} from "@owlbear-rodeo/sdk";
  const MyID = "OBWalledIn.onrender";
  const SmokeID = "com.battle-system.smoke";

 OBR.onReady(async() => {

	 // Setup the document with the html button elements
	document.getElementById("devapp").innerHTML = `

		  <input
			type="image"
			id="OBDev_Look"
			src="OBDev_Look.png"
			title="Dump to Console"
			alt="Dump to Console" width="35" height="35"
		  />
		   
		   <input
			type="image"
			id="SetVL_Wall"
			src="stonewall.png"
			title="Set Smoke Wall"
			alt="Set Smoke Wall" width="35" height="35"
		  />
		   
		  <input
			type="image"
			id="SetVL_Door"
			src="doorway.png"
			title="Set Smoke Door"
			alt="Set Smoke Door" width="35" height="35"
		  />
		  
		  <input
			type="image"
			id="SetVL_SDoor"
			src="secretdoor.png"
			title="Set Smoke Secret Door"
			alt="Set Smoke Secret Door" width="35" height="35"
		  />
		  
		  
	     <input
			type="image"
			id="SetVL_Obs"
			src="obstruction.png"
			title="Set Smoke Object"
			alt="Set Smoke Object" width="35" height="35"
		  />
  `;
  
	 //Attach Input event Handlers to Text Boxes
	 document.getElementById("OBDev_Look").addEventListener("click", dev_look);
	 document.getElementById("SetVL_Wall").addEventListener("click", SetVL_Wall);
	 document.getElementById("SetVL_Door").addEventListener("click", SetVL_Door);
	 document.getElementById("SetVL_SDoor").addEventListener("click", SetVL_SDoor);
	 document.getElementById("SetVL_Obs").addEventListener("click", SetVL_Obs);

}); //End Function
 
//================================================================
async function dev_look() {
	const myitems= await getSelectedItemsAndCounters();
	console.log(myitems);
};
//================================================================
function isPlainObject(item)
{
  return (
    item !== null && typeof item === "object" && item.constructor === Object
  );
}

//================================================================
async function SetVL_Wall() {

	const myitems= await getSelectedItemsAndCounters();
	
		await OBR.scene.items.updateItems(myitems, (items) => {

			for (let myitems of items) {
				//myitems.type["CURVE"];
				myitems.metadata[getPluginId(SmokeID, "isVisionLine")]= true ;
				myitems.name="Vision Line (Line)";
				myitems.locked=true;
				myitems.visible=false;
				myitems.style["closed"]=false;
				myitems.style["strokeColor"]="#ff4d4d";
				myitems.style["strokeWidth"]=8;
			}//End Update Action

		}); //End Update
};
//================================================================
async function SetVL_Obs() {

	const myitems= await getSelectedItemsAndCounters();
	
		await OBR.scene.items.updateItems(myitems, (items) => {

			for (let myitems of items) {
				//myitems.type["CURVE"];
				myitems.metadata[getPluginId(SmokeID, "isVisionLine")]= true ;
				myitems.name="Vision Line (Polygon)";
				myitems.locked=true;
				myitems.visible=false;
				myitems.style["closed"]=true;
				myitems.style["fillOpacity"]=0.5;
				myitems.style["strokeColor"]="#ff4d4d";
				myitems.style["fillColor"]="#ff4d4d";
				myitems.style["strokeWidth"]=8;
			}//End Update Action

		}); //End Update
};
//================================================================
async function SetVL_Door() {

	const myitems= await getSelectedItemsAndCounters();
	
		await OBR.scene.items.updateItems(myitems, (items) => {

			for (let myitems of items) {
				//myitems.type["CURVE"];
				myitems.metadata[getPluginId(SmokeID, "isVisionLine")]= true ;
				myitems.metadata[getPluginId(SmokeID, "isDoor")]= true ;
				myitems.name="Vision Line (Line)";
				myitems.locked=true;
				myitems.visible=false;
				myitems.style["closed"]=false;
				myitems.style["strokeColor"]="#1a6aff";
				myitems.style["strokeWidth"]=8;
			}//End Update Action

		}); //End Update
};

//================================================================
async function SetVL_SDoor() {

	const myitems= await getSelectedItemsAndCounters();
	
		await OBR.scene.items.updateItems(myitems, (items) => {

			for (let myitems of items) {
				//myitems.type["CURVE"];
				myitems.metadata[getPluginId(SmokeID, "isVisionLine")]= true ;
				myitems.metadata[getPluginId(SmokeID, "isDoor")]= true ;
				myitems.name="Vision Line (Line)";
				myitems.locked=true;
				myitems.visible=false;
				myitems.style["closed"]=false;
				myitems.style["strokeColor"]="#884dff";
				myitems.style["strokeWidth"]=8;
			}//End Update Action

		}); //End Update
};  
//================================================================
async function getRole() {
	const therole= await OBR.player.getRole();
		return therole
};

//================================================================
async function getSelectedItemsAndCounters() {
	
	let result = [];

	const selection = await OBR.player.getSelection();
	
	const  myitems = await OBR.scene.items.getItems(selection);

	if (!myitems) return result;
		
	// get counters for all items
    const tokenCounters = await OBR.scene.items.getItems((item) => {
		const metadata = item.metadata[getPluginId(MyID, "metadata")];  
		return Boolean(isPlainObject(metadata) && metadata.enabled);
    });
			
	return myitems;
};

//================================================================

