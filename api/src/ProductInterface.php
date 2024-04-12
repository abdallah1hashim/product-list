<?php



interface ProductInterface
{
    public function insertAdditionalData(array $data,  $productId, PDO $conn): void;
}
