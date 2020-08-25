function getImage(){
	var uid = document.getElementById('uid').value;
	if(uid!=""){
	//console.log(uid);

	var link =  "https://graph.facebook.com/"+uid+"/picture?width=8000";

	window.open(link, '_blank'); win.focus();
}
}