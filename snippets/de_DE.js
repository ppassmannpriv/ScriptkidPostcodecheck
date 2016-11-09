var url = 'https://www.postdirekt.de/plzserver/PlzAjaxServlet';
var request = new XMLHttpRequest();
var postcode = '52074';
var params = 'finda=city&city=' + postcode + '&lang=de_DE';

request.open("POST", url, true);

request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

request.onreadystatechange = function() {
	if(request.readyState == 4 && request.status == 200)
  {
  	console.log(JSON.parse(request.responseText));
  }
}

request.send(params);


//returns
{"finda":"city","searchString":"52074 Aachen","count":3,"header":{"0":{"col":"plz","label":"PLZ","sortable":true},"1":{"col":"city","label":"Ortsname","sortable":true},"2":{"col":"district","label":"Ortsteil","sortable":true},"3":{"col":"districtlink","label":"","sortable":false},"4":{"col":"streetlink","label":"","sortable":false},"5":{"col":"map","label":"","sortable":false}},"rows":[{"streetlink":true,"map":false,"districtlink":false,"plz":"52074","district":"Laurensberg","city":"Aachen"},{"streetlink":true,"map":false,"districtlink":false,"plz":"52074","district":"Orsbach","city":"Aachen"},{"streetlink":true,"map":false,"districtlink":false,"plz":"52074","district":"Vaalserquartier","city":"Aachen"}],"city":"Aachen","switchTo":"","success":true}


//CORS
//smh
