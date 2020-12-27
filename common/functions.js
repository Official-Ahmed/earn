function payload_finished(payload)
{
	setTimeout(function(){
		document.getElementById("progress").innerHTML="Load Successful!!";
		}, 3000);
	if(payload == "hen" || payload == "mirahen" || payload == "miranohb" || payload == "miraunofficial"){
		localStorage.Fail--;
		localStorage.Success++;
		document.getElementById("success").innerHTML="Success: "+localStorage.Success;
	}
}

function triggerFunction(payload){
	preloader();
	if(payload == "hen"){
		localStorage.Fail++;
		hen();
	}

	loader();
	payload_finished(payload);
}

function load_JB(){	
	var spoofed=navigator.userAgent.indexOf("6.72")>=0 ? false : true;
	if (!spoofed){
		exploit(false);	
	}else{
		setTimeout(function(){
			document.getElementById("progress").innerHTML="PS4 Jailbreak 6.72 HEN Loaded Already ✔"; 
		}, 500);
	}
}

function exploit(val){
	document.getElementById("progress").innerHTML="Running Jailbreak Exploit!!";
	localStorage.Fail++;
	setTimeout(function(){
		jb(val);
	}, 500);
}
