// Called when the user clicks on the browser action.
var blackList = true;

// chrome.browserAction.onClicked.addListener(function(tab) {
//  No tabs or host permissions needed!
  // console.log('Turning ' + tab.url + ' red!');
// window.location.href = "google.com";
  // while(blackList == true)
  // {
	// if(tab.url != "www.youtube.com"){
	// chrome.tabs.executeScript({
    // code: 'location.replace("http://www.google.com");'
  // });}
  // }
// });



function click(e) {
	while(blackList == true){
		if(window.location.href != "www.youtube.com"){
			chrome.tabs.executeScript({code: 'location.replace("http://www.google.com");'});
		}
	}
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});