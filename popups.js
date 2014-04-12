var time= "George is fucking awesome";
var imgScreen = new Image();
imgScreen.src = 'harris.jpg';
function myFunction()
{
	document.write(time);
//	time = time - 1;
}

function show_image(src, width, height, alt)
{
	var img = document.createElement("img");
	img.src = src;
	img.width = width;
	img.height = height;
	img.alt = alt;
	
	document.body.appendChild(img);
}



// /*
//Run our kitten generation script as soon as the document's DOM is ready.
// document.addEventListener('DOMContentLoaded', function () {
	// myFunction();
// });
// */

// while(time!=0)
// {
	// window.setInterval(myFunction(),1000);
// }

// chrome.browserAction.onClicked.addListener(function(tab) {
  // console.log('Turning ' + tab.url + ' red!');
  // chrome.tabs.executeScript({
    // code: 'document.body.style.backgroundColor="red"'
  // });
// });

myFunction();
onClick = show_image('harris.jpg',150, 200, 'harry');
//ThankYouQuixey