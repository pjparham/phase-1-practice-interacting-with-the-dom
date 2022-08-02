 
let seconds = 0
const counter = document.getElementById("counter")
let isPaused = false

 function editCounter(){
    function incrementSeconds() {
        // if(!isPaused){
        //     seconds =+ 1;
        //     counter.innerText = seconds
        // }
        // else{
        //     counter.innerText = seconds
        // }
        seconds += 1;
        counter.innerText = seconds
    }
    let firstInterval = setInterval(incrementSeconds, 1000)
    function changeNumber(){
        const minus = document.getElementById("minus")
        const plus = document.getElementById("plus")
        plus.addEventListener("click", () => {
            seconds += 1;
            counter.innerText = seconds //adding the innerText change into these event listeners allows us to see the counter change more fluidly
        })
        minus.addEventListener("click", () => {
            seconds -= 1;
            counter.innerText = seconds
        })
    }
    changeNumber()

    function likeNumber(){
        const heart = document.getElementById("heart");
        const likesList = document.querySelector(".likes");
        let likes = 0;
        let likeArray = [];
        // const displayLikes = document.createElement('li'); //putting this up here creates one li element with that const name. the event listener would just change the text content of it each time its invoked if i kept this up here 
        // console.log(likesList, displayLikes)
        heart.addEventListener("click", () => {
            if(seconds === likeArray.find(element => element === seconds)){
                let likeNode = document.getElementById(`${seconds}`)
                likes += 1
                likeNode.innerText = `${seconds} was liked ${likes} times.`
            }
            else{ 
                likes = 1
                const displayLikes = document.createElement('li'); //by moving this const inside of the event listener, a new li is created each time the heart is clicked
                displayLikes.id = seconds
                displayLikes.innerText = `${seconds} was liked ${likes} time.`;
                likesList.appendChild(displayLikes);
                likeArray.push(seconds)
            }
        })
    }
    likeNumber()

    function pauseCounter(){
        const pauseButton = document.getElementById("pause")
        pauseButton.addEventListener("click", () => {
        if(!isPaused){
                clearInterval(firstInterval)
                isPaused = true
                pauseButton.innerText = `resume`;
                document.getElementById("minus").disabled = true
                document.getElementById("plus").disabled = true
                document.getElementById("heart").disabled = true
            }
        else{
                isPaused = false
                pauseButton.innerText = 'pause'
                document.getElementById("minus").disabled = false
                document.getElementById("plus").disabled = false
                document.getElementById("heart").disabled = false
                // console.log("I was clicked while isPaused is true")
                // setInterval(() => seconds++, 1000)
                firstInterval = setInterval(incrementSeconds, 1000) //if you put a let here, it redeclares that every time this is triggered which caused the increasing speed of the counter
            }
        // }
        })
    }
    pauseCounter()

    function commentBox(){
        const list = document.getElementById("list")
        const input = document.getElementById("comment_input")
        const form = document.getElementById("comment-form")
        form.addEventListener('submit', (e) =>{
            e.preventDefault()
            let inputValue = e.target.comment_input.value
            let p = document.createElement('p')
            p.textContent = inputValue
            list.appendChild(p)
            form.reset()
        })
    }
    commentBox()
}

 editCounter()

 //need to update likenumber so that each seconds value only has one line and the like count can change 