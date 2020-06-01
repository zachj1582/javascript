import './/shopping-list.css'


//i
let unordered = document.querySelector("#list")
let input = document.getElementById("item")
let button = document.querySelector("#button")


//ii, iii, iv
const click = () => {
    let input = document.getElementById("item").value 
    document.getElementById("item").value = ''

}


//v
let listItem = document.createElement("li")
let span = document.createElement("span")
let button2 = document.createElement("button")


//vi
listItem.appendChild(span)
listItem.appendChild(button2)


//vii
span.innerHTML = input.value
button2.textContent = "Delete"


//viii
unordered.appendChild(listItem)



//ix
button2.addEventListener('click', () => {
    listItem.remove()
})


//x
input.focus()