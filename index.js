function getDogImage(getValue) {
  fetch('https://dog.ceo/api/breed/' + getValue + '/images/random')
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.status == 'success') {
        displayResults(responseJson)
      }
      else {
        throw responseJson;
      }
    })
    .catch(err => {
      alert('Something went wrong. Try again. The breed might not be available.')
    })
}

//display result
function displayResults(responseJson) {
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`)
  //display the results section
  $('.results').removeClass('hidden');
}

function eventListen() {
  $('form').submit(event => {
    event.preventDefault();
    let getValue = document.getElementById("hariu").value;
    console.log("testing", getValue);
    getDogImage(getValue);
    $('#hariu').val();
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  eventListen();
});
