function d8click(){
    let d8 = Math.floor(Math.random() * 8) + 1;
    document.getElementById("resultd8").innerHTML = d8;
};
document.getElementById("rollButtond8").onclick = ()=>{
    setTimeout(d8click, 1000)
};