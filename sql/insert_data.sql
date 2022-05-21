use atemporal;

/* CREATE ADMIN USER */
/* FOR BCRYPT HASH  https://bcrypt-generator.com/ */
INSERT INTO usuarios(nombre, celular, email,`password`,typeUser)
VALUES  (
    "Daniel Cu",
    "4424747493",
    "danielcu@alternet.com.mx",
    "$2a$12$JjaHoebtVa/fi7ELrPM5jeff3ZYvMq8VQfQS6b1CJhH2SyekrHW82", 
    "admin"
),(
    "Jesus 😶‍🌫️",
    "2441196804",
    "mj.jesusj@gmail.com",
    "$2a$12$ms36vw1pP.7dpn82ZuArA.dMI7dtuAUeDBeKj5aL6q0/0Y8QOQU2e",
    "admin" 
);
/* INSERTS PARA EVENTOS */

INSERT INTO `eventos` (
  `nombre_organizador`,
  `celular_principal`,
  `celular_secundario`,
  `nombre_evento`,
  `fecha_evento`,
  `hora_inicio`,
  `hora_final`,
  `lugar`,
  `ciudad`,
  `estado`,
  `ubicacion_maps`,
  `descripcion`,
  `direccion`,
  `url_video`,
  `tipo_cobro`,
  `foto_evento`,
  `itinerario_evento`,
  `esta_activo`,
  `esta_aprobado`,
  `fecha_creado`,
  `fecha_actualizado`
  )
