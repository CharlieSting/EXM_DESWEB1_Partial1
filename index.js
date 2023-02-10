// inicial estandar
const mysql = require('mysql');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

// app.get departamento
app.get('/api/departamento/', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "select * from tabla_departamento";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});

// app.post departamento
app.post('/api/departamento/', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "insert into tabla_departamento" +
        "(nombre_departamento)" +
        "values (?)";
    let parametros = [req.body.nombre_departamento];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });

});


// app.put departamento
app.put('/api/departamento/:id', (req, res) => {
    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "update tabla_departamento set nombre_departamento = ? where id_departamento = ?";
    let parametros = [req.body.nombre_departamento, req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.delete departamento
app.delete('/api/departamento/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "delete from tabla_departamento where id_departamento = ?";
    let parametros = [req.params.id];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.get cliente
app.get('/api/cliente/', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "select * from tabla_cliente";

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, function (err, result) {

                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});

// app.post cliente
app.post('/api/cliente/', (req, res) => {
    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "insert into tabla_cliente" +
        "(num_identidad, nombre_cliente, correo_cliente, telefono, direccion, id_departamento)" +
        "values (?,?,?,?,?,?)";
    let parametros = [req.body.num_identidad, req.body.nombre_cliente,req.body.correo_cliente, req.body.telefono, 
                    req.body.direccion, req.body.id_departamento];

    con.connect(function (err) {

        if (err) {
            res.send(err);
        } else {
            con.query(sql, parametros, function (err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
        }
    });
});





app.listen(3000);