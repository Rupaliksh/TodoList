const toDoContainer = document.getElementById("toDoContainer")
const inputField = document.getElementById("inputField")
const addButton = document.getElementById("add")

addButton.addEventListener("click",function(eve){
    eve.preventDefault()
    const paragraph = document.createElement("p")
    paragraph.classList.add("paragraphStyling")
    paragraph.textContent = inputField.value
    toDoContainer.appendChild(paragraph)
    inputField.value = ""
    
    paragraph.addEventListener("click",function(){
        paragraph.style.textDecoration = "line-through"
    })

    paragraph.addEventListener("dblclick",function(){
        toDoContainer.removeChild(paragraph)
    })
})