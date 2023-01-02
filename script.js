var cajero = [];
var monto = 0;
var div = 0;
var papeles = 0;
var entregado = [];
var resultado = document.getElementById("resultado");

var btnRetiro = document.getElementById("btn-retiro");

btnRetiro.addEventListener("click", entregarDinero);

//Clase crear billetes
class Billete {
  constructor(Valor, Cantidad) {
    this.valor = Valor;
    this.cantidad = Cantidad;
  }
}

cajero.push(new Billete(50, 3));
cajero.push(new Billete(20, 2));
cajero.push(new Billete(10, 2));

function entregarDinero() {
  var txtMonto = document.getElementById("txt-monto");
  monto = parseInt(txtMonto.value);

  for (var b of cajero) {
    if (monto > 0) {
      div = Math.floor(monto / b.valor);
      if (div > b.cantidad) {
        papeles = b.cantidad;
      } else {
        papeles = div;
      }
      entregado.push(new Billete(b.valor, papeles));
      monto = monto - b.valor * papeles;
    }
  }
  if (monto > 0) {
    resultado.innerHTML = "El cajero no tiene dinero";
    resultado.innerHTML = "El cajero no tiene dinero";
  } else {
    for (var e of entregado) {
      if (e.cantidad > 0) {
        resultado.innerHTML = resultado.innerHTML +
                              e.cantidad +
                              " billetes de $" +
                              e.valor +
                              "<br>";
      }
    }
  }
}
