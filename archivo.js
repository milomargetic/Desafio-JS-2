var a = {
    A:0,
    B:0,
    c:0,
    D:0,
    resultado: function(){

        if(a.C > a.B &&
           a.D > a.B &&
           a.D > a.C &&
           a.D > a.A){
               return true;
           }
           return false;
    },
    intervalo: setInterval (function(){
        a.A = Math.ceil(Math.random()*4)
        a.B = Math.ceil(Math.random()*4)
        a.C = Math.ceil(Math.random()*4)
        a.D = Math.ceil(Math.random()*4)

        if(a.resultado()){

            clearInterval(a.intervalo);
            console.log("jugador A", a.A)
            console.log("jugador B", a.B)
            console.log("jugador C", a.C)
            console.log("jugador D", a.D)
        }
    },10)
}