const hitchedSpaceships = [
    ["Deméter", 13, true],
    ["Phoenix", 8, true],
    ["FireForce", 15, false],
    ["Pineapple", 7, true],
    ["X90", 18, false],
    ["X75", 23, true]
]


let SuperSpaceship = hitchedSpaceships.filter(spaceship =>  {
        return spaceship[1] > 15
}).map(spaceship => {
        return spaceship[0]
})


let NotReadySpaceship = hitchedSpaceships.findIndex(spaceship => {
    return spaceship[2] == false
})

let HighLightSpaceship = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = "Super naves: " + SuperSpaceship.join(", ") + "\nPlataforma de naves não engatadas: " + (NotReadySpaceship +1) + "\nTodas as naves: " + HighLightSpaceship.join(", ")
alert(message)


let Base = {
    name: "A7968",
    platform: 4,
    Gethitched: true,
    Tenents: ["Ana Júlia", "Paulo", "Thiago"],
    TurnOn: function(){
        alert("Preparando propulsão")
    }
}

alert(Base.Tenents)


let spaceships = [
    {name: "Phoenix", crew: 15},
    {name: "056N", crew: 63},
    {name: "Silver", crew: 23}

]

spaceships.forEach(spaceships => {
    alert(spaceships.name + " tem " + spaceships.crew + " tripulantes.")
})

Base.TurnOn()