// Variables
let jugador
let computadora

alert ("Bienvenido a ¿Piedra, Papel o Tijera?\nEstas listo?, presiona Aceptar para continuar ")

// Ciclos e iteraciones

do {
    jugador = parseInt(prompt("Elegi una opción: \n 1. Piedra \n 2. Papel \n 3. Tijera \n 4. Salir"))

    // Eleccion del jugador
    switch (jugador) {
        case 1:
            alert('Elegiste Piedra')
            break
        case 2:
            alert('Elegiste Papel')
            break
        case 3:
            alert('Elegiste Tijera')
            break
        case 4:
            alert('Gracias por jugar conmigo!\nVolve cuando estes listo!')
        break
        default:
            alert('La opción seleccionada no es valida.\nProba otra vez...')
    }

    if (jugador <4) {
        // Numero aleatorio 1,2 o 3
        computadora = Math.floor(Math.random() * 3) + 1
        
        switch(computadora) {
            case 1:
                alert('Yo elijo Piedra')
                break
            case 2:
                alert('Yo elijo Papel')
                break
            case 3:
                alert('Yo elijo Tijera')
                break
        }
    }

    // Elección Piedra
    if(jugador == 1 && computadora == 2) {
        alert('Piedra Vs Papel:\nPerdiste')
    } else if (jugador == 1 && computadora == 3) {
        alert('Piedra Vs Tijera:\nGanaste')  
    } else if (jugador == 1 && computadora == 1) {
        alert('Piedra Vs Piedra:\nEmpate')
    }

    // Elección Papel
    if (jugador == 2 && computadora == 1) {
        alert('Papel Vs Piedra:\nGanaste') 
    } else if (jugador == 2 && computadora == 3){
        alert('Papel Vs Tijera:\n Perdiste')
    } else if (jugador == 2 && computadora == 2){
        alert('Papel Vs Papel:\nEmpate')
    }

    // Elección Tijera
    if (jugador == 3 && computadora == 1){
        alert('Tijera Vs Piedra:\nPerdiste')
    } else if (jugador == 3 && computadora == 2) {
        alert ('Tijera Vs Papel:\nGanaste')
    } else if (jugador == 3 && computadora == 3) {
        alert('Tijera Vs Tijera:\nEmpate')
    }

} while (jugador !==4)

