<?php

namespace Controllers;

use Models\pelicula;

class Peliculas
{
    public static function create_pelicula($imdbID, $Title, $Typep, $Yearp, $Writer, $Director, $Poster)
    {
        $pelicula = Pelicula::create(["imdbID" => $imdbID, "Title" => $Title, "Typep" => $Typep, "Yearp" => $Yearp, "Writer" => $Writer, "Director" => $Director, "Poster" => $Poster]);
        return $pelicula;
    }

    public static function get_all_peliculas()
    {
        $peliculas = Pelicula::all();
        return $peliculas;
    }

    public static function get_whereLike_imdbID($imdbID)
    {
        $peliculas = Pelicula::where('imdbID', 'like', '%' . $imdbID . '%')->get();
        return $peliculas;
    }

    public static function get_whereLike_Title($Title)
    {
        $peliculas = Pelicula::where('Title', 'like', '%' . $Title . '%')->get();
        return $peliculas;
    }

    public static function get_whereLike_Type($Typep)
    {
        $peliculas = Pelicula::where('Typep', 'like', '%' . $Typep . '%')->get();
        return $peliculas;
    }

    public static function get_whereLike_Year($Yearp)
    {
        $peliculas = Pelicula::where('Yearp', 'like', '%' . $Yearp . '%')->get();
        return $peliculas;
    }
    public static function get_whereLike_Writer($Writer){
        $peliculas = Pelicula::where('Writer', 'like', '%' . $Writer . '%')->get();
        return $peliculas;
    }
    public static function get_whereLike_Director($Director){
        $peliculas = Pelicula::where('Director', 'like', '%' . $Director . '%')->get();
        return $peliculas;
    }

    public static function get_orderbyAsc_imdbID()
    {
        $peliculas = Pelicula::orderBy('imdbID', 'ASC')->get();
        return $peliculas;
    }

    public static function get_orderbyDesc_imdbID()
    {
        $peliculas = Pelicula::orderBy('imdbID', 'DESC')->get();
        return $peliculas;
    }

    public static function get_orderbyAsc_Title()
    {
        $peliculas = Pelicula::orderBy("Title", 'ASC')->get();
        return $peliculas;
    }

    public static function get_orderbyDesc_Title()
    {
        $peliculas = Pelicula::orderBy("Title", 'DESC')->get();
        return $peliculas;
    }

    public static function get_orderbyAsc_Type()
    {
        $peliculas = Pelicula::orderBy("Typep", 'ASC')->get();
        return $peliculas;
    }

    public static function get_orderbyDesc_Type()
    {
        $peliculas = Pelicula::orderBy("Typep", 'DESC')->get();
        return $peliculas;
    }

    public static function get_orderbyAsc_Year()
    {
        $peliculas = Pelicula::orderBy("Yearp", 'ASC')->get();
        return $peliculas;
    }

    public static function get_orderbyDesc_Year()
    {
        $peliculas = Pelicula::orderBy("Yearp", 'DESC')->get();
        return $peliculas;
    }
    public static function get_orderbyAsc_Writer()
    {
        $peliculas = Pelicula::orderBy("Writer", 'ASC')->get();
        return $peliculas;
    }

    public static function get_orderbyDesc_Writer()
    {
        $peliculas = Pelicula::orderBy("Writer", 'DESC')->get();
        return $peliculas;
    }
    public static function get_orderbyAsc_Director()
    {
        $peliculas = Pelicula::orderBy("Director", 'ASC')->get();
        return $peliculas;
    }

    public static function get_orderbyDesc_Director()
    {
        $peliculas = Pelicula::orderBy("Director", 'DESC')->get();
        return $peliculas;
    }
}

?>