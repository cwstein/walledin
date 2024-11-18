import OBR, { buildLine, buildCurve } from "@owlbear-rodeo/sdk";
import { getPluginId } from "/getPluginId";
const MyID = "OBWalledIn.onrender";
const SmokeID = "com.battle-system.smoke";

export function createTool() {
  
  let interaction = null;
	
  OBR.tool.create({
    id: `${MyID}/tool`,
    icons: [
      {
        icon: "/brickwall_cb.png",
        label: "Walled In",
		filter: {
          roles:  ["GM"],
        },
      },	
    ],

    defaultMetadata: {
      //strokeColor: "red",
	  strokeColor_L: "red",
	  strokeWidth_L: 8,
	  strokeColor_W: "red", 
	  strokeWidth_W: 8,
	  strokeColor_D: "green",
	  strokeWidth_D: 8,
	  strokeColor_SD: "purple",
      strokeWidth_SD: 8,
    },

  });
}
/* ================================== */
export function createLine() {
  let interaction_c= null;
  let currentPos = null;
  let justclicked=false;

  OBR.tool.createMode({
    id: `${MyID}/modeline`,
    icons: [
      {
        icon: "/line.svg",
        label: "Line",
        filter: {
          activeTools: [`${MyID}/tool`],
        },
      },
    ],

//---------------
async onToolClick(context, event){
	justclicked=true;
 
	if (!interaction_c)
	{
		let currentPos =  await OBR.scene.grid.snapPosition(event.pointerPosition);

		 // Get Tool Metadata if it exists
		  const metadata_tool =  await OBR.tool.getMetadata(`${MyID}/tool`);
			
		  //Assign a Default value and override if a value was saved to metadata
		  let strokeColor_L = "red"; 
		  if (typeof metadata_tool.strokeColor_L === "string") {
			strokeColor_L = metadata_tool.strokeColor_L;
		  }
		  
		  let strokeWidth_L = 8;
		  if (typeof metadata_tool.strokeWidth_L ==="number") {
			strokeWidth_L = metadata_tool.strokeWidth_L;
			}
  
  
		// Build a line with the position of our pointer
		const curve = buildCurve()
			.points
				([
				currentPos,
				])
			.tension(0)
			.metadata({
				["com.battle-system.smoke/isVisionLine"]: false ,
				["com.battle-system.smoke/isdoubleSided"]: true ,
				["com.battle-system.smoke/blocking"]: true ,
			})
			.name("Vision Line (Line)")
			.locked(true)
			.strokeWidth(strokeWidth_L)
			.fillOpacity(0)
			.closed(false)
			.visible(true)
			.strokeColor(strokeColor_L)
			.build();

		// Start an interaction with the new line
		interaction_c = await OBR.interaction.startItemInteraction(curve);

		}
		else
		{
			const [update] = interaction_c;
 			let currentPos =  await OBR.scene.grid.snapPosition(event.pointerPosition);

			update((curve) => {
				curve.points.pop();
				curve.points.push(currentPos);
            });
			
		}
},
//---------------
  async onToolMove(_, event) {
      // Update the end position of the interaction when the tool drags
      if (interaction_c) {
        const [update] = interaction_c;
			update((curve) => {
				if (justclicked==false)
				{
					curve.points.pop();
				};
				curve.points.push(event.pointerPosition);
				justclicked=false;
			});
			}
		},//End onToolMove

//---------------
   async onToolDoubleClick(_, event) {
      if (interaction_c) {
        const [update, stop] = interaction_c;
        // Perform a final update when the drag ends
        // This gets us the final line item
 			let currentPos =  await OBR.scene.grid.snapPosition(event.pointerPosition);

			const curve = update((curve) => {
				curve.points.push(currentPos);
            });
        // Add the line to the scene
        OBR.scene.items.addItems([curve]);
        // Make sure we stop the interaction so others
        // can interact with our new line
        stop();
		
      }
	  
      interaction_c = null;

		},//End onToolDoubleClick

//---------------
   async onKeyDown(_,KE) {
      // Stop the interaction early if we cancel the by pressing Esc
      // Complete if Enter is Pressed
		const [update, stop] = interaction_c;
		
		if (interaction_c&&KE.key=="Escape") {
			stop();
	
		}
	  	  
	   if (interaction_c&&KE.key=="Enter") {
		
		//complete the line
		const curve = update((curve) => {

            });
        // Add the line to the scene
        OBR.scene.items.addItems([curve]);
        // Make sure we stop the interaction so others
        // can interact with our new line
        stop();	
      }
	  
      interaction_c = null;
    },

  });
}// End createLine
/* ================================== */

