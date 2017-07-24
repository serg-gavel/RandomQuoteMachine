var sliderContent = document.getElementsByClassName('content-container');
var quoteText = document.getElementsByClassName('quote');
var quoteAuthor = document.getElementsByClassName('author');
var i=1;

function getRandomQuote(){
    if(i>=1){
        sliderContent[i-1].classList.add('hidden');
        sliderContent[i-1].classList.remove('visible');
        sliderContent[i].classList.remove('hidden');
        sliderContent[i].classList.add('visible');
    }
    if(i>=9){
        i = 0;
        sliderContent[9].classList.add('hidden');
        sliderContent[i].classList.remove('hidden');
        sliderContent[i].classList.add('visible');
    }
    i++;
}
function clickedButton(evt){
    if(evt.target.innerText==="Random Quote"){
        getRandomQuote();
    }else if(evt.target.innerText==="tweet"){
        window.open("https://twitter.com/intent/tweet?text="+"Check out my quote machine! \n "+quoteText[i].textContent+" "+'&mdash;'+quoteAuthor[i].textContent+"  \n https://github.com/serg-gavel/RandomQuoteMachine \n ",'_blank');
    }
}
function eventLoader(){
    sliderContent[0].classList.remove('hidden');
    sliderContent[0].classList.add('visible');
    document.addEventListener("click",clickedButton);
}
window.onload = eventLoader();