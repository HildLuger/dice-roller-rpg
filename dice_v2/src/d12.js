function d12click(){
    let d12 = Math.floor(Math.random() * 12) + 1;
    document.getElementById("resultd12").innerHTML = d12;
};
document.getElementById("rollButtond12").onclick = ()=>{
    setTimeout(d12click, 1000)
};