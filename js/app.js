var calculadora = {
    Memoria: "0",
    puntoDecimal: "",
    cantidad1: "",
    cantidad2: "",
    VecesOp: 1,
    ValorBoton: "",
    operador: "",
    Resultado: 0,
    estadoError: 0,

    animacionuno: function(tecla){
      document.getElementById(tecla).style.transform="scale(0.9)"
      setTimeout(function(){
                document.getElementById(tecla).style.transform="scale(1)";}, 200)
    },

    mostrarresultado: function(valorEv){

        if (calculadora.ValorBoton=="on") {
            calculadora.Memoria = "0";
            calculadora.Resultado = 0;
            calculadora.cantidad1 = "";
            calculadora.ValorBoton = "";
            calculadora.operador = "";
            calculadora.VecesOp = 1;
            calculadora.estadoError = 0;
        };

        if (calculadora.estadoError==0) {

          if (calculadora.ValorBoton == "punto" &&
              calculadora.Memoria.indexOf(".") == -1) {
                calculadora.puntoDecimal = "."
          };

          if (calculadora.ValorBoton == "0" &&
              calculadora.Memoria=="0" &&
              calculadora.puntoDecimal=="") {
                calculadora.ValorBoton = ""
              };

          if (calculadora.ValorBoton == "0" ||
              calculadora.ValorBoton == "1" ||
              calculadora.ValorBoton == "2" ||
              calculadora.ValorBoton == "3" ||
              calculadora.ValorBoton == "4" ||
              calculadora.ValorBoton == "5" ||
              calculadora.ValorBoton == "6" ||
              calculadora.ValorBoton == "7" ||
              calculadora.ValorBoton == "8" ||
              calculadora.ValorBoton == "9") {

              if (calculadora.Memoria=="0" &&
                  calculadora.puntoDecimal=="") {
                calculadora.Memoria = "";
              };

              if (calculadora.Memoria.length+1<=8) {
                  calculadora.Memoria = calculadora.Memoria+
                                        calculadora.puntoDecimal+
                                        calculadora.ValorBoton
              };
              calculadora.puntoDecimal = "";
      };

      if (calculadora.ValorBoton == "sign" && calculadora.Memoria !== "0" ) {
            if ( calculadora.Memoria.substr(0,1) == "-") {
                calculadora.Memoria = calculadora.Memoria.substr(1, calculadora.Memoria.length)
            } else {
              calculadora.Memoria = "-" + calculadora.Memoria
            };
            calculadora.ValorBoton = ""
        };

        if (calculadora.ValorBoton == "mas" ||
            calculadora.ValorBoton == "por" ||
            calculadora.ValorBoton == "menos" ||
            calculadora.ValorBoton == "dividido" ||
            calculadora.ValorBoton == "igual") {

              if (calculadora.cantidad1!=="") {

                    if (calculadora.VecesOp==1) {
                        calculadora.cantidadReserva = calculadora.Memoria
                    };
                    var resultado;
                    if (calculadora.operador == "mas") {
                        resultado = Number(calculadora.cantidad1) + Number(calculadora.cantidadReserva)
                    };
                    if (calculadora.operador == "por") {
                        resultado = Number(calculadora.cantidad1) * Number(calculadora.cantidadReserva)
                    };
                    if (calculadora.operador == "menos") {
                        resultado = Number(calculadora.cantidad1) - Number(calculadora.cantidadReserva)
                    };
                    if (calculadora.operador == "dividido") {
                        resultado = Number(calculadora.cantidad1) / Number(calculadora.cantidadReserva)
                    };
                    if ((Math.round(resultado * 100) / 100)>99999999) {
                        calculadora.Memoria = "Err";
                        calculadora.estadoError = 1;
                    }else {
                      calculadora.Memoria = (Math.round(resultado * 100) / 100).toString();
                      calculadora.cantidad1 = calculadora.Memoria;
                      calculadora.VecesOp = 2;
                    }
              };

              if (calculadora.ValorBoton !== "igual") {
                 calculadora.operador = calculadora.ValorBoton;
                 calculadora.cantidad1 = calculadora.Memoria;
                 calculadora.Memoria = "";
                 calculadora.VecesOp = 1;
              }
        };

        calculadora.ValorBoton = "";
        var pantalla = document.getElementById("display");
        pantalla.textContent = calculadora.Memoria

      };
   },

    on: function(){
        calculadora.animacionuno("on");
        calculadora.ValorBoton = "on";
        calculadora.mostrarresultado()
    },

    sign: function(){
        calculadora.animacionuno("sign");
        calculadora.ValorBoton = "sign";
        calculadora.mostrarresultado()
    },

    raiz: function(){
        calculadora.animacionuno("raiz");
        calculadora.ValorBoton = "raiz";
        calculadora.mostrarresultado()
    },

    dividido: function(){
        calculadora.animacionuno("dividido");
        calculadora.ValorBoton = "dividido";
        calculadora.mostrarresultado()
    },

    siete: function(){
        calculadora.animacionuno("7");
        calculadora.ValorBoton = "7",
        calculadora.mostrarresultado()
    },

    ocho: function(){
        calculadora.animacionuno("8");
        calculadora.ValorBoton = "8",
        calculadora.mostrarresultado()
    },

    nueve: function(){
        calculadora.animacionuno("9");
        calculadora.ValorBoton = "9";
        calculadora.mostrarresultado()
    },

    por: function(){
        calculadora.animacionuno("por");
        calculadora.ValorBoton = "por";
        calculadora.mostrarresultado()
    },

    cuatro: function(){
        calculadora.animacionuno("4");
        calculadora.ValorBoton = "4";
        calculadora.mostrarresultado()
    },

    cinco: function(){
        calculadora.animacionuno("5");
        calculadora.ValorBoton = "5";
        calculadora.mostrarresultado()
    },

    seis: function(){
        calculadora.animacionuno("6");
        calculadora.ValorBoton = "6";
        calculadora.mostrarresultado()
    },

    menos: function(){
        calculadora.animacionuno("menos");
        calculadora.ValorBoton = "menos";
        calculadora.mostrarresultado()
    },

    uno: function(){
        calculadora.animacionuno("1");
        calculadora.ValorBoton = "1";
        calculadora.mostrarresultado()
    },

    dos: function(){
        calculadora.animacionuno("2");
        calculadora.ValorBoton = "2";
        calculadora.mostrarresultado()
    },

    tres: function(){
        calculadora.animacionuno("3");
        calculadora.ValorBoton = "3";
        calculadora.mostrarresultado()
    },

    cero: function(){
        calculadora.animacionuno("0");
        calculadora.ValorBoton = "0";
        calculadora.mostrarresultado()
    },

    punto: function(){
        calculadora.animacionuno("punto");
        calculadora.ValorBoton = "punto";
        calculadora.mostrarresultado()
    },

    igual: function(){
        calculadora.animacionuno("igual");
        calculadora.ValorBoton = "igual";
        calculadora.mostrarresultado()
    },

    mas: function(){
        calculadora.animacionuno("mas");
        calculadora.ValorBoton = "mas";
        calculadora.mostrarresultado()
    }
};

