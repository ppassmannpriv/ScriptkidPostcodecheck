var url = 'https://api.postcodes.io/';
var actionName = 'postcodes/';
var request = new XMLHttpRequest();
var postcode = 'OX495NU';

request.open("GET", url+actionName+postcode, true);
request.onreadystatechange = function() {
	if(request.readyState == 4 && request.status == 200)
  {
  	console.log(JSON.parse(request.responseText));
  }
}

request.send();


//returns
