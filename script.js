function listOfAllYogaPoses(){
  fetch('https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json')
  .then(result => result.json())
  .then(newResult => console.log(newResult))
  .catch(error => console.log(error))
}

function init() {
	listOfAllYogaPoses();
}

$(init); //document on ready