export function createWall() {
  let interaction_c= null;
  let currentPos = null;
  let justclicked=false;

  OBR.tool.createMode({
    id: `${MyID}/modewall`,
    icons: [
      {
        icon: "/brickwall_cb.png",
        label: "Wall",
        filter: {
          activeTools: [`${MyID}/tool`],
        },
      },
    ],


//---------------
async onToolClick(context, event){


	justclicked=true;
 
	if (!interaction_c)
	{
		
		
		// Get Tool Metadata if it exists
		  const metadata_tool =  await OBR.tool.getMetadata(`${MyID}/tool`);
			let currentPos =  await OBR.scene.grid.snapPosition(event.pointerPosition);
					
		   let strokeColor_W = "red"; 
		  if (typeof metadata_tool.strokeColor_W === "string") {
			strokeColor_W = metadata_tool.strokeColor_W;
		  }
		  
			let strokeWidth_W = 8;
			if (typeof metadata_tool.strokeWidth_W === "number") {
			strokeWidth_W = metadata_tool.strokeWidth_W;
			}
  
		// Build a line with the position of our pointer
		const curve = buildCurve()
			.points
				([
				currentPos,
				])
			.tension(0)
			.metadata({
				["com.battle-system.smoke/isVisionLine"]: true ,
				["com.battle-system.smoke/isdoubleSided"]: true ,
				["com.battle-system.smoke/blocking"]: true ,
			})
			.name("Vision Line (Line)")
			.locked(true)
			.strokeWidth(strokeWidth_W)
			.fillOpacity(0)
			.closed(false)
			.visible(false)
			.strokeColor(strokeColor_W)
			.build();

		// Start an interaction with the new line
		interaction_c = await OBR.interaction.startItemInteraction(curve);

		}
		else
		{
			const [update] = interaction_c;
 			let currentPos =  await OBR.scene.grid.snapPosition(event.pointerPosition);

			update((curve) => {
				curve.points.pop();
				curve.points.push(currentPos);
            });
			
		}
},
//---------------
    async onToolMove(_, event) {
      // Update the end position of the interaction when the tool drags
      if (interaction_c) {
        const [update] = interaction_c;

			update((curve) => {
				if (justclicked==false)
				{
					curve.points.pop();
				};
				curve.points.push(event.pointerPosition);
				justclicked=false;
			});
	  };
			
	},//End onToolMove

//---------------
    async onToolDoubleClick(_, event) {
      if (interaction_c) {
        const [update, stop] = interaction_c;
        // Perform a final update when the drag ends
        // This gets us the final line item
 			let currentPos =  await OBR.scene.grid.snapPosition(event.pointerPosition);

			const curve = update((curve) => {
				curve.points.push(currentPos);
            });
        // Add the line to the scene
        OBR.scene.items.addItems([curve]);
        // Make sure we stop the interaction so others
        // can interact with our new line
        stop();
		
      }
	  
      interaction_c = null;

		},//End onToolDoubleClick

//---------------
    async onKeyDown(_,KE) {
      // Stop the interaction early if we cancel the by pressing Esc
      // Complete if Enter is Pressed
		const [update, stop] = interaction_c;

		
		if (interaction_c&&KE.key=="Escape") {
			stop();
		}
	  	  
	   if (interaction_c&&KE.key=="Enter") {

        // Perform a final update when the drag ends
        // This gets us the final line item

		const curve = update((curve) => {

            });
        // Add the line to the scene
        OBR.scene.items.addItems([curve]);
        // Make sure we stop the interaction so others
        // can interact with our new line
        stop();

      }
	  
      interaction_c = null;

    },//end keydown



  });
}// End createLine
/* ================================== */


