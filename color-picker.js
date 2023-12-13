import OBR from "@owlbear-rodeo/sdk";
import { getPluginId } from "/getPluginId";
import { isImage, isText} from "@owlbear-rodeo/sdk";
const MyID = "OBWalledIn.onrender";
const SmokeID = "com.battle-system.smoke";
const colors = ["red", "orange", "yellow", "green", "blue", "purple"];



OBR.onReady(async () => {
  // Get Tool Metadata if it exists
  const metadata = await OBR.tool.getMetadata(`${MyID}/tool`);
    
/*   //Assign a Default value and override if a value was saved to metadata
  let strokeColor_L = "red"; 
  if (typeof metadata.strokeColor_L === "string") {
    strokeColor_L = metadata.strokeColor_L;
  }
  
  let strokeWidth_L = 8;
  if (typeof metadata.strokeWidth_L ==="number") {
    strokeWidth_L = metadata.strokeWidth_L;
  }
  
   let strokeColor_W = "red"; 
  if (typeof metadata.strokeColor_W === "string") {
    strokeColor_W = metadata.strokeColor_W;
  }
  
    let strokeWidth_W = 8;
    if (typeof metadata.strokeWidth_W === "number") {
    strokeWidth_W = metadata.strokeWidth_W;
  }
  
    let strokeColor_D = "blue";
    if (typeof metadata.strokeColor_D === "string") {
    strokeColor_D = metadata.strokeColor_D;
  }
  
    let strokeWidth_D = 8;
    if (typeof metadata.strokeWidth_D === "number") {
    strokeWidth_D = metadata.strokeWidth_D;
  }
  
   let strokeColor_SD = "purple"; 
    if (typeof metadata.strokeColor_SD === "string") {
    strokeColor_SD = metadata.strokeColor_SD;
  }
  
    let strokeWidth_SD = 8;
    if (typeof metadata.strokeWidth_SD === "number") {
    strokeWidth_SD = metadata.strokeWidth_SD;
  } */
  
  //createSelect(strokeColor_L);
  
 // setupSelect(document.querySelector("#colors"));
    
	//========================

	 // Setup the document with the html button elements
	document.getElementById("app").innerHTML = `
		  <input
			type="number"
			id="strokeWidthL_Value"
			inputmode="numeric"
			value=8
			min="1"
			max="20"
			class="input50"
		  />
		  <br>
		  <button
			id="red"
			class="bg-red-500 swatch"
			aria-label="red"
		  />

		   <button
		   id="orange"
			class="bg-orange-500 swatch"
			aria-label="orange"
		  />
		  
		  <button
		  id="yellow"
			class="bg-yellow-500 swatch"
			aria-label="yellow"
		  />
		  
		  <button
		  id="green"
			class="bg-green-500 swatch"
			aria-label="green"
		  />
		  
	      <button
			id="blue"
			class="bg-blue-500 swatch"
			aria-label="blue"
		  />
		  
		  <button
		  id="purple"
			class="bg-purple-500 swatch"
			aria-label="purple"
		  />
		  
		  <button
		  id="teal"
			class="bg-teal-500 swatch"
			aria-label="teal"
		  />
		  
	      <button
			id="black"
			class="bg-black-500 swatch"
			aria-label="black"
		  />
		  
		  <button
		  id="white"
			class="bg-white-500 swatch"
			aria-label="white"
		  />
		  
  `;
   
	 //Attach Click listener to color buttons
	 document.getElementById("red").addEventListener("click", setColor);
	 document.getElementById("orange").addEventListener("click", setColor);
	 document.getElementById("yellow").addEventListener("click", setColor);
	 document.getElementById("green").addEventListener("click", setColor);
	 document.getElementById("blue").addEventListener("click", setColor);
	 document.getElementById("purple").addEventListener("click", setColor);
	 document.getElementById("teal").addEventListener("click", setColor);
	 document.getElementById("black").addEventListener("click", setColor);
	 document.getElementById("white").addEventListener("click", setColor);
	 
	 document.getElementById("strokeWidthL_Value").addEventListener("focusout", onInput);
	
	//=======================
	
	var inputF = document.getElementById("strokeWidthL_Value");
	inputF.setAttribute('value', metadata.strokeWidth_L );
	
});

async function setColor(a){

	  	const controlin=event.srcElement.id

		OBR.tool.setMetadata(`${MyID}/tool`, { strokeColor_L: controlin });
		
  }//End Function

//================================================================
 async function onInput(e) {
		
    const inputValue = parseInt((e.target).value);
console.log(inputValue);
	const controlin=event.srcElement.id
	
	OBR.tool.setMetadata(`${MyID}/tool`, { strokeWidth_L: inputValue });
	
 } //End Function
