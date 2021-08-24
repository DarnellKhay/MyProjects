
/*  FORM VALIDATION */

// Navigation
function navToActivity(){
	window.location.href = "/activity.ejs";
	
	
}

function navToRemote(){
	window.location.href = "/clock_in_out.ejs";

}

function navToEmpTable(){
	window.location.href = "../";


}

function checkWorkDate(){
	let input = document.forms["form1"]["workdate"].value;
	
	if(!input){
		document.getElementById("work_date_message").innerHTML = "Work date is required";
		return false;
	} 
	return true;
}


function inputCheckWorkDate(){
	const originalLabel = document.getElementById("label_work_date").textContent;
	const temp = "* ";
	const asterisk = temp.fontcolor("red");
	let input = document.getElementById("workdate").value;

	if(input)
		document.getElementById("label_work_date").innerHTML = "Work Date";
	else
		document.getElementById("label_work_date").innerHTML = asterisk + originalLabel;
}