export function createDoor() {
  let interaction_c= null;
  let currentPos = null;
    let justclicked=false;
  
  OBR.tool.createMode({
    id: `${MyID}/modedoor`,
    icons: [
      {
        icon: "/doorway_cb.png",
        label: "Door",
        filter: {
          activeTools: [`${MyID}/tool`],
        },
      },
    ],
	
	
	
	async onToolClick(context, event){

	justclicked=true;
 
	if (!interaction_c)
	{
		let currentPos =  await OBR.scene.grid.snapPosition(event.pointerPosition);

			// Get Tool Metadata if it exists
			const metadata_tool =  await OBR.tool.getMetadata(`${MyID}/tool`);
					
		   let strokeColor_D = "green"; 
		  if (typeof metadata_tool.strokeColor_D === "string") {
			strokeColor_D = metadata_tool.strokeColor_D;
		  }
		  
			let strokeWidth_D = 8;
			if (typeof metadata_tool.strokeWidth_D === "number") {
			strokeWidth_D = metadata_tool.strokeWidth_D;
			}
		// Build a line with the position of our pointer
		const curve = buildCurve()
			.points
				([
				currentPos,
				])
			.tension(0)
			.metadata({
				["com.battle-system.smoke/isVisionLine"]: true ,
				["com.battle-system.smoke/isDoor"]: true ,
				["com.battle-system.smoke/isdoubleSided"]: true ,
				["com.battle-system.smoke/blocking"]: true ,
			})
			.name("Vision Line (Line)")
			.locked(true)
			.strokeWidth(strokeWidth_D)
			.fillOpacity(0)
			.closed(false)
			.visible(false)
			.strokeColor(strokeColor_D)
			.build();

		// Start an interaction with the new line
		interaction_c = await OBR.interaction.startItemInteraction(curve);
	 	 
		}
		else
		{
			const [update] = interaction_c;
 			let currentPos =  await OBR.scene.grid.snapPosition(event.pointerPosition);

			update((curve) => {
				curve.points.pop();
				curve.points.push(currentPos);
            });
			
		}
},
//---------------
    async onToolMove(_, event) {
      // Update the end position of the interaction when the tool drags
      if (interaction_c) {
        const [update] = interaction_c;

			update((curve) => {
				if (justclicked==false)
				{
					curve.points.pop();
				};
				curve.points.push(event.pointerPosition);
				justclicked=false;
			});
	  };
			
	},//End onToolMove

//---------------
    async onToolDoubleClick(_, event) {
      if (interaction_c) {
        const [update, stop] = interaction_c;
        // Perform a final update when the drag ends
        // This gets us the final line item
 			let currentPos =  await OBR.scene.grid.snapPosition(event.pointerPosition);

			const curve = update((curve) => {
				curve.points.push(currentPos);
            });
        // Add the line to the scene
        OBR.scene.items.addItems([curve]);
        // Make sure we stop the interaction so others
        // can interact with our new line
        stop();
		
      }
	  
      interaction_c = null;

		},//End onToolDoubleClick

//---------------
    async onKeyDown(_,KE) {
      // Stop the interaction early if we cancel the by pressing Esc
      // Complete if Enter is Pressed
		const [update, stop] = interaction_c;

		
		if (interaction_c&&KE.key=="Escape") {
			stop();
		}
	  	  
	   if (interaction_c&&KE.key=="Enter") {

        // Perform a final update when the drag ends
        // This gets us the final line item

		const curve = update((curve) => {

            });
        // Add the line to the scene
        OBR.scene.items.addItems([curve]);
        // Make sure we stop the interaction so others
        // can interact with our new line
        stop();

      }
	  
      interaction_c = null;

    },//end keydown
	
  });//End Curve
}//End Function


/* ================================== */


