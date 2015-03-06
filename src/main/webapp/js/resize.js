function resize(){
		 var width  = document.body.clientWidth;  
		 if(width<1530){
		 	document.getElementById('banner_l').style.display = "none";
			document.getElementById('banner_r').style.display = "none";
		 }else{
		 	document.getElementById('banner_l').style.display = "block";
			document.getElementById('banner_r').style.display = "block";
		 }
	
}