<?php

namespace src;

use PDO;

interface ProductInterface
{
    public function insertAdditionalData(array $data,  $productId, PDO $conn): void;
}
