var sliderContent = document.getElementsByClassName('content-container');
var i=0;
var prevQuote=0;
var maxQuotes=6;
function getRandomQuote(){
	prevQuote=i;
	i=Math.floor(Math.random() * (maxQuotes - 0)) + 0;
	if(prevQuote==i){
		getRandomQuote();
	}
	
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
        window.open("https://twitter.com/intent/tweet?text="+"Check out https://github.com/serg-gavel/RandomQuoteMachine \n\" "+sliderContent[i].children[1].children[0].innerText+" -"+sliderContent[1].children[1].children[1].innerText+"\"My first forked project-EEC \n",'_blank');
    }
}
function eventLoader(){
    getRandomQuote();
    document.addEventListener("click",clickedButton);
}
window.onload = eventLoader();
