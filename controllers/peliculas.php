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
     public static function get_whereLike_imdbID(){
      $peliculas = Pelicula::where('imdbID', 'like', '%2%')->get();
      return $peliculas;
     }
     public static function get_whereLike_Title(){
      $peliculas = Pelicula::where('Title', 'like', '%ha%')->get();
      return $peliculas;
     }
     public static function get_whereLike_Type(){
      $peliculas = Pelicula::where('Typep', 'like', '%movie%')->get();
      return $peliculas;
     }
     public static function get_whereLike_Year(){
      $peliculas = Pelicula::where('Yearp', 'like', '%11%')->get();
      return $peliculas;
     }
  }
?>