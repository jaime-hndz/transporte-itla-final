CREATE DATABASE transporte;

USE transporte;

CREATE TABLE tipos(
id_tipo INT IDENTITY PRIMARY KEY,
descripcion VARCHAR(255) NOT NULL
);

INSERT INTO tipos (descripcion) VALUES ('administrador');
INSERT INTO tipos (descripcion) VALUES ('estudiante');

SELECT *
FROM tipos

CREATE TABLE usuarios(
id_usuario INT IDENTITY PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
apellido VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
contra VARCHAR(255) NOT NULL,
id_tipo INT NOT NULL,
CONSTRAINT fk_tipo FOREIGN KEY (id_tipo)
REFERENCES tipos (id_tipo)
);

INSERT INTO usuarios(nombre, apellido, id_tipo)
VALUES ('jaime', 'hernandez',1)

INSERT INTO usuarios(nombre, apellido, id_tipo)
VALUES ('rafael', 'hernandez',2)

SELECT * 
FROM usuarios


CREATE TABLE estudiantes(
id_estudiante VARCHAR(255) PRIMARY KEY,
id_usuario INT NOT NULL,
saldo MONEY NOT NULL,
CONSTRAINT fk_usuario FOREIGN KEY (id_usuario)
REFERENCES usuarios (id_usuario)
);

INSERT INTO estudiantes(id_estudiante, id_usuario, saldo)
VALUES ('2AAE35543D7A475E908E16AA4A8B1E0A', 1,0.00)

SELECT *
FROM estudiantes

CREATE TABLE rutas(
id_ruta INT IDENTITY PRIMARY KEY,
descripcion VARCHAR(255) NOT NULL,
precio MONEY NOT NULL,
va_itla BIT NOT NULL, 
);

INSERT INTO rutas (descripcion,precio,va_itla) VALUES ('(27)Pintura-ITLA',25.00,1)
INSERT INTO rutas (descripcion,precio,va_itla) VALUES ('(Charles)Villa Mella-ITLA',25.00,1)
INSERT INTO rutas (descripcion,precio,va_itla) VALUES ('(Este)San Pedro-ITLA',50.00,1)

INSERT INTO rutas (descripcion,precio,va_itla) VALUES ('(27)Pintura-ITLA',25.00,0)
INSERT INTO rutas (descripcion,precio,va_itla) VALUES ('(Charles)Villa Mella-ITLA',25.00,0)
INSERT INTO rutas (descripcion,precio,va_itla) VALUES ('(Este)San Pedro-ITLA',50.00,0)

SELECT *
FROM rutas

CREATE TABLE horarios(
id_horario INT IDENTITY PRIMARY KEY,
descripcion VARCHAR(255) NOT NULL
);

INSERT INTO horarios (descripcion) VALUES ('8:00 AM')
INSERT INTO horarios (descripcion) VALUES ('9:00 AM')
INSERT INTO horarios (descripcion) VALUES ('10:00 AM')
INSERT INTO horarios (descripcion) VALUES ('1:00 PM')
INSERT INTO horarios (descripcion) VALUES ('2:00 PM')
INSERT INTO horarios (descripcion) VALUES ('4:00 PM')
INSERT INTO horarios (descripcion) VALUES ('6:00 PM')
INSERT INTO horarios (descripcion) VALUES ('8:00 PM')
INSERT INTO horarios (descripcion) VALUES ('8:30 PM')
INSERT INTO horarios (descripcion) VALUES ('10:00 PM')

SELECT *
FROM horarios


CREATE TABLE viajes(
id_viaje INT IDENTITY PRIMARY KEY,
fecha DATE NOT NULL,
id_ruta INT NOT NULL,
id_horario INT NOT NULL,
CONSTRAINT fk_horario FOREIGN KEY (id_horario)
REFERENCES horarios (id_horario),
CONSTRAINT fk_ruta FOREIGN KEY (id_ruta)
REFERENCES rutas (id_ruta)
);

SELECT *
FROM viajes

CREATE TABLE estado_ticket (
id_estado_ticket INT IDENTITY PRIMARY KEY,
descripcion VARCHAR(255) NOT NULL,
);

INSERT INTO estado_ticket (descripcion) VALUES ('Reservado')
INSERT INTO estado_ticket (descripcion) VALUES ('Pagado')

SELECT *
FROM estado_ticket


CREATE TABLE tickets(
id_ticket INT IDENTITY PRIMARY KEY,
id_estudiante VARCHAR(255),
id_viaje INT NOT NULL,
id_estado_ticket INT NOT NULL,
CONSTRAINT fk_estudiante FOREIGN KEY (id_estudiante)
REFERENCES estudiantes (id_estudiante),
CONSTRAINT fk_viaje FOREIGN KEY (id_viaje)
REFERENCES viajes (id_viaje),
CONSTRAINT fk_estado_ticket FOREIGN KEY (id_estado_ticket)
REFERENCES estado_ticket (id_estado_ticket)
);

SELECT *
FROM tickets

