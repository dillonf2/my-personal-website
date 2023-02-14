
const p=document.createElement("p");
p.textContent="Created via JavaScript!"

function addingEventListener(){
    function clickAlert(){
        alert(`Great Job! You're good at listening to instructions!`)
    }
    theButton.addEventListener('click', clickAlert)
}
const theButton=document.getElementById("button")
addingEventListener(theButton)

theButton.addEventListener('click',function(){
    theButton.style.color='purple'
    theButton.style.textDecoration='underline'
})