function d6click(){
    let d6 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("resultd6").innerHTML = d6;
};
document.getElementById("rollButtond6").onclick = ()=>{
    setTimeout(d6click, 1000)
};