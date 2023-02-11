// funcion mostrar Divclientes con jquery
// estas funciones son para mostrar en pantalla los divs

// mostrar clientes con jquery
function mostrar_clientes(){
    $("#Divclientes").show(1000);
    $("#Divdepartamento").hide(1000);
    $("#Divprioridad").hide(1000);
    $("#Divestado").hide(1000);
    $("#DivadmXticket").hide(1000);
    $("#Divticket").hide(1000);
}

// mostrar departamentos con jquery
function mostrar_departamentos(){
    $("#Divclientes").hide(1000);
    $("#Divdepartamento").show(1000);
    $("#Divadministrador").hide(1000);
    $("#Divprioridad").hide(1000);
    $("#Divestado").hide(1000);
    $("#DivadmXticket").hide(1000);
    $("#Divticket").hide(1000);
}

// mostrar administradores con jquery
function mostrar_administradores(){
    $("#Divclientes").hide(1000);
    $("#Divdepartamento").hide(1000);
    $("#Divadministrador").show(1000);
    $("#Divprioridad").hide(1000);
    $("#Divestado").hide(1000);
    $("#DivadmXticket").hide(1000);
    $("#Divticket").hide(1000);
}

// mostrar prioridades con jquery
function mostrar_prioridades(){
    $("#Divclientes").hide(1000);
    $("#Divdepartamento").hide(1000);
    $("#Divadministrador").hide(1000);
    $("#Divprioridad").show(1000);
    $("#Divestado").hide(1000);
    $("#DivadmXticket").hide(1000);
    $("#Divticket").hide(1000);
}

// mostrar estados con jquery
function mostrar_estado(){
    $("#Divclientes").hide(1000);
    $("#Divdepartamento").hide(1000);
    $("#Divadministrador").hide(1000);
    $("#Divprioridad").hide(1000);
    $("#Divestado").show(1000);
    $("#DivadmXticket").hide(1000);
    $("#Divticket").hide(1000);
}

// mostrar administradores por ticket con jquery
function mostrar_adm_ticket(){
    $("#Divclientes").hide(1000);
    $("#Divdepartamento").hide(1000);
    $("#Divadministrador").hide(1000);
    $("#Divprioridad").hide(1000);
    $("#Divestado").hide(1000);
    $("#DivadmXticket").show(1000);
    $("#Divticket").hide(1000);
}

// mostrar tickets con jquery
function mostrar_tickets(){
    $("#Divclientes").hide(1000);
    $("#Divdepartamento").hide(1000);
    $("#Divadministrador").hide(1000);
    $("#Divprioridad").hide(1000);
    $("#Divestado").hide(1000);
    $("#DivadmXticket").hide(1000);
    $("#Divticket").show(1000);
}