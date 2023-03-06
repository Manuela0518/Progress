let nave = prompt("digite o nome da espaçonave")
let caractere = prompt("Qual caractere deseja substituir?")
let caractere2 = prompt("Por qual caractere deseja substituir?")
let novanave = ""

for(let i = 0; i < nave.length; i++) {
    if(nave[i] == caractere) {
     novanave += caractere2  
    } else {
        novanave += nave[i]
    }
}

alert("Nova nave: " + novanave)