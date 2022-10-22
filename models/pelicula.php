<?php 
namespace Models;
use \Illuminate\Database\Eloquent\Model;
class Pelicula extends Model {
  protected $table = "peliculas";
  protected $fillable = ["imdbID", "Title", "Typep", "Yearp","Writer","Director", "Poster"];
  public $timestamps = false;
} 
?>