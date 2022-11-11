var Name=document.getElementById("name");
var surname=document.getElementById("surname");
var age=document.getElementById("age");
var nationality=document.getElementById("nationality");
var position=document.getElementById("position");
var experience=document.getElementById("experience");
var button=document.getElementById("my_button");

var array=[Name,surname,age,nationality,position,experience]
console.log(array[5].value)
console.log(experience.value)

button.addEventListener("click",function addData(e){
    e.preventDefault()
    var line=document.createElement("tr");
    for(let i=0;i<array.length;i++){
        var data=document.createElement("td");
        data.append(array[i].value);
        console.log(data)
        line.appendChild(data);
    }
    var deletebutton=document.createElement('button');
    deletebutton.text_content="Delete";
    deletebutton.id="delete";
    deletebutton.class_name="btnDelete"
    line.appendChild(deletebutton);
    function deleteLine(){

    }
    deletebutton.onclick = deleteLine
})