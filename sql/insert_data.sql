use atemporal;

/* CREATE ADMIN USER */

/* FOR BCRYPT HASH  https://bcrypt-generator.com/ */

INSERT INTO
    usuarios(
        `nombre`,
        `celular`,
        `email`,
        `password`,
        `typeUser`
    )
VALUES
    (
        'Daniel Cu',
        '4424747493',
        'danielcu@alternet.com.mx',
        '$2a$12$JjaHoebtVa/fi7ELrPM5jeff3ZYvMq8VQfQS6b1CJhH2SyekrHW82',
        'admin'
    ),
    (
        'Jesus 😶‍🌫️',
        '2441196804',
        'mj.jesusj@gmail.com',
        '$2a$12$ms36vw1pP.7dpn82ZuArA.dMI7dtuAUeDBeKj5aL6q0/0Y8QOQU2e',
        'admin'
    ),
    (
        'Eduardo Fuentes',
        '4428623044',
        'eduardo.fuentesrocha@gmail.com',
        '$2a$12$JjaHoebtVa/fi7ELrPM5jeff3ZYvMq8VQfQS6b1CJhH2SyekrHW82',
        'admin'
    ),
    (
        'Dummy User',
        '012356789',
        'lorem.ipsum@gmail.com',
        '$2a$12$5lcSI.YO2atNZuWsk57Ng.y2LTuNbrPlE27R8MXY5FRf6ec9.WXry', /* pass: dummyuser */
        'general'
    );

/* INSERTS PARA EVENTOS */

