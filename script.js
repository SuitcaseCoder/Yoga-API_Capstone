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

function getVariableforAllPoses(newResult,valueSelected){
  for(let i=0; i<newResult.length; i++){
    let allPoses = newResult[i].english_name;
    console.log(allPoses);


  $('.select-dropdown').append(
    `
    <option class="dropdown-style" value="${allPoses}">
      ${allPoses}
    </option>
    `)

    if(allPoses === newResult[i].english_name){
      console.log(newResult[i].sanskrit_name);
    } else {
      console.log("nope you're wrong");
    }


}
}

function submitButton(newResult){
  $('.dropdown-form').submit(event => {
    event.preventDefault();

    let valueSelected = $('.dropdown-style:selected').val();
    console.log(valueSelected);

    //how to move "backward " in an array and get the key value from selected value?
    //loop through the object using valueSelected ?
    //get value from

})
}















function init() {
	listOfAllYogaPoses();
  submitButton();
}

$(init); //document on ready
