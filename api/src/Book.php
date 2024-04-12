<?php

namespace src;

use PDO;
use src\ProductInterface;



class Book implements ProductInterface
{
    public function insertAdditionalData(array $data, $productId, PDO $conn): void
    {
        $sql = "INSERT INTO book (value, productId) VALUES (:value, :productId)";
        $stmt = $conn->prepare($sql);
        $stmt->bindValue(":value", $data["value"], PDO::PARAM_INT);
        $stmt->bindValue(":productId", $productId, PDO::PARAM_INT);
        $stmt->execute();
    }
}
