<?php

use services\DB;

spl_autoload_register(function ($class) {
    $base_dir = __DIR__ . '/api/';
    $file = $base_dir . str_replace('\\', '/', $class) . '.php';

    if (file_exists($file)) {
        require_once $file;
    }
});


$conn = new DB("localhost", "productlist", "root", "");


echo "hello";