document.getElementById("on").onclick=calculadora.on;
document.getElementById("sign").onclick=calculadora.sign;
document.getElementById("raiz").onclick=calculadora.raiz;
document.getElementById("dividido").onclick=calculadora.dividido;
document.getElementById("7").onclick=calculadora.siete;
document.getElementById("8").onclick=calculadora.ocho;
document.getElementById("9").onclick=calculadora.nueve;
document.getElementById("por").onclick=calculadora.por;
document.getElementById("4").onclick=calculadora.cuatro;
document.getElementById("5").onclick=calculadora.cinco;
document.getElementById("6").onclick=calculadora.seis;
document.getElementById("menos").onclick=calculadora.menos;
document.getElementById("1").onclick=calculadora.uno;
document.getElementById("2").onclick=calculadora.dos;
document.getElementById("3").onclick=calculadora.tres;
document.getElementById("0").onclick=calculadora.cero;
document.getElementById("punto").onclick=calculadora.punto;
document.getElementById("igual").onclick=calculadora.igual;
document.getElementById("mas").onclick=calculadora.mas;

/*


2:42 pm
Y después se coloca en cada una de las funciones de las teclas.
menos: function(){
this.animacionuno("menos");
this.num1 = Number(this.pantalla);
this.pantalla = "",
this.opcion = 2,
this.auxestado = 0,
this.signo = 0,
this.auxnum = 0,
this.auxestado = 0,
this.decimal = 0,
calculadora.mostrarresultado();
on: function(){
this.animacionuno("on");
this.pantalla = "0",
this.decimal = 0,
this.signo = 0,
this.stop = 0,
this.controlen = 8
this.num1 = 0,
this.auxestado = 0,
this.auxnum = 0,
this.opcion = 0,
this.auxresultado = 0,
calculadora.mostrarresultado();
},

*/
