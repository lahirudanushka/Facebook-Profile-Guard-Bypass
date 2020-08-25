function getImage(){
	var uid = document.getElementById('uid').value;
	var letters = /^[0-9]+$/;
			if(uid.match(letters))
			{
			var link =  "https://graph.facebook.com/"+uid+"/picture?width=8000";

	window.open(link, '_blank'); win.focus();

			}
	


	
}