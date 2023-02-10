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
    let parametros = [req.body.num_identidad, req.body.nombre_cliente, req.body.correo_cliente, req.body.telefono,
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

// app.put cliente
app.put('/api/cliente/:id', (req, res) => {
    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "update tabla_cliente set num_identidad = ?, nombre_cliente = ?, correo_cliente = ?, telefono = ?, direccion = ?, id_departamento = ? where id_cliente = ?";
    let parametros = [req.body.num_identidad, req.body.nombre_cliente, req.body.correo_cliente, req.body.telefono,
    req.body.direccion, req.body.id_departamento, req.params.id];

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

// app.delete cliente
app.delete('/api/cliente/:id', (req, res) => {
    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "delete from tabla_cliente where id_cliente = ?";
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

// app.get administrador
app.get('/api/administrador/', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "select * from tabla_administradores";

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

// app.post administrador
app.post('/api/administrador/', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "insert into tabla_administradores" +
        "(nombre,telefono,correo)" +
        "values (?,?,?)";
    let parametros = [req.body.nombre, req.body.telefono, req.body.correo];

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

// app.put administrador
app.put('/api/administrador/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "update tabla_administradores set nombre = ?, telefono = ?, correo = ? where id_administrador = ?";
    let parametros = [req.body.nombre, req.body.telefono, req.body.correo, req.params.id];

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

// app.delete administrador
app.delete('/api/administrador/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "delete from tabla_administradores where id_administrador = ?";
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


// app.get prioridad
app.get('/api/prioridad/', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "select * from tabla_prioridad";

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

// app.post prioridad
app.post('/api/prioridad/', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "insert into tabla_prioridad" +
        "(prioridad)" +
        "values (?)";
    let parametros = [req.body.prioridad];

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

// app.put prioridad
app.put('/api/prioridad/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "update tabla_prioridad set prioridad = ? where id_prioridad = ?";
    let parametros = [req.body.prioridad, req.params.id];

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

// app.delete prioridad
app.delete('/api/prioridad/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "delete from tabla_prioridad where id_prioridad = ?";
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

// app.get estado
app.get('/api/estado/', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "select * from tabla_estado_ticket";

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

// app.post estado
app.post('/api/estado/', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "insert into tabla_estado_ticket" +
        "(estado)" +
        "values (?)";
    let parametros = [req.body.estado];

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

// app.put estado
app.put('/api/estado/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "update tabla_estado_ticket set estado = ? where id_estado = ?";
    let parametros = [req.body.estado, req.params.id];

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

// app.delete estado
app.delete('/api/estado/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "delete from tabla_estado_ticket where id_estado = ?";
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

// app.get ticket
app.get('/api/ticket/', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "select * from tabla_ticket";

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

// app.post ticket
app.post('/api/ticket/', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "insert into tabla_ticket" +
        "(fecha, id_estado, id_cliente, id_prioridad, asunto, descripcion_ticket, solucion)" +
        "values (?, ?, ?, ?, ?, ?, ?)";
    let parametros = [req.body.fecha, req.body.id_estado,
    req.body.id_cliente, req.body.id_prioridad,
    req.body.asunto, req.body.descripcion_ticket, req.body.solucion];

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

// app.put ticket
app.put('/api/ticket/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "update tabla_ticket set fecha = ?, id_estado = ?, id_cliente = ?, id_prioridad = ?, asunto = ?, descripcion_ticket = ?, solucion = ? where id_ticket = ?";
    let parametros = [req.body.fecha, req.body.id_estado,
    req.body.id_cliente, req.body.id_prioridad,
    req.body.asunto, req.body.descripcion_ticket, req.body.solucion, req.params.id];

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

// app.delete ticket
app.delete('/api/ticket/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "delete from tabla_ticket where id_ticket = ?";
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

// app.get administador_ticket
app.get('/api/administrador_ticket/', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "select * from tabla_administrador_ticket";

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

// app.post administador_ticket
app.post('/api/administrador_ticket/', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "insert into tabla_administrador_ticket" +
        "(id_administrador, id_ticket)" +
        "values (?, ?)";
    let parametros = [req.body.id_administrador, req.body.id_ticket];

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

// app.put administador_ticket
app.put('/api/administrador_ticket/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });
    
    let sql = "update tabla_administrador_ticket set id_administrador = ?, id_ticket = ? where id = ?";
    let parametros = [req.body.id_administrador, req.body.id_ticket, req.params.id];

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

// app.delete administador_ticket
app.delete('/api/administrador_ticket/:id', (req, res) => {

    let con = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "might361#$1Ty2Q",
        database: "sistemTiketsDesweb1"
    });

    let sql = "delete from tabla_administrador_ticket where id = ?";
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

app.listen(3000);