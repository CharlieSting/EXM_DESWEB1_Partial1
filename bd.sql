create database sistemTiketsDesweb1;

create table tabla_departamento(
id_departamento int auto_increment primary key,
nombre_departamento varchar(200)
);

create table tabla_administradores(
id_administrador int auto_increment primary key,
nombre varchar(50),
telefono varchar(50),
correo varchar(50)
);

create table tabla_prioridad(
id_prioridad int auto_increment primary key,
prioridad varchar(50)
);

create table tabla_estado_ticket(
id_estado int auto_increment primary key,
estado varchar(150)
);

create table tabla_cliente
(
    id_cliente int auto_increment primary key ,
    num_identidad varchar(50),
    nombre_cliente varchar(50),
    correo_cliente varchar(50),
    direccion varchar(200),
    telefono varchar(50),
    id_departamento int,
    constraint foreign key fk_id_departamento(id_departamento) references tabla_departamento(id_departamento)
);

create table tabla_ticket(
id_ticket int auto_increment primary key,
fecha varchar(50),
id_estado int,
id_cliente int,
id_prioridad int,
asunto varchar(50),
descripcion_ticket varchar(500),
solucion varchar(500),
constraint foreign key fk_id_estado(id_estado) references tabla_estado_ticket(id_estado),
constraint foreign key fk_id_cliente(id_cliente) references tabla_cliente(id_cliente),
constraint foreign key fk_id_prioridad(id_prioridad) references tabla_prioridad(id_prioridad)
);

create table administrador_ticket(
id int auto_increment primary key,
id_administrador int,
id_ticket int,
constraint foreign key fk_id_administrador(id_administrador) references tabla_administradores(id_administrador),
constraint foreign key fk_id_ticket(id_ticket) references tabla_ticket(id_ticket)
);