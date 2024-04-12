<?php

namespace src;

require_once "ProductInterface.php";

use src\ProductInterface;
use src\Furniture;
use src\Book;
use src\Disc;

use InvalidArgumentException;


class ProductFactory
{
    private static $productTypes = [
        1 => Furniture::class,
        2 => Book::class,
        3 => Disc::class,
    ];

    public static function createProduct(array $data): ProductInterface
    {
        if (!isset(self::$productTypes[$data['type']])) {
            throw new InvalidArgumentException("Invalid product type.");
        }

        $className = self::$productTypes[$data['type']];
        return new $className;
    }
}
