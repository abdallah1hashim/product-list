<?php


use gateways\ProductGateway;
use services\DB;


spl_autoload_register(function ($class) {
    require str_replace("\\", DIRECTORY_SEPARATOR, $class) . ".php";
});



set_exception_handler("ErrorHandler::handleException");

// set api headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, DELETE");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-type:application/json; charset=UTF8;");

// getting url and method
$currLink = $_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];


// connect to database
$host = "localhost";
$dbName = "productlist";
$user = "root";
$pass = '';

$database = new DB($host, $dbName, $user, $pass);

$gateway = new ProductGateway($database);


// Routes
$routes = [
    'products' => "controllers/ProductController.php",
];

$uri = parse_url($_SERVER["REQUEST_URI"])["path"];
$parts = explode("/", $uri);


// handle worng routes
if ($parts[3] !== "products") {
    http_response_code(404);
    exit;
}

if (array_key_exists($parts[3], $routes)) {
    require $routes[$parts[3]];
}


$controller = new ProductController($gateway);

$controller->processReq($method);
