<?php 
  require "../config.php";
  require "../vendor/autoload.php";
  use Models\Database;
  new Database();
  use Controllers\Peliculas;
  $data = file_get_contents('php://input');
  $data = json_decode($data, true);
  $peliculas = Peliculas::get_whereLike_Title($data['Title']);
  echo $peliculas;
?>