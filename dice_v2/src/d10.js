function d10click(){
    let d10 = Math.floor(Math.random() * 10) + 1;
    document.getElementById("resultd10").innerHTML = d10;
};
document.getElementById("rollButtond10").onclick = ()=>{
    setTimeout(d10click, 1000)
};