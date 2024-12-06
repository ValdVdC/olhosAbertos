create database olhosAbertos ;
use olhosabertos;
SELECT * FROM politicos LIMIT 10;
create table politicos(
id int (30) NOT NULL, 
nome varchar(255) NOT NULL,
partido varchar(255) NOT NULL,
url varchar(100) NOT NULL,
PRIMARY KEY (id)
);
-- vereados.csg download : https://transparencia.recife.pe.leg.br/++api++/legislativo/vereadores/formdata/csv
LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/vereadores.csv'
INTO TABLE politicos
FIELDS TERMINATED BY ',' -- Delimitador de campos
ENCLOSED BY '"'          -- Aspas para strings (se houver)
LINES TERMINATED BY '\n' -- Final de linha
IGNORE 1 ROWS;   

SELECT * FROM politicos order by nome;
GRANT ALL PRIVILEGES ON olhosabertos.* TO 'admin'@'localhost';
SHOW VARIABLES LIKE 'secure_file_priv';