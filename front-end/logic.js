// funcion mostrar Divclientes con jquery
// estas funciones son para mostrar en pantalla los divs

// mostrar clientes con jquery
function mostrar_clientes(){
    $("#Divclientes").show(1000);
    $("#Divdepartamento").hide(1000);
    $("#Divadministrador").hide(1000);
    $("#Divprioridad").hide(1000);
    $("#Divestado").hide(1000);
    $("#DivadmXticket").hide(1000);
    $("#Divticket").hide(1000);
    cargarDatosCliente();
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


// cargar datos de clientes
function cargarDatosCliente() {

    var cuerpoTabla = " <thead> " +
        "<tr> " +
        "<th> Id Cliente </th> " +
        "<th> Numero de identidad </th> " +
        "<th> Nombre cliente </th> " +
        "<th> Correo cliente </th> " +
        "<th> Direccion </th> " +
        "<th> Telefono </th> " +
        "<th> Id depatamento </th> " +
        "</tr> "
        + " </thead> <tbody>";

        $.ajax({
            type: "GET",
            url: "https://desfrlopez.me/cmartinez/api/cliente/",
            success: function (data) {
    
                for (var i = 0; i < data.length; i++) {
    
                    cuerpoTabla += " <tr> " +
                        "<td>" + data[i].id_cliente + "</td>" +
                        "<td>" + data[i].num_identidad + "</td>" +
                        "<td>" + data[i].nombre_cliente + "</td>" +
                        "<td>" + data[i].correo_cliente + "</td>" +
                        "<td>" + data[i].direccion + "</td>" +
                        "<td>" + data[i].telefono + "</td>" +
                        "<td>" + data[i].id_departamento + "</td>" +
                        "</tr>";
    
                }
                cuerpoTabla += " </tbody>";
    
                $("#reporteCliente").html(cuerpoTabla);
    
    
            },
            dataType: "json"
        });

}

// funcion para insertar datos de clientes
function insertarDatos_cliente(){

    jQuery.ajaxSetup({ async: false });

    var datosForm = {
        num_identidad: $("#numero_identidad").val(),
        nombre_cliente: $("#nombre_cliente").val(),
        correo_cliente: $("#correo_cliente").val(),
        direccion: $("#direccion_cliente").val(),
        telefono: $("#telefono_cliente").val(),
        id_departamento: $("#id_departamento_cliente").val()

    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/cmartinez/api/cliente/",
        data: JSON.stringify(datosForm),
        success: function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                mensaje += " Id Registro " + data[i].insertId;
            }
            alert(mensaje);
        },
        dataType: "json",
        contentType: "application/json; charset=utf-8"
    });

    cargarDatosCliente()
}

// funcion para actualizar datos de clientes post
function actualizarDatos_cliente(){
    
        jQuery.ajaxSetup({ async: false });
    
        var datosForm = {
            id_cliente: $("#id_cliente").val(),
            num_identidad: $("#numero_identidad").val(),
            nombre_cliente: $("#nombre_cliente").val(),
            correo_cliente: $("#correo_cliente").val(),
            direccion: $("#direccion_cliente").val(),
            telefono: $("#telefono_cliente").val(),
            id_departamento: $("#id_departamento_cliente").val()
    
        };
        let id = $("#id_cliente").val();

        var mensaje = "Actualizacion Exitosa";
        $.ajax({
            type: "PUT",
            url: "https://desfrlopez.me/cmartinez/api/cliente/"+id,
            data: JSON.stringify(datosForm),
            success: function (data) {
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    mensaje += " Id Registro " + data[i].insertId;
                }
                alert(mensaje);
            },
            dataType: "json",
            contentType: "application/json; charset=utf-8"
        });
    
        cargarDatosCliente()
}

// funcion para eliminar datos de clientes
function borrarDatos_cliente(){
    jQuery.ajaxSetup({ async: false });
    var id = $("#id_cliente").val();

    var mensaje = "Eliminacion Exitosa";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/cmartinez/api/cliente/"+id,
        success: function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                mensaje += " Id Registro " + data[i].insertId;
            }
            alert(mensaje);
        },
        dataType: "json",
        contentType: "application/json; charset=utf-8"
    });

    cargarDatosCliente()
}