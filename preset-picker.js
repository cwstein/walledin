import OBR from "@owlbear-rodeo/sdk";
import { getPluginId } from "/getPluginId";
import { isImage, isText} from "@owlbear-rodeo/sdk";
const MyID = "OBWalledIn.onrender";
const SmokeID = "com.battle-system.smoke";
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];



OBR.onReady(async () => {

	 // Setup the document with the html button elements
	document.getElementById("div_wall").innerHTML = `
		   <image
			id="Set_Wall"
			src="stonewall.png"
			title="Wall Presets"
			alt="Wall Presets" width="25" height="25"
			class="img-bottom"
		  />
		  
		  <input
			type="number"
			id="strokeWidthW_Value"
			inputmode="numeric"
			value=8
			min="1"
			max="20"
			class="input50"
		  />
		  
		  <button
			id="red"
			name="wall"
			class="bg-red-500 swatch"
			aria-label="red"
		  />

		   <button
		   id="orange"
		   name="wall"
			class="bg-orange-500 swatch"
			aria-label="orange"
		  />
		  
		  <button
		  id="yellow"
		  name="wall"
			class="bg-yellow-500 swatch"
			aria-label="yellow"
		  />
		  
		  <button
		  id="green"
		  name="wall"
			class="bg-green-500 swatch"
			aria-label="green"
		  />
		  
	      <button
			id="blue"
			name="wall"
			class="bg-blue-500 swatch"
			aria-label="blue"
		  />
		  
		  <button
		  id="purple"
		  name="wall"
			class="bg-purple-500 swatch"
			aria-label="purple"
		  />
		  
		  <button
		  id="teal"
		  name="wall"
			class="bg-teal-500 swatch"
			aria-label="teal"
		  />
		  
	      <button
			id="black"
			name="wall"
			class="bg-black-500 swatch"
			aria-label="black"
		  />
		  
		  <button
		  id="white"
		  name="wall"
			class="bg-white-500 swatch"
			aria-label="white"
		  />
  `;
  
  
  document.getElementById("div_door").innerHTML = `
		   <image
			id="Set_Door"
			name="door"
			src="doorway.png"
			title="Door Presets"
			alt="Door Presets" width="25" height="25"
			class="img-bottom"
		  />
		  
		  <input
			type="number"
			id="strokeWidthD_Value"
			name="door"
			inputmode="numeric"
			value=8
			min="1"
			max="20"
			class="input50"
		  />
		  
		  <button
			id="red"
			name="door"
			class="bg-red-500 swatch"
			aria-label="red"
			tag="colorbutton"
		  />

		   <button
		   id="orange"
		   name="door"
			class="bg-orange-500 swatch"
			aria-label="orange"
		  />
		  
		  <button
		  id="yellow"
		  name="door"
			class="bg-yellow-500 swatch"
			aria-label="yellow"
		  />
		  
		  <button
		  id="green"
		  name="door"
			class="bg-green-500 swatch"
			aria-label="green"
		  />
		  
	      <button
			id="blue"
			name="door"
			class="bg-blue-500 swatch"
			aria-label="blue"
		  />
		  
		  <button
		  id="purple"
		  name="door"
			class="bg-purple-500 swatch"
			aria-label="purple"
		  />
		  
		  <button
		  id="teal"
		  name="door"
			class="bg-teal-500 swatch"
			aria-label="teal"
		  />
		  
	      <button
			id="black"
			name="door"
			class="bg-black-500 swatch"
			aria-label="black"
		  />
		  
		  <button
		  id="white"
		  name="door"
			class="bg-white-500 swatch"
			aria-label="white"
		  />
  `;
  
  
  document.getElementById("div_sdoor").innerHTML = `
		   <image
			id="Set_SDoor"
			name="sdoor"
			src="secretdoor.png"
			title="Secret Door Presets"
			alt="Secret Door Presets" width="25" height="25"
			class="img-bottom"
		  />
		  
		  <input
			type="number"
			id="strokeWidthSD_Value"
			name="sdoor"
			inputmode="numeric"
			value=8
			min="1"
			max="20"
			class="input50"
		  />
		  
		  <button
			id="red"
			name="sdoor"
			class="bg-red-500 swatch"
			aria-label="red"
			tag="colorbutton"
		  />

		   <button
		   id="orange"
		   name="sdoor"
			class="bg-orange-500 swatch"
			aria-label="orange"
		  />
		  
		  <button
		  id="yellow"
		  name="sdoor"
			class="bg-yellow-500 swatch"
			aria-label="yellow"
		  />
		  
		  <button
		  id="green"
		  name="sdoor"
			class="bg-green-500 swatch"
			aria-label="green"
		  />
		  
	      <button
			id="blue"
			name="sdoor"
			class="bg-blue-500 swatch"
			aria-label="blue"
		  />
		  
		  <button
		  id="purple"
		  name="sdoor"
			class="bg-purple-500 swatch"
			aria-label="purple"
		  />
		  
		  <button
		  id="teal"
		  name="sdoor"
			class="bg-teal-500 swatch"
			aria-label="teal"
		  />
		  
	      <button
			id="black"
			name="sdoor"
			class="bg-black-500 swatch"
			aria-label="black"
		  />
		  
		  <button
		  id="white"
		  name="sdoor"
			class="bg-white-500 swatch"
			aria-label="white"
		  />
  `;
   
     document.getElementById("div_obs").innerHTML = `
		   <image
			id="Set_Obs"
			name="Ob"
			src="obstruction.png"
			title="Obstruction Presets"
			alt="Obstruction Presets" width="25" height="25"
			class="img-bottom"
		  />
		  
		  <input
			type="number"
			id="strokeWidthOb_Value"
			name="Ob"
			inputmode="numeric"
			value=8
			min="1"
			max="20"
			class="input50"
		  />
		  
		  <button
			id="red"
			name="Ob"
			class="bg-red-500 swatch"
			aria-label="red"
			tagname="colorbutton"
		  />

		   <button
		   id="orange"
		   name="Ob"
			class="bg-orange-500 swatch"
			aria-label="orange"
		  />
		  
		  <button
		  id="yellow"
		  name="Ob"
			class="bg-yellow-500 swatch"
			aria-label="yellow"
		  />
		  
		  <button
		  id="green"
		  name="Ob"
			class="bg-green-500 swatch"
			aria-label="green"
		  />
		  
	      <button
			id="blue"
			name="Ob"
			class="bg-blue-500 swatch"
			aria-label="blue"
		  />
		  
		  <button
		  id="purple"
		  name="Ob"
			class="bg-purple-500 swatch"
			aria-label="purple"
		  />
		  
		  <button
		  id="teal"
		  name="Ob"
			class="bg-teal-500 swatch"
			aria-label="teal"
		  />
		  
	      <button
			id="black"
			name="Ob"
			class="bg-black-500 swatch"
			aria-label="black"
		  />
		  
		  <button
		  id="white"
		  name="Ob"
			class="bg-white-500 swatch"
			aria-label="white"
		  />
  `;

	//Assign Event Listener to color buttons
	const elements = document.getElementsByTagName("button");
	for (let i = 0; i < elements.length; i++) {
		elements.item(i).addEventListener("click", setColor);
	}
	
	 //Assign Event Listener to numeric inputs
	const elements_input = document.getElementsByClassName("input50");
	console.log(elements_input.length)
	for (let i = 0; i < elements_input.length; i++) {
		elements_input.item(i).addEventListener("focusout", onInput);
	}
	
	//=======================
	
	// Get Tool Metadata if it exists
	const metadata = await OBR.tool.getMetadata(`${MyID}/tool`);
	
	var inputWall = document.getElementById("strokeWidthW_Value");
	inputWall.setAttribute('value', metadata.strokeWidth_W );

	var inputDoor = document.getElementById("strokeWidthD_Value");
	inputDoor.setAttribute('value', metadata.strokeWidth_W );

	var inputSDoor = document.getElementById("strokeWidthSD_Value");
	inputSDoor.setAttribute('value', metadata.strokeWidth_W );

	var inputOb = document.getElementById("strokeWidthOb_Value");
	inputOb.setAttribute('value', metadata.strokeWidth_W );	
	
	
	
	
	
});

