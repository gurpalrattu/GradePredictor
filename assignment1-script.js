// this is the script for the Grade Predictor FormData

//function to display the second part of the form
var i = 0;
function displayFunction() 
{
	var cmpts = document.getElementById('gradeComponents').value;
	if(cmpts == "") {
		alert("Value cannot be empty");
	}
	else
	{
		document.getElementById("section2").style.display = "block";
		componentsGenerator();
    	jQuery("#setupBtn").addClass('disabled');
	}
    
    
}

function componentsGenerator ()
{

	var compGenerated = document.getElementById('gradeComponents').value;
	//create a div container for the component generator
 	if(window.console)
 	{
		console.log(compGenerated);
 	}


   for (; i < compGenerated; i++) 
   {

	var div = document.createElement("div");

//create component name
	var d1 = document.createElement("div");
	d1.className = "col s3";
	var n = document.createElement("input");
	n.placeholder = "Grade Item " + i +" Name";
	n.type = "text";
	n.name = "component-name";
	n.id = "component-name";
	n.className = "validate";

//create a component weight
	var d2 = document.createElement("div");
	d2.className = "col s3";
	var w = document.createElement("input");
	w.placeholder = "Weightage";
	w.type = "text";
	w.name = "component-weight";
	w.id="component-weight"+i;
	w.className = "validate";

//create a component grade
	var d3 = document.createElement("div");
	d3.className = "col s3";
	var g = document.createElement("input");
	g.placeholder = "Grade";
	g.type = "text";
	g.name = "component-grade";
	g.id = "component-grade"+i;
	g.className = "validate";

//create component max grade
	var d4 = document.createElement("div");
	d4.className = "col s3";
	var m = document.createElement("input");
	m.placeholder = "Max Grade";
	m.type = "text";
	m.name = "component-max-grade";
	m.id = "component-max-grade"+i;
	m.className = "validate";


// add all elements to the form
	d1.appendChild(n);
	d2.appendChild(w);
	d3.appendChild(g);
	d4.appendChild(m);
	div.appendChild(d1);
	div.appendChild(d2);
	div.appendChild(d3);
	div.appendChild(d4);

// add the form inside the container
	document.getElementById('step2-container').appendChild(div); //pure javascript
   }//end of for loop
   
}
function caculate()
{	
	var weightArray = new Array(i);
	var gradeArray = new Array(i);
	var maxArray = new Array(i);
	var earned = new Array(i);
	var totalWeight = 0;
	var totalEarned = 0;
	var inc = 0;
	var dec = 0;
	var showBelow = 0;
	var showNow = 0;
	var showAbove =0;
	
	for(var w =0; w <i; w++)
	{
		weightArray[w] = parseFloat(document.getElementById('component-weight'+w).value);
		totalWeight = totalWeight + weightArray[w];
	}
	for(var c =0 ;c <i; c++)
	{
		weightArray[c] = parseFloat(document.getElementById('component-weight'+c).value);
		gradeArray[c] = parseFloat(document.getElementById('component-grade'+c).value);
		maxArray[c] = parseFloat(document.getElementById('component-max-grade'+c).value);
		earned[c] = (weightArray[c]/totalWeight)*(gradeArray[c]/maxArray[c]);
		totalEarned = totalEarned +earned[c];
	}

	///
	if(document.getElementById('minus-10').checked)
	{
		dec = -10;
	}
	else if(document.getElementById('minus-20').checked)
	{
		dec = -20;
	}
	else if(document.getElementById('minus-30').checked)
	{
		dec = -30;
	}
	
	///
	if(document.getElementById('plus-10').checked)
	{
		inc = 10;
	}
	else if(document.getElementById('plus-20').checked)
	{
		inc = 20;
	}
	else if(document.getElementById('plus-30').checked)
	{
		inc = 30;
	}
	
	showNow = (totalEarned *100).toFixed(2);
	showBelow = (totalEarned*(100+dec)).toFixed(2);
	showAbove = (totalEarned*(100+inc)).toFixed(2);
	///
	
	
	document.getElementById("section3").style.display = "block";
	document.getElementById("below").innerHTML=showBelow;
	document.getElementById("flat").innerHTML=showNow;
	document.getElementById("above").innerHTML=showAbove;
	
}

function startover(){
	location.reload();
	
}