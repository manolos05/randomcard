




window.onload = () =>{
    document.querySelector(".card").classList.add(suit());
    document.querySelector(".numeRo").innerHTML= number();
}

const number = () => {
    const num = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    let numRan = Math.floor(Math.random() * num.length)
    return num[numRan]
}

const suit = () => {
    let su = ["spade", "diamond", "club", "heart"];
    let suRan = Math.floor(Math.random()* su.length)
    return su[suRan]

    
}