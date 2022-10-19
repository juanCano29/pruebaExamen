<?php 
   require "../config.php";
   require "../vendor/autoload.php";
   use Models\Database;
   new Database();
   use Controllers\Peliculas;
   $data = file_get_contents('php://input');
   $data = json_decode($data, true);
   foreach ($data as $peliculas) {
      $save = Peliculas::create_pelicula($peliculas["imdbID"], $peliculas["Title"], $peliculas["Type"], $peliculas["Year"], $peliculas["Poster"]);
   } 
   return $save;
?>
