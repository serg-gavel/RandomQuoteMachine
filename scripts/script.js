var sliderContent = document.getElementsByClassName('content-container');
// var quoteButton = document.getElementById('quote-btn');
var i=1;
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

    if(i>=1){
        sliderContent[i-1].classList.add('hidden');
        sliderContent[i-1].classList.remove('visible');
    }
    sliderContent[i].classList.remove('hidden');
    sliderContent[i].classList.add('visible');
    if(i>=7){
        // sliderContent[i].classList.add('hidden');
        // sliderContent[i].classList.remove('visible');
        // i = math.random(i*i);
        // sliderContent[i].classList.remove('hidden');
        // sliderContent[i].classList.add('visible');
    }
    i++;
}
function clickedButton(evt){
    console.log("clickedButton Passed");
    console.log(evt.target.innerText);

    if(evt.target.innerText==="Random Quote"){
        //random quote function
        // sliderContent[i].classList.remove('hidden');
        // sliderContent[i].classList.add('visible');
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