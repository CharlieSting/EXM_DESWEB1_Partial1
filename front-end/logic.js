// funcion mostrar Divclientes con jquery
// estas funciones son para mostrar en pantalla los divs

// mostrar clientes con jquery
function mostrar_clientes() {
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
function mostrar_departamentos() {
    $("#Divclientes").hide(1000);
    $("#Divdepartamento").show(1000);
    $("#Divadministrador").hide(1000);
    $("#Divprioridad").hide(1000);
    $("#Divestado").hide(1000);
    $("#DivadmXticket").hide(1000);
    $("#Divticket").hide(1000);
    cargarDatosDepartamento();
}

// mostrar administradores con jquery
function mostrar_administradores() {
    $("#Divclientes").hide(1000);
    $("#Divdepartamento").hide(1000);
    $("#Divadministrador").show(1000);
    $("#Divprioridad").hide(1000);
    $("#Divestado").hide(1000);
    $("#DivadmXticket").hide(1000);
    $("#Divticket").hide(1000);
    cargarDatosAdministrador();
}

// mostrar prioridades con jquery
function mostrar_prioridades() {
    $("#Divclientes").hide(1000);
    $("#Divdepartamento").hide(1000);
    $("#Divadministrador").hide(1000);
    $("#Divprioridad").show(1000);
    $("#Divestado").hide(1000);
    $("#DivadmXticket").hide(1000);
    $("#Divticket").hide(1000);
    cargarDatosPrioridad();
}

// mostrar estados con jquery
function mostrar_estado() {
    $("#Divclientes").hide(1000);
    $("#Divdepartamento").hide(1000);
    $("#Divadministrador").hide(1000);
    $("#Divprioridad").hide(1000);
    $("#Divestado").show(1000);
    $("#DivadmXticket").hide(1000);
    $("#Divticket").hide(1000);
    cargarDatosEstado();
}

// mostrar administradores por ticket con jquery
function mostrar_adm_ticket() {
    $("#Divclientes").hide(1000);
    $("#Divdepartamento").hide(1000);
    $("#Divadministrador").hide(1000);
    $("#Divprioridad").hide(1000);
    $("#Divestado").hide(1000);
    $("#DivadmXticket").show(1000);
    $("#Divticket").hide(1000);
    cargarDatosAdministrador_ticket();
}

// mostrar tickets con jquery
function mostrar_tickets() {
    $("#Divclientes").hide(1000);
    $("#Divdepartamento").hide(1000);
    $("#Divadministrador").hide(1000);
    $("#Divprioridad").hide(1000);
    $("#Divestado").hide(1000);
    $("#DivadmXticket").hide(1000);
    $("#Divticket").show(1000);
    cargarDatosTicket();
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
function insertarDatos_cliente() {

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
function actualizarDatos_cliente() {

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
        url: "https://desfrlopez.me/cmartinez/api/cliente/" + id,
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
function borrarDatos_cliente() {
    jQuery.ajaxSetup({ async: false });
    var id = $("#id_cliente").val();

    var mensaje = "Eliminacion Exitosa";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/cmartinez/api/cliente/" + id,
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

// funcion para cargar datos de departamentos
function cargarDatosDepartamento() {

    var cuerpoTabla = " <thead> " +
        "<tr> " +
        "<th> Id Departamento </th> " +
        "<th> Nombre departamento </th> " +
        "</tr> "
        + " </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/cmartinez/api/departamento/",
        success: function (data) {

            for (var i = 0; i < data.length; i++) {

                cuerpoTabla += " <tr> " +
                    "<td>" + data[i].id_departamento + "</td>" +
                    "<td>" + data[i].nombre_departamento + "</td>" +
                    "</tr>";

            }
            cuerpoTabla += " </tbody>";

            $("#reporteDepartamento").html(cuerpoTabla);


        },
        dataType: "json"
    });
}

// funcion para insertar datos de departamentos
function insertarDatos_departamento() {

    jQuery.ajaxSetup({ async: false });

    var datosForm = {
        nombre_departamento: $("#departamento").val()
    };

    var mensaje = "Insercion Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/cmartinez/api/departamento/",
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

    cargarDatosDepartamento()
}

// funcion para actualizar datos de departamentos
function actualizarDatos_departamento() {

    jQuery.ajaxSetup({ async: false });

    var datosForm = {
        id_departamento: $("#id_departamento").val(),
        nombre_departamento: $("#departamento").val()
    };
    let id = $("#id_dept").val();

    var mensaje = "Actualizacion del departamento Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/cmartinez/api/departamento/" + id,
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

    cargarDatosDepartamento()
}

// funcion para eliminar datos de departamentos
function borrarDatos_departamento() {
    jQuery.ajaxSetup({ async: false });
    var id = $("#id_dept").val();

    var mensaje = "Eliminacion del departamento realizada";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/cmartinez/api/departamento/" + id,
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

    cargarDatosDepartamento()
}

// funcion para cargar datos administrador
function cargarDatosAdministrador() {

    var cuerpoTabla = " <thead> " +
        "<tr> " +
        "<th> Id Administrador </th> " +
        "<th> Nombre </th> " +
        "<th> Telefono </th> " +
        "<th> Correo </th> " +
        "</tr> "
        + " </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/cmartinez/api/administrador/",
        success: function (data) {

            for (var i = 0; i < data.length; i++) {

                cuerpoTabla += " <tr> " +
                    "<td>" + data[i].id_administrador + "</td>" +
                    "<td>" + data[i].nombre + "</td>" +
                    "<td>" + data[i].telefono + "</td>" +
                    "<td>" + data[i].correo + "</td>" +
                    "</tr>";

            }
            cuerpoTabla += " </tbody>";

            $("#reporteAdministradores").html(cuerpoTabla);

        },
        dataType: "json"
    });
}

// funcion para insertar datos de administrador
function insertarDatos_administrador() {

    jQuery.ajaxSetup({ async: false });

    var datosForm = {
        nombre: $("#nombre_administrador").val(),
        telefono: $("#telefono_administrador").val(),
        correo: $("#correo_administrador").val()
    };

    var mensaje = "Insercion de administrador Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/cmartinez/api/administrador/",
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

    cargarDatosAdministrador()
}

// funcion para actualizar datos de administrador
function actualizarDatos_administrador() {

    jQuery.ajaxSetup({ async: false });

    var datosForm = {
        // id_administrador: $("#id_administrador").val(),
        nombre: $("#nombre_administrador").val(),
        telefono: $("#telefono_administrador").val(),
        correo: $("#correo_administrador").val()
    };
    let id = $("#id_adm").val();

    var mensaje = "Actualizacion del administrador Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/cmartinez/api/administrador/" + id,
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

    cargarDatosAdministrador()
}

// funcion para eliminar datos de administrador
function borrarDatos_administrador() {
    jQuery.ajaxSetup({ async: false });
    var id = $("#id_adm").val();

    var mensaje = "Eliminacion del administrador realizada";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/cmartinez/api/administrador/" + id,
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

    cargarDatosAdministrador()
}

// funcion para cargar datos de prioridad
function cargarDatosPrioridad() {

    var cuerpoTabla = " <thead> " +
        "<tr> " +
        "<th> Id Prioridad </th> " +
        "<th> Nombre </th> " +
        "</tr> "
        + " </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/cmartinez/api/prioridad/",
        success: function (data) {

            for (var i = 0; i < data.length; i++) {

                cuerpoTabla += " <tr> " +
                    "<td>" + data[i].id_prioridad + "</td>" +
                    "<td>" + data[i].prioridad + "</td>" +
                    "</tr>";

            }
            cuerpoTabla += " </tbody>";

            $("#reportePrioridad").html(cuerpoTabla);

        },
        dataType: "json"
    });
}

