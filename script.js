
const p=document.createElement("p");
p.textContent="Created via JavaScript!"

const theButton=document.getElementById("button")
let theButtonTracker=`unclicked`

theButton.addEventListener('click',function(){
    theButton.style.color='purple'
    theButton.style.textDecoration='underline'
})

addingEventListener()
function addingEventListener(){
	
	// this entire function is called on every click
	function clickAlert(){
		if (theButtonTracker==='unclicked'){
			alert(`Great Job! You're good at listening to instructions!`)
			theButton.innerHTML="Don't click me again!"
			theButtonTracker=`clicked`
		} else {
			alert(`You Fool! Listen to the instructions!`)
			theButton.innerHTML="Click Me!"
			theButtonTracker=`unclicked`
		}
	}
	
	theButton.addEventListener('click', clickAlert)
}