VALUES (
  'Edson Vazquez Cruz',
  '72686781',
  '847981273',
  'Torneo de comer Mariscos',
  '2022-04-04',
  '8:00 AM',
  '14:00 PM',
  'En mi casa',
  'Naucalpan',
  'Ciudad de México',
  'https://www.google.com.mx/maps/place/Tecnol%C3%B3gico+de+Monterrey/@20.6133104,-100.4094899,17z/data=!3m1!4b1!4m5!3m4!1s0x85d35ae83751a45d:0x4fa6ee69f6b64f3a!8m2!3d20.6133105!4d-100.4052627',
  'Un torneo para ver quien termina de comer primero x numero de mariscos.',
  'Epigmenio González 500, San Pablo, 76130 Santiago de Querétaro, Qro.',
  'https://www.youtube.com/watch?v=GwF9EjnsNUQ&ab_channel=SanctuaryLads',
  '1',
  'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  'https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxzZXJnaW90ZXN0YmlzfGd4OjYzOTk0MDZkMTUyM2M4Zjk',
  '1',
  '1',
  current_timestamp(),
  current_timestamp()
  ),
  (
  'Daniel Cu Sánchez',
  '72686781',
  '847981273',
  'Torneo de FIFA 2021',
  '2022-04-04',
  '8:00 AM',
  '14:00 PM',
  'Tec Campus FIFA',
  'Nezahuatcoyotl',
  'Ciudad de México',
  'https://www.google.com.mx/maps/place/Tecnol%C3%B3gico+de+Monterrey/@20.6133104,-100.4094899,17z/data=!3m1!4b1!4m5!3m4!1s0x85d35ae83751a45d:0x4fa6ee69f6b64f3a!8m2!3d20.6133105!4d-100.4052627',
  'Un torneo para ver quien se convierte en un FIFA primero.',
  'Epigmenio González 500, San Pablo, 76130 Santiago de Querétaro, Qro.',
  'https://www.youtube.com/watch?v=GwF9EjnsNUQ&ab_channel=SanctuaryLads',
  '1',
  'https://i.blogs.es/5fe30d/fifa-21-intros_1/1366_2000.jpeg',
  'https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxzZXJnaW90ZXN0YmlzfGd4OjYzOTk0MDZkMTUyM2M4Zjk',
  '1',
  '1',
  current_timestamp(),
  current_timestamp()
  ),
  (
  'Jesus Morales',
  '72686781',
  '847981273',
  'Fiesta loca!',
  '2022-04-04',
  '8:00 AM',
  '14:00 PM',
  'Fiesta Lol - Ubi',
  'Monterrey',
  'Nuevo León',
  'https://www.google.com.mx/maps/place/Tecnol%C3%B3gico+de+Monterrey/@20.6133104,-100.4094899,17z/data=!3m1!4b1!4m5!3m4!1s0x85d35ae83751a45d:0x4fa6ee69f6b64f3a!8m2!3d20.6133105!4d-100.4052627',
  'FIESTAAAAAAAAA.',
  'Epigmenio González 500, San Pablo, 76130 Santiago de Querétaro, Qro.',
  'https://www.youtube.com/watch?v=GwF9EjnsNUQ&ab_channel=SanctuaryLads',
  '1',
  'https://www.trendmexico.com/wp-content/uploads/2020/01/antros-de-moda-en-la-CDMX-2020-scaled.jpg',
  'https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxzZXJnaW90ZXN0YmlzfGd4OjYzOTk0MDZkMTUyM2M4Zjk',
  '1',
  '1',
  current_timestamp(),
  current_timestamp()
  ),
  (
  'Juan Perez',
  '726846781',
  '847981273',
  'Maincra',
  '2022-04-04',
  '8:00 AM',
  '14:00 PM',
  'Minecraft Realms',
  'Pinal de Amoles',
  'Querétaro',
  'https://www.google.com.mx/maps/place/Tecnol%C3%B3gico+de+Monterrey/@20.6133104,-100.4094899,17z/data=!3m1!4b1!4m5!3m4!1s0x85d35ae83751a45d:0x4fa6ee69f6b64f3a!8m2!3d20.6133105!4d-100.4052627',
  'PVP del Maincra',
  'Epigmenio González 500, San Pablo, 76130 Santiago de Querétaro, Qro.',
  'https://www.youtube.com/watch?v=GwF9EjnsNUQ&ab_channel=SanctuaryLads',
  '1',
  'https://pngimg.com/uploads/minecraft/minecraft_PNG40.png',
  'https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxzZXJnaW90ZXN0YmlzfGd4OjYzOTk0MDZkMTUyM2M4Zjk',
  '1',
  '1',
  current_timestamp(),
  current_timestamp()
  ),
  (
  'El Pepe',
  '72686781',
  '847981273',
  'Torneo del LOL',
  '2022-04-04',
  '8:00 AM',
  '14:00 PM',
  'Torneo del LOL',
  'Pinal de Amoles',
  'Querétaro',
  'https://www.google.com.mx/maps/place/Tecnol%C3%B3gico+de+Monterrey/@20.6133104,-100.4094899,17z/data=!3m1!4b1!4m5!3m4!1s0x85d35ae83751a45d:0x4fa6ee69f6b64f3a!8m2!3d20.6133105!4d-100.4052627',
  'Juega en la grieta del invocador',
  'Epigmenio González 300, Atlixco, 76543, Atlixco, Pue.',
  'https://youtu.be/05HOKQ4x9qE',
  '1',
  'https://i.pinimg.com/736x/85/4f/aa/854faa18fae91edfdd0a35215da4fb4a.jpg',
  'https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxzZXJnaW90ZXN0YmlzfGd4OjYzOTk0MDZkMTUyM2M4Zjk',
  '1',
  '1',
  current_timestamp(),
  current_timestamp()
  ),
  (
  'Carrera de Costales',
  '726867814',
  '847981273',
  'Salta salta',
  '2022-04-04',
  '8:00 AM',
  '14:00 PM',
  'Tec Campus Qro',
  'Querétaro',
  'Querétaro',
  'https://www.google.com.mx/maps/place/Tecnol%C3%B3gico+de+Monterrey/@20.6133104,-100.4094899,17z/data=!3m1!4b1!4m5!3m4!1s0x85d35ae83751a45d:0x4fa6ee69f6b64f3a!8m2!3d20.6133105!4d-100.4052627',
  'ª XDDD',
  'Epigmenio González 500, San Pablo, 76130 Santiago de Querétaro, Qro.',
  'https://www.youtube.com/watch?v=GwF9EjnsNUQ&ab_channel=SanctuaryLads',
  '1',
  'https://www.conmishijos.com/uploads/juegos/juegocarrerasacos.jpg',
  'https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxzZXJnaW90ZXN0YmlzfGd4OjYzOTk0MDZkMTUyM2M4Zjk',
  '1',
  '1',
  current_timestamp(),
  current_timestamp()
  );
  

/* INSERTS PARA BOLETO*/

INSERT INTO `boletos` (`nombre`, `cantidad`) VALUES ('Boleto general', NULL);
 
/* INSETS PARA CATEGORIAS */

INSERT INTO  `categorias` (`nombre`)
VALUES
('Formacion'),
('Videojuegos'),
('Arte'),
('Difusión'),
('Recreacion'),
('Cultura'),
('Deporte'),
('Al aire libre'),
('Seminario'),
('Educacíon'),
('Voluntariado'),
('Divulgacion Científica');

INSERT INTO  `metodos_pago` (`nombre`)
VALUES
('Efectivo'),
('Transferencia'),
('Paypal');

/* INSERTS CATEGORIA_EVENTOS */

INSERT INTO `eventos_categorias` ( `id_categoria`, `id_evento`) 
VALUES 
('4', '1'),
('7', '1'), 
('6', '2'), 
('4', '2'), 
('7', '3'), 
('4', '3'), 
('2', '4'), 
('5', '4'), 
('4', '5'), 
('3', '5'), 
('7', '6'), 
('6', '6');