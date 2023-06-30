-- Crear tablas
CREATE TABLE IF NOT EXISTS public.personas
(
    id integer NOT NULL DEFAULT nextval('personas_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default" NOT NULL,
    edad integer NOT NULL,
    ciudad character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT personas_pkey PRIMARY KEY (id)
)


CREATE TABLE IF NOT EXISTS public.productos
(
    id integer NOT NULL DEFAULT nextval('productos_id_seq'::regclass),
    nombre character varying COLLATE pg_catalog."default" NOT NULL,
    precio integer NOT NULL,
    CONSTRAINT productos_pkey PRIMARY KEY (id)
)

CREATE TABLE IF NOT EXISTS public.ventas
(
    id integer NOT NULL DEFAULT nextval('ventas_id_seq'::regclass),
    producto_id integer NOT NULL,
    cantidad integer NOT NULL,
    CONSTRAINT producto_id FOREIGN KEY (producto_id)
        REFERENCES public.productos (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

-- Insertar datos
INSERT INTO public.personas ( nombre, edad, ciudad)
VALUES
    ('Juan', 25, 'Buenos Aires'),
    ('María', 30, 'Madrid'),
    ('Carlos', 20, 'Lima'),
	('Ana', 22, 'Bogota'),
    ('Andres', 40, 'Ciudad de Mexico'),
    ('Laura', 28, 'Buenos Aires'),
	('Pedro', 18, 'Bogota'),
	('Isabel', 35, 'Madrid'),
    ('Ricardo', 32, 'Lima'),
    ('Gabriela', 26, 'Ciudad de Mexico');

INSERT INTO public.productos(nombre, precio)
	VALUES 
		('Producto A', 10),
		('Producto B', 15),
		('Producto C', 8),
		('Producto D', 12),
		('Producto E', 20),
		('Producto F', 18),
		('Producto G', 25),
		('Producto H', 14),
		('Producto I', 16),
		('Producto J', 22);

INSERT INTO public.ventas(producto_id, cantidad)
	VALUES
		(1, 50),
		(2, 80),
		(3, 120),
		(4, 90),
		(5, 60),
		(6, 110),
		(7, 70),
		(8, 150),
		(9, 40),
		(10, 100);

-- Ejercicios

-- 1
-- Escribe una consulta que devuelva los nombres y las edades 
-- de todas las personas mayores de 18 años en la tabla "personas".
SELECT nombre, edad
FROM public.personas
WHERE edad > 18;

-- 2
-- Escribe una consulta que devuelva los nombres y los precios de todos
-- los productos en la tabla "productos", ordenados por precio de menor a mayor.
SELECT nombre, precio
FROM public.productos
ORDER BY precio ASC

-- 3
-- Escribe una consulta que devuelva el nombre del producto y la cantidad vendida 
-- en la tabla "ventas" para todos los productos que hayan vendido más de 100 unidades.
SELECT ventas.producto_id, ventas.cantidad
FROM public.ventas
INNER JOIN public.productos ON productos.id = ventas.producto_id
WHERE ventas.cantidad > 100;

-- 4
-- Escribe una consulta que devuelva el nombre de la ciudad y la cantidad de personas
-- que viven en ella en la tabla "personas", ordenados por cantidad de personas de mayor a menor.
SELECT ciudad, COUNT(*) AS cantidad_personas 
FROM personas 
GROUP BY ciudad 
ORDER BY cantidad_personas DESC;

-- 5
-- Escribe una consulta que devuelva el nombre del producto y el precio promedio
-- de los productos vendidos en la tabla "ventas", para todos los productos que hayan vendido más de 50 unidades.
Select productos.nombre, AVG(precio) AS promedio
FROM public.productos
INNER JOIN public.ventas ON ventas.producto_id = productos.id
GROUP BY productos.nombre;