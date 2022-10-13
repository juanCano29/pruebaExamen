<?php 
namespace Models;
use \Illuminate\Database\Eloquent\Model;
class Pelicula extends Model {
  protected $table = "peliculas";
  protected $fillable = ["imdbID", "Title", "Typep", "Yearp", "Poster"];
  public $timestamps = false;
} 
?>