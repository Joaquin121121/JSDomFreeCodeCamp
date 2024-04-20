// /* 5 maneras de obtener elementos del Document */

// const uno = document.getElementById("el id")
// const dos = document.getElementsByClassName("la clase")
// const tres = document.getElementsByTagName(("el tag (li x ej)"))
// const cuatro = document.querySelector("div") /* Agarra el primer elemento con el tag/clase/id que pongamos */
// const cinco = document.querySelectorAll("div") /* Agarra todos los elementos con el tag/clase/id que pongamos */



/* Styling Elements */

// const title = document.querySelector("#main-header")
// console.log("🚀 ~ title:", title)

// title.style.color = "red" /* Inline Styling (solo funciona en un solo elemento)*/

// /* Para cambair css de un conj de elementos */

// const jugadores = document.querySelectorAll("li")
//  console.log("🚀 ~ jugadores:", jugadores)

// for (let i = 0; i < jugadores.length; i++){
//     jugadores[i].style.fontSize = "2rem"
// }


//  /* Create Elements */

// const ul = document.querySelector("ul")
// const li = document.createElement("li")


// /* Add Elements */

// ul.append(li)


// /* Modify Text */

// // const firstListItem = document.querySelector("li")
// // console.log("🚀 ~ firstListItem:", firstListItem.innerText)
// // console.log("🚀 ~ firstListItem:", firstListItem.textContent)
// // console.log("🚀 ~ firstListItem:", firstListItem.innerHTML) /* No usar, security concerns. Le permite al usuario controlar el js */

// li.innerText = ("Joel Embiid")

// /* Modifying attributes and classes */
// li.setAttribute("id", "main-heading")
// li.removeAttribute("id")

// const title = document.querySelector("#main-heading")
// console.log(title.getAttribute("id"))

// li.classList.add("list-items")
// li.classList.remove("list-items")
// console.log(li.classList.contains("list-items"))

// /* Deleting Elements */
// li.remove()

// /* Parent Node Traversal */

// let ul = document.querySelector("ul")
// console.log(ul.parentNode.parentNode)
// console.log(ul.parentElement.parentElement)

// const html = document.documentElement

// console.log(html)

// console.log(html.parentNode) 
// console.log(html.parentElement) /* El Document Node y el Element Node no son el tipo mismo de Node */


// /* Child Node Traversal */

// let ul = document.querySelector("ul")

// console.log(ul.childNodes) /* Es tan larga pq las indentatios son tomadas como text nodes */
// console.log(ul.firstChild)
// console.log(ul.lastChild)

// /* ul.firstChild.style.color = "blue" */ /* No funciona pq el primer elemento es el indentado */

// ul.childNodes[1].style.backgroundColor = "blue"

// let ul = document.querySelector("ul")

// console.log(ul.children) /* Child Elements */

// console.log(ul.firstElementChild)


// /* Sibling Node Traversal*/

// let ul = document.querySelector("ul")
// const div = document.querySelector("div")


// console.log(div.childNodes)

// console.log(ul.previousSibling)
// console.log(ul.nextSibling)


/* Event Listeners */

// element.addEventListener("click", function)


// const li = document.querySelector(".list-item-2")
// const button2 = document.createElement("button")
// button2.innerText = "Confirmo"
// li.append(button2)

// const alertBtn = () =>{
//     alert("Banco una banda")
// }

// button2.addEventListener("click", alertBtn)

// const div = document.getElementsByClassName('container')

// const changeBackgroundToRed = () =>{
//     div[0].style.backgroundColor = "red"
// }


// li.addEventListener("mouseover", changeBackgroundToRed)

// /* Reveal Element */

// const revealBtn = document.querySelector(".reveal-btn")
// const hiddenContent = document.querySelector(".hidden")

// const revealContent = () =>{
//     if(hiddenContent.classList.contains("hidden")){
//         hiddenContent.classList.remove("hidden")
//         revealBtn.innerText = "Ocultar"
//     }
//     else{
//         hiddenContent.classList.add("hidden")
//         revealBtn.innerText = "Revelar"
//     }
// }

// revealBtn.addEventListener("click", revealContent)


// /* Event Propagation */

// window.addEventListener("click", function(){
//     console.log("window")
// }, false) /* true para capturing phase, false para bubbling */
// document.addEventListener("click", function(e){
//     console.log("Document")
//     /* e.stopPropagation()  */
// }, {once: true} /* El listener se elimina despeus de ser ejecutado una vez */)
// document.querySelector(".div2").addEventListener("click", function(){
//     console.log("div2")
// }, false)
// document.querySelector(".div1").addEventListener("click", function(){
//     console.log("div1")
// }, false)
// document.querySelector(".button").addEventListener("click", function(e){
//     e.preventDefault()
//     console.log(e.target.innerText = "Clicked!") /* La e representa el Event Object --> tiene mucha info util. Le puedo poner .propiedad para que muestre esa propiedad */
// }, false)


/* Event Delegation */

/* It allows users to append a single event listener to a parent element that adds it to all of its present and future descendants that match a selector */

document.querySelector("#mvps").addEventListener("click", function(e){
   console.log(e.target.getAttribute("id") + " is clicked") 
   const target = e.target
   if (target.matches("li")){
    target.style.background = "red"
   }
})

const mvps = document.querySelector('#mvps')
const newMvp = document.createElement("li")

newMvp.innerText = "Jayson Tatum"
mvps.append(newMvp)