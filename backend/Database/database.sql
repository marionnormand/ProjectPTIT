SELECT * FROM dataptit;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
FLUSH PRIVILEGES; 
GRANT ALL PRIVILEGES ON dbproject.* TO 'root'@'localhost';
FLUSH PRIVILEGES;
/*SHOW GRANTS FOR CURRENT_USER;*/

/*SHOW GRANTS FOR 'root'@'localhost';*/