INSERT INTO
    `eventos` (
        `nombre_organizador`,
        `celular_principal`,
        `celular_secundario`,
        `nombre_evento`,
        `fecha_evento`,
        `hora_inicio`,
        `hora_final`,
        `lugar`,
        `ciudad`,
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
VALUES
    (
        'Edson Vazquez Cruz',
        '72686781',
        '847981273',
        'Torneo de comer Mariscos',
        '2022-04-04',
        '8:00 AM',
        '14:00 PM',
        'Marisqueria: La Mojarra Feliz',
        'Quéretaro',
        'https://www.google.com.mx/maps/place/La+Mojarra+Feliz/@20.6052074,-100.4085404,17z/data=!3m1!4b1!4m5!3m4!1s0x85d35ac4afc8d21f:0x8f1085dd82241f38!8m2!3d20.6052149!4d-100.4063693',
        'Un torneo para ver quien termina de comer primero N numero de mariscos.',
        'Ejido 128 B',
        'https://www.youtube.com/watch?v=5sLBJksugtI',
        '0',
        'https://playersoflife.com/wp-content/uploads/2021/09/seafood-comida-restaurantes-mariscos-pescado-monterrey-2021.jpg',
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
        'Tec Campus Qro.',
        'Quéretaro',
        'https://www.google.com.mx/maps/place/Tecnol%C3%B3gico+de+Monterrey/@20.6133104,-100.4094899,17z/data=!3m1!4b1!4m5!3m4!1s0x85d35ae83751a45d:0x4fa6ee69f6b64f3a!8m2!3d20.6133105!4d-100.4052627',
        'Un torneo para ver quien se convierte en un FIFA primero.',
        'Epigmenio González 500, San Pablo, 76130 Santiago de Querétaro, Qro.',
        'https://www.youtube.com/watch?v=IoQF0ArRsYs',
        '0',
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
        'Concurso de canciones: Vaporwave',
        '2022-04-04',
        '8:00 AM',
        '14:00 PM',
        'Antea Lifestyle Center',
        'Quéretaro',
        'https://www.google.com.mx/maps/place/Antea+Lifestyle+Center/@20.6753249,-100.438556,17z/data=!3m1!4b1!4m5!3m4!1s0x85d35a013183c8b3:0xb91aa0ff2d137fcd!8m2!3d20.6753199!4d-100.4363673',
        'Crea la cancion de Vaporwave mas abstracta y novedosa y gana miles de pesos en premios',
        'San Luis, El Salitre, 76127 Santiago de Querétaro, Qro.',
        'https://www.youtube.com/watch?v=oJmmTJ-kQYo',
        '0',
        'https://1.bp.blogspot.com/-tHQkm--aLc0/YJ2MgT5mekI/AAAAAAAAZiw/GI52VnbY0iwYUSpzCO4tYMIrjvTEzsl_QCLcBGAsYHQ/s1280/Vaporwave-2.jpg',
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
        'Obra: Les Miserables',
        '2022-04-04',
        '8:00 AM',
        '14:00 PM',
        'Teatro Metropolitano',
        'Quéretaro',
        'https://www.google.com.mx/maps/place/Teatro+Metropolitano/@20.5773873,-100.3521896,17z/data=!3m1!4b1!4m5!3m4!1s0x85d344a786e53d19:0xf934c24098309e6d!8m2!3d20.5773823!4d-100.3500009',
        'Ven y disfruta de esta maravillosa obra representado por la compañia teatral Veuillez Nous Approuver',
        'Paseo de las Artes #1531 - B, Blvd. Bernardo Quintana 1531, Centro Sur, 76090 Santiago de Querétaro, Qro.',
        'https://www.youtube.com/watch?v=zLrbEgH8L9E',
        '0',
        'https://www.dondeir.com/wp-content/uploads/2017/12/el-musical-los-miserables-regresa-a-cdmx-en-marzo-2018-07.jpg',
        'https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxzZXJnaW90ZXN0YmlzfGd4OjYzOTk0MDZkMTUyM2M4Zjk',
        '1',
        '1',
        current_timestamp(),
        current_timestamp()
    ),
    (
        'Pilar Almanzana',
        '72686781',
        '847981273',
        'Concierto de Jazz',
        '2022-04-04',
        '8:00 AM',
        '14:00 PM',
        'Teatro de la Ciudad',
        'Quéretaro',
        'https://www.google.com.mx/maps/place/Tecnol%C3%B3gico+de+Monterrey/@20.6133104,-100.4094899,17z/data=!3m1!4b1!4m5!3m4!1s0x85d35ae83751a45d:0x4fa6ee69f6b64f3a!8m2!3d20.6133105!4d-100.4052627',
        'La magnifica musica Pilar Almanzana regresa a Quéretaro a llenar de alegria el Teatro de la Ciudad, deleintandonos con sus magnificas composiciones musicales de Jazz',
        'Calle 16 de Septiembre 44-E, Centro Histórico, Centro, 76000 Santiago de Querétaro, Qro.',
        'https://www.youtube.com/watch?v=KdMuoWvTkOc',
        '0',
        'https://heraldodemexico.com.mx/u/fotografias/m/2021/3/4/f1280x720-331131_462806_5050.jpg',
        'https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxzZXJnaW90ZXN0YmlzfGd4OjYzOTk0MDZkMTUyM2M4Zjk',
        '1',
        '1',
        current_timestamp(),
        current_timestamp()
    ),
    (
        'Asociación de Libreros de Querétaro A.C.',
        '726867814',
        '847981273',
        'Feria del Libro 2022',
        '2022-04-04',
        '8:00 AM',
        '14:00 PM',
        'Plaza Constitución',
        'Querétaro',
        'https://www.google.com.mx/maps/place/Plaza+Constituci%C3%B3n,+Portal+Bueno,+Centro,+76000+Santiago+de+Quer%C3%A9taro,+Qro./@20.591615,-100.3936592,17z/data=!3m1!4b1!4m5!3m4!1s0x85d35b2baa72c301:0xfb849c1faa3847d8!8m2!3d20.5915868!4d-100.3914645',
        'Disfruta de actividades culturales como presentaciones de libros, funciones de teatro, de danza, espectáculos musicales, lecturas públicas, así como subastas y remates de libros',
        'Portal Bueno, Centro, 76000 Santiago de Querétaro, Qro.',
        'https://www.youtube.com/watch?v=2Rl0XNkxqJ0',
        '0',
        'https://amqueretaro.com/wp-content/uploads/2022/04/Asi-celebrara-Queretaro-el-Dia-Mundial-del-Libro-1200x675.jpg',
        'https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxzZXJnaW90ZXN0YmlzfGd4OjYzOTk0MDZkMTUyM2M4Zjk',
        '1',
        '1',
        current_timestamp(),
        current_timestamp()
    );

/* INSERTS PARA BOLETO*/

INSERT INTO
    `boletos` (`nombre`, `cantidad`)
VALUES
    ('Boleto general', NULL);

/* INSETS PARA CATEGORIAS */

INSERT INTO
    `categorias` (`nombre`)
VALUES
    ('Al aire libre'),
    ('Arte'),
    ('Cultura'),
    ('Deporte'),
    ('Difusión'),
    ('Divulgacion Científica'),
    ('Educacíon'),
    ('Formacion'),
    ('Recreacion'),
    ('Seminario'),
    ('Videojuegos'),
    ('Voluntariado');

INSERT INTO
    `metodos_pago` (`nombre`)
VALUES
    ('Efectivo'),
    ('Transferencia'),
    ('Paypal');

INSERT INTO
    `estados`(`nombre`)
VALUES
    ('Aguascalientes'),
    ('Baja California'),
    ('Baja California Sur'),
    ('Campeche'),
    ('Chiapas'),
    ('Chihuahua'),
    ('Ciudad de México'),
    ('Coahuila'),
    ('Colima'),
    ('Durango'),
    ('Estado de México'),
    ('Guanajuato'),
    ('Guerrero'),
    ('Hidalgo'),
    ('Jalisco'),
    ('Michoacán'),
    ('Morelos'),
    ('Nayarit'),
    ('Nuevo León'),
    ('Oaxaca'),
    ('Puebla'),
    ('Querétaro'),
    ('Quintana Roo'),
    ('San Luis Potosí'),
    ('Sinaloa'),
    ('Sonora'),
    ('Tabasco'),
    ('Tamaulipas'),
    ('Tlaxcala'),
    ('Veracruz'),
    ('Yucatán'),
    ('Zacatecas');

/* INSERTS CATEGORIA_EVENTOS */

INSERT INTO
    `eventos_estados` (`id_evento`, `id_estado`)
VALUES
    (1, 22),
    (2, 22),
    (3, 22),
    (4, 22),
    (5, 22),
    (6, 21);

INSERT INTO
    `eventos_categorias` (`id_categoria`, `id_evento`)
VALUES
    (4, 1),
    (7, 1),
    (6, 2),
    (4, 2),
    (7, 3),
    (4, 3),
    (2, 4),
    (5, 4),
    (4, 5),
    (3, 5),
    (7, 6),
    (6, 6);

INSERT INTO 
    `usuarios_eventos_crean` (`id_usuario`, `id_evento`, `esta_aprobado`, `esta_activo`) 
VALUES 
    (4, 1, 0, 1), 
    (4, 2, 0, 1), 
    (4, 3, 1, 1), 
    (4, 4, 1, 1);

INSERT INTO 
    `usuarios_eventos_reservan` (`id_usuario`, `id_evento`, `asistencia`, `codigo_qr`, `hash_qr`, `esta_activo`)
VALUES 
    (4, 6, 1, 'soyunQr', '12345678910', 1), 
    (4, 4, 0, 'soyunQr', '12345678910', 1);
