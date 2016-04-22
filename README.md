# www-site
###Instructions to get the www and blog running and how to restore a backup.

###Index

1. General 
2. Resources
  1. Plugins
  2. Theme
  3. Duplicator Backup
  4. DB Backup
  5. Wp-Config

#General 
The current theme works for Wordpress 4.5

For 3blades v 2.0.1 (04/21/2016) all statis pages have been integrated into the main theme, all we need is to have the basic wordpress installation running on the root folder.


#Plugins
The following plugins are installed on the v 2.0.1
* Duplicator [download link](https://wordpress.org/plugins/duplicator/)
* YOAST SEO [download link](https://wordpress.org/plugins/wordpress-seo/)
* Email Marketing by Drip [download link](https://wordpress.org/plugins/email-marketing/)
* Disqus [download link](https://wordpress.org/plugins/disqus-comment-system/)
* W3 Total Cache [download link](https://wordpress.org/plugins/w3-total-cache/) 

#Theme
Theme files need to be installed on this route: /var/www/html/wp-content/themes/3blades
current theme files are on this repo on wp-content/themes/3blades folder

Current version: 2.0.1
Date: 04/21/2016

#Duplicator Backup

A full back up of the site is done every week and exported into two files:
* Archive
* Installer
This two files include a full copy of the entire site and its database, in order to reinstall the site or clone it into a new server, there is no need to have a wordpress cms installed. The two files will installed the lastest working version.
Current files are on this repo on Duplicator folder.

Steps:
* Create a DB and User for the new installation.
* Upload Archive and Installer files into an empty folder.
* Execute Installer.php
* Fill the DB, DB-Username and password.
* The site will be restored.

#Site configuration wp-config

In order to get the site running, wp-config.php on the root directory need to have the following set up:

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'data-base-name');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'db-password');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');






