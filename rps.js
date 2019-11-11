var global = 0;
var globalPC = 0;
var click = 0;

function iniciaJuego(data, num){
    if(click == 0){
        click = 1;
        var random = Math.floor(Math.random() * 3);
        var newValue;
        if(random == 0){ newValue = "paper"; }
        if(random == 1){ newValue = "rock"; }
        if(random == 2){ newValue = "scissors"; }
        
        $("#user").html('<i class="far fa-hand-' + data + ' mt-3"></i>');
        $("#pc").html('<i class="far fa-hand-' + newValue + ' mt-3"></i>');
        
        setTimeout(function(){ obtenerGanador(random, num) }, 1000);
    }
}

function obtenerGanador(random, num){
    $("#lineBorder").hide();
    $("#message").show();
    if(random == num){
        $("#user").html('');
        $("#pc").html('');
        $("#message").html('<h1>¡EMPATE!</h1>');
        setTimeout(function(){ limpiarPantalla() }, 1000);
        return;
    }
    if(num == 0){
        if(random == 1){
            $("#user").html('');
            $("#pc").html('');
            $("#message").html('<h1>¡GANASTE!</h1>');
            global++;
        }
        if(random == 2){
            $("#user").html('');
            $("#pc").html('');
            $("#message").html('<h1>¡PERDISTE!</h1>');
            globalPC++;
        }
    }
    if(num == 1){
        if(random == 2){
            $("#user").html('');
            $("#pc").html('');
            $("#message").html('<h1>¡GANASTE!</h1>');
            global++;
        }
        if(random == 0){
            $("#user").html('');
            $("#pc").html('');
            $("#message").html('<h1>¡PERDISTE!</h1>');
            globalPC++;
        }
    }
    if(num == 2){
        if(random == 0){
            $("#user").html('');
            $("#pc").html('');
            $("#message").html('<h1>¡GANASTE!</h1>');
            global++;
        }
        if(random == 1){
            $("#user").html('');
            $("#pc").html('');
            $("#message").html('<h1>¡PERDISTE!</h1>');
            globalPC++;
        }
    }
    $("#score").html(global + " - " + globalPC);
    setTimeout(function(){ limpiarPantalla() }, 1000);
}

function limpiarPantalla(){
    $("#message").hide();
    $("#lineBorder").show();
    click = 0;
}

$(document).ready(function(){
    $("#message").hide();
});