// funcion para insertar datos de prioridad
function insertarDatos_prioridad() {

    jQuery.ajaxSetup({ async: false });

    var datosForm = {
        prioridad: $("#n_prioridad").val()
    };

    var mensaje = "Insercion de prioridad Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/cmartinez/api/prioridad/",
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

    cargarDatosPrioridad()
}

// funcion para actualizar datos de prioridad
function actualizarDatos_prioridad() {

    jQuery.ajaxSetup({ async: false });

    var datosForm = {
        prioridad: $("#n_prioridad").val()
    };
    let id = $("#id_prioridad").val();

    var mensaje = "Actualizacion de prioridad Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/cmartinez/api/prioridad/" + id,
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

    cargarDatosPrioridad()
}

// funcion para eliminar datos de prioridad
function borrarDatos_prioridad() {
    jQuery.ajaxSetup({ async: false });
    var id = $("#id_prioridad").val();

    var mensaje = "Eliminacion de prioridad realizada";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/cmartinez/api/prioridad/" + id,
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

    cargarDatosPrioridad()
}

// funcion para cargar datos de estado
function cargarDatosEstado() {

    var cuerpoTabla = " <thead> " +
        "<tr> " +
        "<th> Id Estado </th> " +
        "<th> Nombre </th> " +
        "</tr> "
        + " </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/cmartinez/api/estado/",
        success: function (data) {

            for (var i = 0; i < data.length; i++) {

                cuerpoTabla += " <tr> " +
                    "<td>" + data[i].id_estado + "</td>" +
                    "<td>" + data[i].estado + "</td>" +
                    "</tr>";

            }
            cuerpoTabla += " </tbody>";

            $("#reporteEstado").html(cuerpoTabla);

        },
        dataType: "json"
    });
}

