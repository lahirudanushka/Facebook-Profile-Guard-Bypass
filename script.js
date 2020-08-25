function getImage(){
	var uid = document.getElementById('uid').value;
	letterNumber = /^[0-9]+$/;
	if((uid.value.match(letterNumber)){
		var link =  "https://graph.facebook.com/"+uid+"/picture?width=8000";

	window.open(link, '_blank'); win.focus();

			}
	
	

	
}