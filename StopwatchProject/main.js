let count = 0
const play = document.querySelector("#play")
const restart = document.querySelector("#restart")
let seconds = 0
let hours = 0
let minutes = 0
const timer = document.querySelector("#time")
let isRunning = false

function formateador(h, m, s){
    m = m < 10 ? "0" + m: m
    s= s < 10 ? s = "0" + s: s
    return `${h}:${m}:${s}` 
}

play.addEventListener("click", function(){
    if(isRunning){
        isRunning = false
        play.innerText = "Play"
        clearInterval(intervalID)
    }
    else{
        isRunning = true
        play.innerText = "Pause"
        intervalID = setInterval(stopWatch, 1000)
    }
})

restart.addEventListener("click", function(){
    count = hours = minutes = seconds = 0
    isRunning = false
    play.innerText = "Play"
    timer.innerText = formateador(0, 0, 0)
    clearInterval(intervalID)
})

const stopWatch = () =>{
    if (isRunning){
        count++
        if (count % 3600 == 0){
            hours++
            minutes = 0
            seconds = 0
        }else if (count % 60 == 0){
            minutes++
            seconds = 0
        }else{
            seconds++
        }
        timer.innerText = formateador(hours, minutes, seconds)
}}

