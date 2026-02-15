//letiables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
const precio_base = 2000

//Valores de los recargos 
const edad_18 = 0.1 // 10%
const edad_25 = 0.2 // 20%
const edad_50 = 0.3 // 30%

const casado_18 = 0.1 // 10%
const casado_25 = 0.2 // 20%
const casado_50 = 0.3 // 30%

const hijos_recargo = 0.2 // 20%

//Recargo
let recargo = 0
let recargo_total = 0

//Precio final 
let precio_final = 0

let activado = true

while (activado) {
  //Mensajes de alerta para ingresar datos 
  let nombre = prompt("Ingrese su nombre, por favor")
  let edad = parseInt(prompt("¿Cuantos años tiene? Ingrese solamente números"))
  let casado = prompt("¿Está casado actualmente?", "si/no").toLowerCase()

  //Comprobamos la edad del cónyuge, solamente si se está casado/a
  let edad_conyuge
  (casado === "si") ? edad_conyuge = parseInt(prompt("¿Que edad tiene su esposo/a? Ingrese solamente números")) : edad_conyuge = 0

  //Comprobamos la cantidad de hijos solamente si los tienen
  let hijos = prompt("¿Tiene hijos o hijas?", "si/no").toLowerCase()
  let cantidad_hijos
  (hijos === "si") ? cantidad_hijos = parseInt(prompt("¿Cuantos hijos tiene? Ingrese solamente números")) : cantidad_hijos = 0

  //Aquí debe calcular el recargo total basado en las respuestas ingresadas
  switch (true) {
    case (edad >= 18 && edad < 25):
      recargo = precio_base * edad_18
      recargo_total += recargo
      break
    case (edad >= 25 && edad < 50):
      recargo = precio_base * edad_25
      recargo_total += recargo
      break
    case (edad >= 50):
      recargo = precio_base * edad_50
      recargo_total += recargo
      break
    default:
      alert("Lo sentimos, no cumple con la edad mínima para cotizar")
      break
  }

  if (casado === "si") {
    switch (true) {
      case (edad_conyuge >= 18 && edad_conyuge < 25):
        recargo = precio_base * casado_18
        recargo_total += recargo
        break
      case (edad_conyuge >= 25 && edad_conyuge < 50):
        recargo = precio_base * casado_25
        recargo_total += recargo
        break
      case (edad_conyuge >= 50):
        recargo = precio_base * casado_50
        recargo_total += recargo
        break
      default:
        alert("Lo sentimos, su cónyuge no cumple con la edad mínima para cotizar y se le notificará a la policia")
        break
    }
  }

  if (hijos === "si") {
    recargo = precio_base * hijos_recargo * cantidad_hijos
    recargo_total += recargo
  }

  precio_final = precio_base + recargo_total
  //Resultado
  if (casado === "si") {
    alert(`Para el asegurado ${nombre}, con edad de ${edad} años, casado: ${casado}, edad del cónyuge: ${edad_conyuge} años, cantidad de hijos: ${cantidad_hijos}`)
  } else {
    alert(`Para el asegurado ${nombre}, con edad de ${edad} años, casado: ${casado}, cantidad de hijos: ${cantidad_hijos}`)
  }
  alert(`El recargo total es de: Q${recargo_total}`)
  alert(`El precio final de la cotización es de: Q${precio_final}`)

  let continuar = prompt("¿Desea realizar otra cotización?", "si/no").toLowerCase()
  if (continuar === "no") {
    activado = false
  }
}


