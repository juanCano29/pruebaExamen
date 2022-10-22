<?php 
   require "../config.php";
   require "../vendor/autoload.php";
   use Models\Database;
   new Database();
   use Controllers\Peliculas;
   $data = file_get_contents('php://input');
   $data = json_decode($data, true);
   $save = Peliculas::create_pelicula($data["imdbID"], $data["Title"], $data["Type"], $data["Year"], $data["Writer"], $data["Director"], $data["Poster"]);
   return $save;
?>
