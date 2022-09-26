function d4click(){
    let d4 = Math.floor(Math.random() * 4) + 1;
    document.getElementById("resultd4").innerHTML = d4;
};
document.getElementById("rollButtond4").onclick = ()=>{
    setTimeout(d4click, 1000)
};