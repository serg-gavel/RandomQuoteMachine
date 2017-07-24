var sliderContent = document.getElementsByClassName('content-container');
// var quoteButton = document.getElementById('quote-btn');
var i=0;
var prevQuote=0;
var maxQuotes=6;
var firstRun=true;
// function changeContent() {
//     for(i=0; i<=sliderContent.length; i++)
//         if(sliderContent.length <=1){
//             console.log('if suka blia');
//         }
//         else{
//             sliderContent[i].classList.remove('hidden');
//             console.log('ebatnia');
//         }
//
// }
function getRandomQuote(){
	prevQuote=i;
	i=Math.floor(Math.random() * (maxQuotes - 0)) + 0;
    sliderContent[prevQuote].classList.add('hidden');
    sliderContent[prevQuote].classList.remove('visible');

    sliderContent[i].classList.remove('hidden');
    sliderContent[i].classList.add('visible');
}
function clickedButton(evt){
    console.log("clickedButton Passed");
    console.log(evt.target.innerText);

    if(evt.target.innerText==="Random Quote"){
        getRandomQuote();
    }else if(evt.target.innerText==="tweet"){
        //tweet function
    }
}
function eventLoader(){
	console.log("eventLoader Passed");
    if(firstRun===true){
    sliderContent[0].classList.remove('hidden');
    sliderContent[0].classList.add('visible');
    prevQuote=i;
    firstRun=false;
    }
    document.addEventListener("click",clickedButton);
}

window.onload = eventLoader();

// var mathButton = document.getElementsByClassName('math-random');
// mathButton.addEventListener('click', mathRandom);
//
//
// function mathRandom() {
//     console.log('hj hj hj hj hj h jh jh j');
// }














































// var twitterButton = document.getElementsByClassName('tweet-btn');
