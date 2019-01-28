var youtube_Key = "AIzaSyA5bV5bxQ59uapPb7iS2OFNfKaW1d6u4Ho";

function listOfAllYogaPoses(){
  fetch('https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json')
  .then(result =>
    result.json())
  .then(newResult => {
    getVariableforAllPoses(newResult)
    var newResult = newResult;
  })
  .catch(error =>
    console.log(error))
}

function callYoutubeAPI(valueSelected){
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet
                     &q=${valueSelected}
                     &maxResults=3
                     &key=${youtube_Key}`)
  .then(youtubeResult =>
    youtubeResult.json())
  .then(newYoutubeResult => displayResults(newYoutubeResult))
  .catch(error => console.log(error))
}

function getVariableforAllPoses(newResult){
  console.log(newResult);
  for(let i=0; i<newResult.length; i++){
    let allPoses = newResult[i].english_name;
    console.log(allPoses);

     // let valueSelected = $('.dropdown-style:selected').val();

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
      // console.log(valueSelected);
    }
  }
  submitButton(newResult);
}


function submitButton(newResult){
  $('.dropdown-form').submit(event => {
    event.preventDefault();
    let valueSelected = $('.dropdown-style:selected').val();
    for(let i=0; i<newResult.length; i++){
      if(valueSelected === newResult[i].english_name){
        let objectSelected = newResult[i];
        console.log(newResult[i]);
        displayResults(objectSelected);
      }
    }
  });

}

function displayResults(objectSelected){
  $('.results').empty();
  $('.results').append(`
      <h2>Sanskrit Name</h2>
      <p>${objectSelected.sanskrit_name}</p>
      <img src="${objectSelected.img_url}"></img>
      <video controls>
        <source src="" type="video/mp4">
        <p>Your browser doesn't support HTML5 video. Here is
           a <a href="myVideo.mp4">link to the video</a> instead.</p>
      </video>
    `)
}




function init() {
	listOfAllYogaPoses();
}

$(init); //document on ready