// funcion para insertar datos de estado
function insertarDatos_estado() {

    jQuery.ajaxSetup({ async: false });

    var datosForm = {
        estado: $("#estado").val()
    };

    var mensaje = "Insercion de estado Exitosa";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/cmartinez/api/estado/",
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

    cargarDatosEstado()
}

// funcion para actualizar datos de estado
function actualizarDatos_estado() {

    jQuery.ajaxSetup({ async: false });

    var datosForm = {
        estado: $("#estado").val()
    };
    let id = $("#id_estado").val();

    var mensaje = "Actualizacion de estado Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/cmartinez/api/estado/" + id,
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

    cargarDatosEstado()
}

// funcion para eliminar datos de estado
function borrarDatos_estado() {
    jQuery.ajaxSetup({ async: false });
    var id = $("#id_estado").val();

    var mensaje = "Eliminacion de estado realizada";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/cmartinez/api/estado/" + id,
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

    cargarDatosEstado()
}

// funcion para cargar datos de ticket
function cargarDatosTicket() {

    var cuerpoTabla = " <thead> " +
        "<tr> " +
        "<th> Id Ticket </th> " +
        "<th> Fecha </th> " +
        "<th> Id Estado </th> " +
        "<th> Id Cliente </th> " +
        "<th> Id Prioridad </th> " +
        "<th> Asunto </th> " +
        "<th> Descripcion </th> " +
        "<th> Solucion </th> " +
        "</tr> "
        + " </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/cmartinez/api/ticket/",
        success: function (data) {

            for (var i = 0; i < data.length; i++) {

                cuerpoTabla += " <tr> " +
                    "<td>" + data[i].id_ticket + "</td>" +
                    "<td>" + data[i].fecha + "</td>" +
                    "<td>" + data[i].id_estado + "</td>" +
                    "<td>" + data[i].id_cliente + "</td>" +
                    "<td>" + data[i].id_prioridad + "</td>" +
                    "<td>" + data[i].asunto + "</td>" +
                    "<td>" + data[i].descripcion_ticket + "</td>" +
                    "<td>" + data[i].solucion + "</td>" +
                    "</tr>";

            }
            cuerpoTabla += " </tbody>";

            $("#reporteTicket").html(cuerpoTabla);

        },
        dataType: "json"
    });
}

