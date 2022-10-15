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
     public static function get_whereLike_imdbID($imdbID){
      $peliculas = Pelicula::where('imdbID', 'like', '%'.$imdbID.'%')->get();
      return $peliculas;
     }
     public static function get_whereLike_Title($Title){
      $peliculas = Pelicula::where('Title', 'like', '%'.$Title.'%')->get();
      return $peliculas;
     }
     public static function get_whereLike_Type($Typep){
      $peliculas = Pelicula::where('Typep', 'like', '%'.$Typep.'%')->get();
      return $peliculas;
     }
     public static function get_whereLike_Year($Yearp){
      $peliculas = Pelicula::where('Yearp', 'like', '%'.$Yearp.'%')->get();
      return $peliculas;
     }
  }
?>