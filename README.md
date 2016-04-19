# www-site
###Instructions to get the www and blog running and how to restore a backup.

###Index

1. Struchture of the site
2. Static pages
3. WordPress Installation to a Subdirectory
4. Resources
  1. Plugins
  2. Theme
  3. Duplicator Backup
  4. DB Backup
  5. Wp-Config

#WordPress Installation to a Subdirectory

Install WordPress in the subdirectory by using [wp-cli link](http://wp-cli.org/).
I will assume that you set the virtual host being carried out as example.com using the wp-setup command.

If the configuration of the virtual host does not end /etc/nginx/conf.d/default.conf , /etc/nginx/conf.d/default.backend.conf please perform the virtual host settings in Nginx by copying the following.

There is a need to rewrite the server_name , root in the configuration file that you copied. And delete the default statement.
The configuration file created after sudo service nginx reload so you will need to reflect the changes to the configuration file, please be careful.

The configuration file created after sudo service nginx reload need to reflect the changes (to the configuration file) so please be careful.

#Download WordPress Core Source

First, download the WordPress core source by creating a directory of the installation destination.

/var/www/vhoste/example.com/test installation location

    $ sudo mkdir -p /var/www/vhoste/example.com/test
    $ cd /var/www/vhoste/example.com/test
    $ sudo wp --allow-root core download
    $ sudo chown -R nginx:nginx /var/www/vhoste/example.com/test

#Create Database

Create a user and database (for database access).
The MySQL username is wp_user, password wp_password, and the database name that you created will be the db_example_com_test.

If it does not set a password for the root account of MySQL, you can create a database by running the following command.
This is because it is disabled by default to connect to port 3306 from the outside. Please set a password to the root account).

    $ mysql -u root
    mysql> create database db_example_com_test default character set utf8 collate utf8_general_ci;
    mysql> grant all privileges on db_example_com_test.* to wp_user@localhost identified by 'wp_password';
    mysql> exit
    $

#Creating a WordPress config file

Create a config file of WordPress.The MySQL username is wp_user, password wp_password, and the database name that you created will be the db_example_com_test.

    $ sudo wp --allow-root core config --dbname=db_example_com_test --dbuser=wp_user --dbpass=wp_password

#Modification of the Nginx Configuration File

Lastly, I will modify the configuration file of the back-end side of the Nginx.
As a subdirectory /test is as follows: If you installed the location /test/ {}please add.

    server {
        listen      unix:/var/run/nginx-backend.sock;
        server_name example.com;
        root        /var/www/vhosts/example.com;
        index       index.php index.html index.htm;

    access_log  /var/log/nginx/example.com.backend.access.log backend;

    keepalive_timeout 25;
    port_in_redirect  off;

    gzip              off;
    gzip_vary         off;

    location /test/ {
        try_files $uri $uri/ /test/index.php?$args;
    }

    include /etc/nginx/wp-singlesite;
    #include /etc/nginx/wp-multisite-subdir;
    }

Please reflect the changes in the configuration file with sudo service nginx reload . After that was carried out, it will modify the configuration file of nginx.

WordPress installation to a subdirectory is completed.

It may be performed to create the administrator user with access from the browser, and the command wp core install --url=<url> --title=<site-title> --admin_user=<username> --admin_password=<password> --admin_email=<email> may be installed in the command line.
