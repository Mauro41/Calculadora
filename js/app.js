var calculadora = {
    valor: 0,
    operador: '',
    operando: 0,

    animacionuno: function(tecla){
      document.getElementById(tecla).style.transform="scale(0.9)"
      setTimeout(function(){
                document.getElementById(tecla).style.transform="scale(1)";}, 200)
    },

    on: function(){
        calculadora.animacionuno("on");
        this.viewdisplay()
    },

    sign: function(){
        calculadora.animacionuno("sign");
        this.viewdisplay()
    },

    raiz: function(){
        calculadora.animacionuno("raiz");
        this.viewdisplay()
    },

    dividido: function(){
        calculadora.animacionuno("dividido");
        this.viewdisplay()
    },

    siete: function(){
        calculadora.animacionuno("7");
        this.viewdisplay()
    },

    ocho: function(){
        calculadora.animacionuno("8");
        this.viewdisplay()
    },

    nueve: function(){
        calculadora.animacionuno("9");
        this.viewdisplay()
    },

    por: function(){
        calculadora.animacionuno("por");
        this.viewdisplay()
    },

    cuatro: function(){
        calculadora.animacionuno("4");
        this.viewdisplay()
    },

    cinco: function(){
        calculadora.animacionuno("5");
        this.viewdisplay()
    },

    seis: function(){
        calculadora.animacionuno("6");
        this.viewdisplay()
    },

    menos: function(){
        calculadora.animacionuno("menos");
        this.viewdisplay()
    },

    uno: function(){
        calculadora.animacionuno("1");
        this.viewdisplay()
    },

    dos: function(){
        calculadora.animacionuno("2");
        this.viewdisplay()
    },

    tres: function(){
        calculadora.animacionuno("3");
        this.viewdisplay()
    },

    cero: function(){
        calculadora.animacionuno("0");
        this.viewdisplay()
    },

    punto: function(){
        calculadora.animacionuno("punto");
        this.viewdisplay()
    },

    igual: function(){
        calculadora.animacionuno("igual");
        this.viewdisplay()
    },

    mas: function(){
        calculadora.animacionuno("mas");
        this.viewdisplay()
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
this.viewdisplay();
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
this.viewdisplay();
},

*/