// funcion para insertar datos de ticket
function insertarDatos_ticket() {

    jQuery.ajaxSetup({ async: false });

    var datosForm = {
        fecha: $("#fecha_ticket").val(),
        id_estado: $("#id_estado_fk").val(),
        id_cliente: $("#id_cliente_fk").val(),
        id_prioridad: $("#id_prioridad_fk").val(),
        asunto: $("#asunto_ticket").val(),
        descripcion_ticket: $("#descripcion").val(),
        solucion: $("#solucion").val()
    };

    var mensaje = "EL  ticket ha sido enviado";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/cmartinez/api/ticket/",
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

    cargarDatosTicket()
}

// funcion para actualizar datos de ticket
function actualizarDatos_ticket() {

    jQuery.ajaxSetup({ async: false });

    var datosForm = {
        fecha: $("#fecha_ticket").val(),
        id_estado: $("#id_estado_fk").val(),
        id_cliente: $("#id_cliente_fk").val(),
        id_prioridad: $("#id_prioridad_fk").val(),
        asunto: $("#asunto_ticket").val(),
        descripcion_ticket: $("#descripcion").val(),
        solucion: $("#solucion").val()
    };
    let id = $("#id_ticket_fk").val();

    var mensaje = "Actualizacion de ticket Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/cmartinez/api/ticket/" + id,
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

    cargarDatosTicket()
}

// funcion para eliminar datos de ticket
function borrarDatos_ticket() {
    jQuery.ajaxSetup({ async: false });
    var id = $("#id_ticket_fk").val();

    var mensaje = "Eliminacion de ticket realizada";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/cmartinez/api/ticket/" + id,
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

    cargarDatosTicket()
}

// funcion para cargar datos de administrador_ticket
function cargarDatosAdministrador_ticket() {

    var cuerpoTabla = " <thead> " +
        "<tr> " +
        "<th> Id Id </th> " +
        "<th> Id Administrador </th> " +
        "<th> Id Ticket </th> " +
        "</tr> "
        + " </thead> <tbody>";

    $.ajax({
        type: "GET",
        url: "https://desfrlopez.me/cmartinez/api/administrador_ticket/",
        success: function (data) {

            for (var i = 0; i < data.length; i++) {

                cuerpoTabla += " <tr> " +
                    "<td>" + data[i].id + "</td>" +
                    "<td>" + data[i].id_administrador + "</td>" +
                    "<td>" + data[i].id_ticket + "</td>" +
                    "</tr>";

            }
            cuerpoTabla += " </tbody>";

            $("#reporteAmdxticket").html(cuerpoTabla);

        },
        dataType: "json"
    });
}

// funcion para insertar datos de administrador_ticket
function insertarDatos_admxticket() {

    jQuery.ajaxSetup({ async: false });

    var datosForm = {
        id_administrador: $("#id_ad_ti").val(),
        id_ticket: $("#id_ticket_ad").val()
    };

    var mensaje = "EL  administrador_ticket ha sido procesado";
    $.ajax({
        type: "POST",
        url: "https://desfrlopez.me/cmartinez/api/administrador_ticket/",
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

    cargarDatosAdministrador_ticket()
}

// funcion para actualizar datos de administrador_ticket
function actualizarDatos_admxticket() {

    jQuery.ajaxSetup({ async: false });

    var datosForm = {
        id_administrador: $("#id_ad_ti").val(),
        id_ticket: $("#id_ticket_ad").val()
    };
    let id = $("#id_adm_ticket").val();

    var mensaje = "Actualizacion de administrador_ticket Exitosa";
    $.ajax({
        type: "PUT",
        url: "https://desfrlopez.me/cmartinez/api/administrador_ticket/" + id,
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

    cargarDatosAdministrador_ticket()
}

// funcion para eliminar datos de administrador_ticket
function borrarDatos_admxticket() {
    jQuery.ajaxSetup({ async: false });
    var id = $("#id_adm_ticket").val();

    var mensaje = "Eliminacion de administrador_ticket realizada";
    $.ajax({
        type: "DELETE",
        url: "https://desfrlopez.me/cmartinez/api/administrador_ticket/" + id,
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

    cargarDatosAdministrador_ticket()
}