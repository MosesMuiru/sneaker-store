// const anime = require("animejs")

const openBtn = document.querySelector(".open")
const closeBtn = document.querySelector(".close")
const navList = document.querySelector(".nav-links")
const cart = document.querySelector(".cart-icon")

// buttons for next images
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
// for media query
const nextImage = document.querySelector(".next-image")

const neext = document.querySelectorAll(".ne")
const newp = document.getElementById("currentImage")
// adding and removing shoes
const addShoe = document.querySelector(".add-shoe")
let count = document.querySelector(".count")
const removeShoe = document.querySelector(".remove-shoe")
// adding to cart
const cartIcon = document.querySelector(".cart-icon")
const addCart = document.querySelector(".addCart")
// the card that will appear after being added
let selected = document.querySelector(".selected")

const trym = document.querySelector(".try")

window.addEventListener("DOMContentLoaded", () => {
    console.log("er")
    closeBtn.style.opacity = 0
    navList.style.opacity = 0;
    // openBtn.style. = 0;
    
})
closeBtn.addEventListener("click",() => {
    closeBtn.style.opacity = 0
    openBtn.style.opacity = 1;
    setTimeout(() =>{
        navList.style.opacity = 0;
    },100 )
    console.log("btn-clike")
})
// when the open button is clicked

openBtn.addEventListener("click", () => {
    console.log("opne")
    closeBtn.style.opacity = 1
    openBtn.style.opacity = 0;

    setTimeout(() =>{
        navList.style.opacity = 1;
        navList.style.zindex = 10
    },100 )
})

var links = 0
let sample = "this is a sample from the project"


// when the icon is c;licked it shold open a page
cartIcon.addEventListener("click",()=>{
    setTimeout(() => {

    selected.classList.toggle ("select")



    },100)
    console.log("clicked")
})

// array of objects that will be displayed once a button has been clicked or any other action has taken place


let actionObjects = [{
                    image:"images/image-product-1.jpg",
                    name:"converse j1",
                    info:"this is cool shoe for any weather",
                    size:39,
                    totalPrice:`1200 * ${count} " " total price`
                    },{
                        image:"images/image-product-2.jpg",
                        name:"converse j2",
                        info:"this is latesr shoe fr the summer",
                        size:40,
                        totalPrice:`1400 * ${count} total price`
                    },{
                        image:"images/image-product-3.jpg",
                        name:"converse22",
                        info:"the best of the best",
                        size:50,
                        totalPrice:`1400 * ${count} total price`
                    },
                {
                    image:"images/image-product-4.jpg",
                    name:"converse22",
                    info:"the best of the best",
                    size:50,
                    totalPrice:`1400 * ${count} total price`
                }]
                

let currentImage = 0;


let currentPerson = null
// creating a function for showing the next person
function nextshoe(shoe){
   currentPerson = actionObjects[currentImage]
   newp.src = currentPerson.image
//    console.log(newp.src)
}
nextBtn.addEventListener("click", ()=>{
   

    currentImage++;
    if(currentImage === 3)
    {
        currentImage = 0
    }


    console.log("wewe")
    nextshoe(currentImage)
})

prevBtn.addEventListener("click", () => {
    currentImage--
    if(currentImage < 0){
        currentImage = 3
    }
    console.log("cl")
     nextshoe(currentImage)
})

// 
// when the image is clicked it should trigger the shoe in the image

neext.forEach((element,index) => {
    element.addEventListener("click", ()=>{
        // currentImage = index
        console.log(index)
        currentPerson = actionObjects[index]
        newp.src = currentPerson.image
        // console.log(newp.src)
        // console.log(element)
    })
    
});
// console.log(isArray(neext))
// 


console.log(actionObjects.length)

// creating the count
let currentCount = 1

addShoe.addEventListener("click",() => {
    
 
    if(currentCount > 10)
    {
        currentCount = 0
    }
    count.textContent = currentCount++

})
removeShoe.addEventListener("click",()=>{
    count.textContent = currentCount--
    if(currentCount < 1)
    {
        currentCount = 10
    }
})


// 
// 
// this part is when the add chart is triggered
// should add the type of shoe that has been selected
addCart.addEventListener("click", () => {
    
    console.log(currentCount)


    console.log("btn lcik")
})

