var youtube_Key = "AIzaSyBcY7xBC8qSNeUQv39-csOZ6sWqitZ1BJw";

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
  fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=how+to+do+${valueSelected}+yoga+pose&maxResults=1&&safeSearch=moderate&key=${youtube_Key}`)
  .then(youtubeResult =>
    youtubeResult.json())
  .then(youtubeResult => {
    displayOtherResults(youtubeResult.items[0]);
  })
  .catch(error =>
    console.log(error))
}

function getVariableforAllPoses(newResult){
  for(let i=0; i<newResult.length; i++){
    let allPoses = newResult[i].english_name;
    $('.select-dropdown').append(
      `
      <option class="dropdown-style" id="move-dropdown" value="${allPoses}">
        ${allPoses}
      </option>
      `)
    if(allPoses === newResult[i].english_name){
      let sanskritName = newResult[i].sanskrit_name;
      let poseImage = newResult[i].img_url;
    }
  }
  submitButton(newResult);
}


function submitButton(newResult){
  $('.dropdown-form').submit(event => {
    event.preventDefault();
    let valueSelected = $('.dropdown-style:selected').val();
    callYoutubeAPI(valueSelected);
    for(let i=0; i<newResult.length; i++){
      if(valueSelected === newResult[i].english_name){
        let objectSelected = newResult[i];
        cssChanges();
        displayResults(objectSelected);
      }
    }
  });
}

function cssChanges(){
  $('.light').hide();
  $("#app-explanation").hide();
  $('body').css('backgroundImage','url(' + 'https://images.unsplash.com/photo-1533046014110-cb971b8914d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' + ')');
  $('body').css({
    'backgroundColor':'#ef6090',
    'backgroundBlendMode':'softLight',
    'backgroundRepeat':'noRepeat',
    'backgroundSize':'cover'
  });
  // $('.select-dropdown').css({
  //   'position':'relative',
  //   // 'top':'195px',
  //   // 'left':'20%',
  //   // 'transform':'translateX(-50%)'
  // });
  // $('.submit-button').css({
  //   'position':'relative',
  //   // 'top':'245px',
  //   // 'left':'20%',
  //   // 'transform':'translateX(-50%)'
  // });

}

function displayResults(objectSelected){
  $('.results').empty();
  $('.results').append(`
      <div class='position-rel'>
      <div id="sanskrit-div"><p>${objectSelected.sanskrit_name}</p></div>
      </div>
      <div class='results-inline'>
      <img id="pose-img" src="${objectSelected.img_url}"></img>
      </div>

    `)
}

function displayOtherResults(video){
  $('.results-inline').append(`
      <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `)
}


function init() {
	listOfAllYogaPoses();
}

$(init); //document on ready
