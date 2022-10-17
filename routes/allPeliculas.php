<?php 
   require "../config.php";
   require "../vendor/autoload.php";
   use Models\Database;
   new Database();
   use Controllers\Peliculas;
   $peliculas = Peliculas::get__peliculas();
   $peliculas = json_encode($peliculas, JSON_FORCE_OBJECT);
   echo $peliculas;
   return $peliculas;
?>
