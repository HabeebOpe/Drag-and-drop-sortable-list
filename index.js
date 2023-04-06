const body = document.querySelector("body")
const li = document.querySelectorAll("li")

li.forEach(list =>{
  list.addEventListener("dragstart", ()=>{
    list.classList.add("draggable")
  });
  list.addEventListener("dragend", ()=>{
    list.classList.remove("draggable")
  })
})