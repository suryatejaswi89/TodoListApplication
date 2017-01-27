var listofTasks = document.getElementById('our-list').getElementsByTagName('li');
var headLine = document.getElementById("page-title");
var ourList = document.getElementById("our-list");
var newItem = document.getElementById("newTask");

for(i =0 ; i< listofTasks.length; i++){
  listofTasks[i].addEventListener("click", activateItem);
}
function activateItem(){
headLine.innerHTML = "You Selected  "+this.innerHTML;
}

newItem.addEventListener("keypress", addNewItem);
function addNewItem(e){
if(e.code==="Enter"){
var newItemValue = document.getElementById("newTask");
ourList.innerHTML += "<li>" + newItemValue.value + "</li>";
document.getElementById("newTask").value = " ";

}
}
