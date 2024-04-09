<?php

function customAutoloader($className)
{

    $baseDir = __DIR__ . '/../src/';

    $className = str_replace('\\', DIRECTORY_SEPARATOR, $className);

    $filePath = $baseDir . $className . '.php';

    if (file_exists($filePath)) {
        require_once $filePath;
    }
}


spl_autoload_register('customAutoloader');


use YourNamespace\ProductFactory;
use YourNamespace\ProductInterface;
use YourNamespace\Disc;
use YourNamespace\Furniture;
use YourNamespace\Book;

class ProductGateway
{
    private PDO $conn;

    public function __construct(DB $database)
    {
        $this->conn = $database->getConnection();
    }

    public function getAll(): array
    {
        $sql = "
        SELECT *
        FROM products
        INNER JOIN book ON products.productId = book.productId
        UNION
        SELECT *
        FROM products
        INNER JOIN disc ON products.productId = disc.productId
        UNION
        SELECT *
        FROM products
INNER JOIN furniture ON products.productId = furniture.productId;
";

        $stmt = $this->conn->query($sql);

        $data = [];

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $row;
        }
        return $data;
    }

    public function create(array $data): string
    {

        $sql = "INSERT INTO products (name, sku, price, type)
        VALUES (:name, :sku,:price ,:type)";

        $stmt = $this->conn->prepare($sql);

        $stmt->bindValue(":name", $data["name"], PDO::PARAM_STR);
        $stmt->bindValue(":sku", $data["sku"], PDO::PARAM_STR);
        $stmt->bindValue(":type", $data["type"], PDO::PARAM_INT);
        $stmt->bindValue(":price", $data["price"], PDO::PARAM_INT);

        $stmt->execute();

        $productId = $this->conn->lastInsertId();

        $product = ProductFactory::createProduct($data);
        $product->insertAdditionalData($data, $productId, $this->conn);

        return $productId;
    }
    public function deleteProduct($productId)
    {
        foreach ($productId as $id) {
            $sql = "DELETE FROM products WHERE productId = (:productId)";
            $stmt = $this->conn->prepare($sql);
            $stmt->bindValue(":productId", $id, PDO::PARAM_INT);
            $stmt->execute();
        }
    }
}
