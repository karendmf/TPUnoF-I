<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 
// get database connection
include_once '../config/database.php';
 
// instantiate product object
include_once '../objects/libro.php';
 
$database = new Database();
$db = $database->getConnection();
 
$libro = new Libro($db);
 
// get posted data
$data = json_decode(file_get_contents("php://input"));
 
// set product property values
$product->nombre = $data->nombre;
$product->isbn = $data->isbn;
$product->descripcion = $data->descripcion;
$product->autor = $data->autor;
$product->fecha = $data->fecha->format("Y-m-d");
$product->imagen = $data->imagen;
 
// create the product
if($product->create()){
    echo '{';
        echo '"message": "Libro creado"';
    echo '}';
}
 
// if unable to create the product, tell the user
else{
    echo '{';
        echo '"message": "Error al crear un libro."';
    echo '}';
}
?>