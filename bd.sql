create database sistemTiketsDesweb1;

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

# get tabla clientees
select * from tabla_cliente where id_cliente =1;
select * from tabla_cliente;

# Post tabla cliente
insert into tabla_cliente(num_identidad,nombre_cliente,correo_cliente,direccion,telefono,id_departamento)
values
('0801-1085-343917', 'Mia Khalida', 'Mkaliha2929@gmail.com', 'Estados Unidos', '87-23-23-99', 2),
('2101-1912-3422', 'George Macdonal', 'MCgeorge@gmail.com', 'Reino Unido', '199-2-929-190', 3),
('21821-2000-76543', 'Uchiha Madara', 'Madara@gmail.com', 'konoha', '1+199-12102-2218', 1),
('12122-1991-12344', 'Mario bros', 'MarioBros@gmail.com', 'Casa barrio el porvenir', '1+872-323-9323', 4);

# PUT tabla cliente
update tabla_cliente set num_identidad= '1234', nombre_cliente ='Clan Uchiha Madara', correo_cliente='UchihaClan@gmail.com',
direccion='Konoha anan', telefono='1+800-2012-0000', id_departamento='2' where id_cliente ='4';

# DELETE 

delete from tabla_cliente where id_cliente= '5';

create table tabla_departamento(
id_departamento int auto_increment primary key,
nombre_departamento varchar(200)
);
select * from tabla_departamento;
insert into tabla_departamento(nombre_departamento)
values
('Francisco Morazan'),
('San pedro Sula'),
('Cortez'),
('Santa Barbara');

# PUT DEPARTAMENTO
update tabla_departamento set nombre_departamento='Gracias a Dios' where id_departamento='3';


create table tabla_administradores(
id_administrador int auto_increment primary key,
nombre varchar(50),
telefono varchar(50),
correo varchar(50)
);

#Get Administradores
select * from tabla_administradores;

# POST ADMINISTRADOR
insert into tabla_administradores(nombre,telefono,correo)
values
('Sergei Lavrov', '21-12-34-45', 'kremlin.ru');

# PUT Administrador

update tabla_administradores set nombre= 'Sergei Víktorovich Lavrov', telefono='?', correo='kremlin.ru' where id_administrador='5';

# DELETE ADM

DELETE FROM tabla_administradores where id_administrador= '2';

create table administrador_ticket(
id int auto_increment primary key,
id_administrador int,
id_ticket int,
constraint foreign key fk_id_administrador(id_administrador) references tabla_administradores(id_administrador),
constraint foreign key fk_id_ticket(id_ticket) references tabla_ticket(id_ticket)
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

# GET TICKETS
SELECT * FROM tabla_ticket;

# POST TICKET
insert into tabla_ticket(fecha,id_estado,id_cliente,id_prioridad,asunto,descripcion_ticket)
values
('12/marzo/2022', '1', '1', '1', 'Urgencia de Clases de universidad',
'Este periodo esta bien dificil y no se que pueda pasar clases tan dificiles'
 );
 
 # PUT TABLA TICKET
 update tabla_ticket set solucion= 'Pues pongace pilas a estudiar' where id_ticket='1';
 
 # delete ticket
 delete from tabla ticket where id_ticket ='';

create table tabla_prioridad(
id_prioridad int auto_increment primary key,
prioridad varchar(50)
);

#get prioridades

select * from tabla_prioridad;

#post prioridad

update tabla_prioridad set prioridad='ALTA' where id_prioridad='2';

insert into tabla_prioridad(prioridad)
values
('URGENTE'),
('NECESARIA'),
('MEDIA'),
('BAJA');

# PUT prioridad

create table tabla_estado_ticket(
id_estado int auto_increment primary key,
estado varchar(150)
);

# delete prioridad
delete from tabla_prioridad where id_prioridad='4';


#Get estado tickets
select * from tabla_estado_ticket;

# POST ESTADO TICKET

Insert into tabla_estado_ticket(estado)
values
('Recibido'),
('Resuelto'),
('Inconcluso'),
('Nose'),
('Pendiente');

#PUT
update tabla_estado_ticket set estado= 'Por verificar' where id_estado ='4';

# delete estadot ticket

delete from tabla_estado_ticket where id_estado='4';