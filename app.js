var a =[];
var input= document.getElementById("input");
var t = document.getElementById("todolist");
var btn = document.getElementById("button");
btn.onclick = click ;

function click() {
    a.push(input.value);
    console.log(a);
    input.value = "" ;
    showlist();
}

function showlist(){
    t.innerHTML = " " ;
    a.forEach(function(n, i) {
        t.innerHTML +=
        "<li>"+
        n+
        "<a onclick='editItem("+
        i +
        ")'>Edit</a>"+
        "<a onclick='deleteItem(" +
        i +
        ")'>&times | </a></li>" ;

    });
}

function deleteItem(i){
    a.splice(i, 1);
    showlist();
}

function editItem(i){
    var nv = prompt("Please insert new value");
    a.splice(i, 1, nv);
    showlist();
}
