<?php
require "../config.php";
require "../vendor/autoload.php";
use Models\Database;
new Database();
use Controllers\Peliculas;
$data = file_get_contents('php://input');
$data = json_decode($data , true);
if ($data['type'] == 'desc'){
    $peliculas = Peliculas::get_orderbyDesc_Title();
}
else if ($data['type'] == 'asc'){
    $peliculas = Peliculas::get_orderbyAsc_Title();
}
echo $peliculas;