let piloto = prompt("Qual o seu nome?")

let velocity = 0
let newvelocity = prompt("Digite a velocidade desejada")
let velocityconfirm = confirm("Estamos acelerando para " + newvelocity + " km/s")
let estado = "parada"



if (velocityconfirm) {
  velocity = newvelocity 
}



    

if (velocity <= 0)
{
 alert("A nave está parada")
} else {
    if (velocity <= 40){
        estado = "velocidade insuficiente"
    } else {
        if (velocity < 100) {
            alert("Velocidade estável, decolando...")
            estado = "Estável"
        } else {
            if (velocity <= 200) {
                alert("Velocidade muito elevada, a nave pode instabilizar")
                estado = "Velocidade elevada."
            } else {
                if (velocity < 300) {
                    alert("Diminua a velocidade!")
                    estado = "Instável"
                } else {
                    if (velocity >= 300) {
                        alert("Superaquecendo!")
                        estado = "Crítico"
                    }
                }
            }
        }
    }
}





alert("Piloto: " + piloto + "\nVelocidade: " + velocity + " km/s" + "\nEstado: " + estado)