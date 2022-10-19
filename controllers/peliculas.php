<?php

namespace Controllers;

use Models\pelicula;

class Peliculas
{
    public static function create_pelicula($imdbID, $Title, $Typep, $Yearp, $Poster)
    {
        $pelicula = Pelicula::create(["imdbID" => $imdbID, "Title" => $Title, "Typep" => $Typep, "Yearp" => $Yearp, "Poster" => $Poster]);
        return $pelicula;
    }

    public static function get__peliculas()
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
        $peliculas = Pelicula::orderBy("Type", 'ASC')->get();
        return $peliculas;
    }

    public static function get_orderbyDesc_Type()
    {
        $peliculas = Pelicula::orderBy("Type", 'DESC')->get();
        return $peliculas;
    }

    public static function get_orderbyAsc_Year()
    {
        $peliculas = Pelicula::orderBy("Year", 'ASC')->get();
        return $peliculas;
    }

    public static function get_orderbyDesc_Year()
    {
        $peliculas = Pelicula::orderBy("Year", 'DESC')->get();
        return $peliculas;
    }
}

?>