export function createSecretDoor() {
  let interaction_c= null;
  let currentPos = null;
  let justclicked=false;
  
  OBR.tool.createMode({
    id: `${MyID}/modesecretdoor`,
    icons: [
      {
        icon: "/secretdoor_cb.png",
        label: "Secret Door",
        filter: {
          activeTools: [`${MyID}/tool`],
        },
      },
    ],
	
	
	
	async onToolClick(context, event){

	justclicked=true;
 
	if (!interaction_c)
	{
		let currentPos =  await OBR.scene.grid.snapPosition(event.pointerPosition);

			// Get Tool Metadata if it exists
			const metadata_tool =  await OBR.tool.getMetadata(`${MyID}/tool`);
					
		   let strokeColor_SD = "purple"; 
		  if (typeof metadata_tool.strokeColor_SD === "string") {
			strokeColor_SD = metadata_tool.strokeColor_SD;
		  }
		  
			let strokeWidth_SD = 8;
			if (typeof metadata_tool.strokeWidth_SD === "number") {
			strokeWidth_SD = metadata_tool.strokeWidth_SD;
			}
		// Build a line with the position of our pointer
		const curve = buildCurve()
			.points
				([
				currentPos,
				])
			.tension(0)
			.metadata({
				["com.battle-system.smoke/isVisionLine"]: true ,
				["com.battle-system.smoke/isDoor"]: true ,
				["com.battle-system.smoke/isdoubleSided"]: true ,
				["com.battle-system.smoke/blocking"]: true ,
			})
			.name("Vision Line (Line)")
			.locked(true)
			.strokeWidth(strokeWidth_SD)
			.fillOpacity(0)
			.closed(false)
			.visible(false)
			.strokeColor(strokeColor_SD)
			.build();

		// Start an interaction with the new line
		interaction_c = await OBR.interaction.startItemInteraction(curve);
	 	 
	
		}
		else
		{
			const [update] = interaction_c;
 			let currentPos =  await OBR.scene.grid.snapPosition(event.pointerPosition);

			update((curve) => {
				curve.points.pop();
				curve.points.push(currentPos);
            });

		}
},
//---------------
    async onToolMove(_, event) {
      // Update the end position of the interaction when the tool drags
      if (interaction_c) {
        const [update] = interaction_c;

			update((curve) => {
				if (justclicked==false)
				{
					curve.points.pop();
				};
				curve.points.push(event.pointerPosition);
				justclicked=false;
			});
	  };
			
	},//End onToolMove

//---------------
    async onToolDoubleClick(_, event) {
      if (interaction_c) {
        const [update, stop] = interaction_c;
        // Perform a final update when the drag ends
        // This gets us the final line item
 			let currentPos =  await OBR.scene.grid.snapPosition(event.pointerPosition);

			const curve = update((curve) => {
				curve.points.push(currentPos);
            });
        // Add the line to the scene
        OBR.scene.items.addItems([curve]);
        // Make sure we stop the interaction so others
        // can interact with our new line
        stop();
		
      }
	  
      interaction_c = null;

		},//End onToolDoubleClick

//---------------
    async onKeyDown(_,KE) {
      // Stop the interaction early if we cancel the by pressing Esc
      // Complete if Enter is Pressed
		const [update, stop] = interaction_c;

		
		if (interaction_c&&KE.key=="Escape") {
			stop();
		}
	  	  
	   if (interaction_c&&KE.key=="Enter") {

        // Perform a final update when the drag ends
        // This gets us the final line item

		const curve = update((curve) => {

            });
        // Add the line to the scene
        OBR.scene.items.addItems([curve]);
        // Make sure we stop the interaction so others
        // can interact with our new line
        stop();

      }
	  
      interaction_c = null;

    },//end keydown
	
  });//End Curve
}//End Function

/* ================================== */

