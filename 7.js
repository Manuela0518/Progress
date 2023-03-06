
let spaceship = {
    velocity: 0,
    speedup: function(acceleration) {
        this.velocity += acceleration
    }
}

function RegisterSpaceship() {
    spaceship.name = prompt("Informe o nome da nave")
    spaceship.type = prompt("informe o tipo da nave")
    spaceship.maxvelocity = Number(prompt("Informe a velocidade máxima da nave (km/s)"))
}

function acelerate() {
 let acceleration = Number(prompt("Quanto você quer acelerar a nave?"))
 spaceship.speedup(acceleration)
 if (spaceship.velocity > spaceship.maxvelocity) {
    alert("Velocidade máxima excedida!" + "\nVelocidade da nave: " + spaceship.velocity + " km/s" + "\nVelocidade máxima da nave: " + spaceship.maxvelocity)
 }
}

function stop() {
    alert("Nome: " + spaceship.name + "\nTipo: " + spaceship.type + "\nVelocidade da nave: " + spaceship.velocity + " km/s\nVelocidade máxima da nave: " + spaceship.maxvelocity)
}

function showmenu() {
    let choseoption
    do {
        choseoption = prompt("Você deseja:\n1- Acelerar\n2- /Parar")
          switch (choseoption) {
            case "1": 
                acelerate()
                break
            case "2":
                stop()
                break
                default:
                    alert("Opção inválida")
        }
    } while (choseoption != "2")
}

RegisterSpaceship()
showmenu()