const InputBox = document.getElementById("input-box");
const ListCont = document.getElementById("list-container");

function AddTask()
{
    if (InputBox.value==='') {
        alert("Your input is empty!");
    }

    else{
        let li =document.createElement("li");
        li.innerHTML = InputBox.value;
        ListCont.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    InputBox.value = "";
    SaveData();
}

ListCont.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if (e.target.tagName ==="SPAN") {
        e.target.parentElement.remove();
        SaveData();
    }
},false);


function SaveData() {
    localStorage.setItem("data",ListCont.innerHTML);
}

function ShowList() {
    ListCont.innerHTML=localStorage.getItem("data");
}

ShowList();