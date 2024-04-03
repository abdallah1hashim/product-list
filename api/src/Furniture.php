<?php

 class Furniture implements ProductInterface { 
    public function insertAdditionalData(array $data, $productId, PDO $conn): void {
        $sql = "INSERT INTO furniture (value, productId) VALUES (:value, :productId)";
        $stmt = $conn->prepare($sql);
        $stmt->bindValue(":value", $data["value"], PDO::PARAM_INT);
        $stmt->bindValue(":productId", $productId, PDO::PARAM_INT);
        $stmt->execute();
     } 
}