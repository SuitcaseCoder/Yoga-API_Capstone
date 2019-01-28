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

     let valueSelected = $('.dropdown-style:selected').val();

  $('.select-dropdown').append(
    `
    <option class="dropdown-style" value="${allPoses}">
      ${allPoses}
    </option>
    `)

    if(allPoses === newResult[i].english_name){
      let sanskritName = newResult[i].sanskrit_name;
      let poseImage = newResult[i].img_url;
      console.log(sanskritName);
      console.log(poseImage);
      console.log(valueSelected);

    } else {
      console.log("nope you're wrong");
      let
    }


}
}

function submitButton(newResult, sanskritName, poseImage){
  $('.dropdown-form').submit(event => {
    event.preventDefault();

    let valueSelected = $('.dropdown-style:selected').val();
    alert(valueSelected);

    $('.results').empty();
    $('.results').append(`
        <h2>Sanskrit Name</h2>
        <p>${sanskritName}</p>
        <img src="${poseImage}"></img>

      `)
    console.log(sanskritName);


})
}



//how do I make either valueSelected accessible in all functions
//or how do I make sanskritName accessible in all functions











function init() {
	listOfAllYogaPoses();
  submitButton();
}

$(init); //document on ready
