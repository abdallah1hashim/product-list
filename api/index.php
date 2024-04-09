<?php

require_once "errorHandler/ErrorHandler.php";
require_once "services/DB.php";
require_once "gateways/ProductGateway.php";
require_once "controllers/ProductController.php";

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
$urls = [
    '/product-list/api/products' => "ProductController@processReq",
];
$parts = explode("/", $currLink);
$id = $parts[4] ?? null;

// handle worng routes
if ($parts[3] !== "products") {
    http_response_code(404);
    exit;
}


$controller = new ProductController($gateway);

$controller->processReq($method, $id);