//================================================================
async function setColor(a){

	  	const controlin_ID=event.srcElement.id
		const controlin_Name=event.srcElement.name

	if (controlin_Name=="wall") 
	{
		OBR.tool.setMetadata(`${MyID}/tool`, { strokeColor_W: controlin_ID });
	} 
	else if (controlin_Name=="door") 
	{
		OBR.tool.setMetadata(`${MyID}/tool`, { strokeColor_D: controlin_ID });
	} 
	else if (controlin_Name=="sdoor") 
	{
		OBR.tool.setMetadata(`${MyID}/tool`, { strokeColor_SD: controlin_ID });
	} 
	else if (controlin_Name=="Ob") 
	{
		OBR.tool.setMetadata(`${MyID}/tool`, { strokeColor_Ob: controlin_ID });
	} 

		
  }//End Function

//================================================================
 async function onInput(e) {
		
    
	console.log("onInput");
	//const controlin=event.srcElement.id
	
	//OBR.tool.setMetadata(`${MyID}/tool`, { strokeWidth_W: inputValue });
	
	
	const controlin_ID=event.srcElement.id
	const controlin_Name=event.srcElement.name
	const inputValue = parseInt((e.target).value);


	if (controlin_Name=="wall") 
	{
		OBR.tool.setMetadata(`${MyID}/tool`, { strokeWidth_W: inputValue });
	} 
	else if (controlin_Name=="door") 
	{
		OBR.tool.setMetadata(`${MyID}/tool`, { strokeWidth_D: inputValue });
	} 
	else if (controlin_Name=="sdoor") 
	{
		OBR.tool.setMetadata(`${MyID}/tool`, { strokeWidth_SD: inputValue });
	} 
	else if (controlin_Name=="Ob") 
	{
		OBR.tool.setMetadata(`${MyID}/tool`, { strokeWidth_Ob: inputValue });
	} 
	
	
	
	
	
	
 } //End Function
