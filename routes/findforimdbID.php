<?php 
  require "../config.php";
  require "../vendor/autoload.php";
  use Models\Database;
  new Database();
  use Controllers\Peliculas;
  $peliculas = Peliculas::get_whereLike_imdbID();
  echo $peliculas;
?>