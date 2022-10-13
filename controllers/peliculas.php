<?php 
  namespace Controllers;
  use Models\pelicula;
  class Peliculas {
     public static function create_pelicula($imdbID, $Title, $Typep, $Yearp, $Poster){
          $pelicula = Pelicula::create(["imdbID"=>$imdbID, "Title"=>$Title, "Typep"=>$Typep, "Yearp" => $Yearp, "Poster"=>$Poster]);
          return $pelicula;
     }
     public static function get__peliculas(){
        $peliculas = Pelicula::all();
        return $peliculas;
     }
     public static function get_where_pelicula($id){
       $peliculas = Pelicula::find($id);
       return $peliculas;
     }
  }
?>