export function createObstruction() {
  let interaction_c= null;
  let currentPos = null;
  let startPos=null;
  let justclicked=false;
  
  OBR.tool.createMode({
    id: `${MyID}/modeobstruction`,
    icons: [
      {
        icon: "/rock.svg",
        label: "Obstruction",
        filter: {
          activeTools: [`${MyID}/tool`],
        },
      },
    ],
	
	
	
	async onToolClick(context, event){

	justclicked=true;
 
	if (!interaction_c)
	{
		let currentPos =  await OBR.scene.grid.snapPosition(event.pointerPosition);
		startPos=currentPos;
		

			// Get Tool Metadata if it exists
			const metadata_tool =  await OBR.tool.getMetadata(`${MyID}/tool`);
					
		   let strokeColor_Ob = "black"; 
		  if (typeof metadata_tool.strokeColor_Ob === "string") {
			strokeColor_Ob = metadata_tool.strokeColor_Ob;
		  }
		  
			let strokeWidth_Ob = 8;
			if (typeof metadata_tool.strokeWidth_Ob === "number") {
			strokeWidth_Ob = metadata_tool.strokeWidth_Ob;
			}
		// Build a line with the position of our pointer
		const curve = buildCurve()
			.points
				([
				currentPos,
				])
			.tension(0)
			.metadata({
				["com.battle-system.smoke/isVisionLine"]: true ,
				["com.battle-system.smoke/isdoubleSided"]: true ,
				["com.battle-system.smoke/blocking"]: true ,
			})
			.name("Vision Line (Polygon)")
			.locked(true)
			.strokeWidth(strokeWidth_Ob)
			.fillOpacity(0.5)
			.closed(true)
			.visible(false)
			.strokeColor(strokeColor_Ob)
			.build();

		// Start an interaction with the new line
		interaction_c = await OBR.interaction.startItemInteraction(curve);
	 	 
		// Build a line with the start and end position of our pointer

		}
		else
		{
			const [update] = interaction_c;
 			let currentPos =  await OBR.scene.grid.snapPosition(event.pointerPosition);

			update((curve) => {
				curve.points.pop();
				curve.points.push(currentPos);
            });
			
		}
},
//---------------
    async onToolMove(_, event) {
      // Update the end position of the interaction when the tool drags
      if (interaction_c) {
        const [update] = interaction_c;

			update((curve) => {
				if (justclicked==false)
				{
					curve.points.pop();
				};
				curve.points.push(event.pointerPosition);
				justclicked=false;
			});
	  };
			
	},//End onToolMove

//---------------
    async onToolDoubleClick(_, event) {
      if (interaction_c) {
        const [update, stop] = interaction_c;
        // Perform a final update when the drag ends
        // This gets us the final line item
 			let currentPos =  await OBR.scene.grid.snapPosition(event.pointerPosition);

			const curve = update((curve) => {
				curve.points.pop();
				curve.points.push(currentPos);
				curve.points.push(startPos);
            });
        // Add the line to the scene
        OBR.scene.items.addItems([curve]);
        // Make sure we stop the interaction so others
        // can interact with our new line
        stop();
		
      }
	  
      interaction_c = null;

		},//End onToolDoubleClick

//---------------
    async onKeyDown(_,KE) {
      // Stop the interaction early if we cancel the by pressing Esc
      // Complete if Enter is Pressed
		const [update, stop] = interaction_c;
		
		if (interaction_c&&KE.key=="Escape") {
			stop();
		}
	  	  
	   if (interaction_c&&KE.key=="Enter") {

        // Perform a final update when the drag ends
        // This gets us the final line item

		const curve = update((curve) => {
				curve.points.push(startPos);
            });
        // Add the line to the scene
        OBR.scene.items.addItems([curve]);

        // Make sure we stop the interaction so others
        // can interact with our new line
        stop();
	
      }
	  
      interaction_c = null;

    },
	
  });//End Curve
}//End Function


/* ================================== */

export function createAction() {
OBR.tool.createAction({
  id: `${MyID}/actionsettings`,
  icons: [
    {
      icon: "/circle.svg",
      label: "Line Width and Color",
      filter: {
        activeTools: [`${MyID}/tool`],
      },
    },
  ],
  onClick(_, elementId) {
    OBR.popover.open({
      id: `${MyID}/color-picker`,
      height: 100,
      width: 80,
      url: "/color-picker.html",
      anchorElementId: elementId,
      anchorOrigin: {
        horizontal: "CENTER",
        vertical: "BOTTOM",
      },
      transformOrigin: {
        horizontal: "CENTER",
        vertical: "TOP",
      },
    });
  },
});
}

/* ================================== */

export function createPresets() {
OBR.tool.createAction({
  id: `${MyID}/actionpresets`,
  icons: [
    {
      icon: "/style.svg",
      label: "Presets Width and Color",
      filter: {
        activeTools: [`${MyID}/tool`],
      },
    },
  ],
  onClick(_, elementId) {
    OBR.popover.open({
      id: `${MyID}/preset-picker`,
      height: 125,
      width: 300,
      url: "/preset-picker.html",
      anchorElementId: elementId,
      anchorOrigin: {
        horizontal: "CENTER",
        vertical: "BOTTOM",
      },
      transformOrigin: {
        horizontal: "CENTER",
        vertical: "TOP",
      },
    });
  },
});
}