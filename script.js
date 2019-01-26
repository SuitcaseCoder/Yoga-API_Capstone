function listOfAllYogaPoses(){
  fetch('https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json')
  .then(result =>
    result.json())
  .then(newResult =>
    getVariableforAllPoses(newResult))
  .catch(error =>
    console.log(error))
}

function fetchYogaApiAgain(){
  fetch('https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json')
  .then(result =>
    result.json())
  .then(newResult =>
    getVariableforAllPoses(newResult))
  .catch(error =>
    console.log(error))
}

function getVariableforAllPoses(newResult){
  for(let i=0; i<newResult.length; i++){
    let allPoses = newResult[i].english_name;
    console.log(allPoses);

  $('.select-dropdown').append(
    `
    <option class="dropdown-style" value="${allPoses}">
      ${allPoses}
    </option>
    `)

}
}

function submitButton(){
  $('.dropdown-form').submit(event => {
    event.preventDefault();

    let valueSelected = $('.dropdown-style:selected').val();
    console.log(valueSelected);

    //loop through the object using valueSelected ?

})
}














function init() {
	listOfAllYogaPoses();
  submitButton();
}

$(init); //document on ready
