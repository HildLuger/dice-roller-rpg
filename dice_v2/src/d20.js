function d20click(){
    let d20 = Math.floor(Math.random() * 20) + 1;
    document.getElementById("resultd20").innerHTML = d20;
};
document.getElementById("rollButtond20").onclick = ()=>{
    setTimeout(d20click, 1000)
};