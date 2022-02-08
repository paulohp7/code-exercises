    CREATE DATABASE IF NOT EXISTS DB_users;

    USE DB_users;

    CREATE TABLE tb_users
    (
        id INT NOT NULL AUTO_INCREMENT,
        first_name VARCHAR(30) NOT NULL,
        last_name VARCHAR(30) NOT NULL,
        email VARCHAR(50) NOT NULL,
        user_password VARCHAR(20) NOT NULL,
        PRIMARY KEY(id)
    );

    INSERT INTO tb_users (first_name,last_name,email,user_password)

	VALUES 
    ('Lady', 'Gaga', 'monster@ball.com', 'iwasbornthisway'),
    ('Doja', 'Cat', 'woman@iam.com', 'letmebeyourwoman'),
    ('Pabblo', 'Vittar', 'tristecom@t.com', 'hojeeutocomtesao')
    