<?php

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
    public function deleteProduct($productId, $type)
    {
        $sql = "";
        $stmt = $this->conn->prepare("");

        switch ((int)$type) {
            case 1: // furniture
                $sql = "DELETE FROM furniture WHERE productId = (:productId)";
                break;
            case 2: // book
                $sql = "DELETE FROM book WHERE productId = (:productId)";
                break;
            case 3: // disc
                $sql = "DELETE FROM disc WHERE productId = (:productId)";
                break;
            default:
                // Handle default case
                return false;
        }

        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":productId", $productId, PDO::PARAM_STR);
        $stmt->execute();

        $sql = "DELETE FROM products WHERE productId = (:productId)";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindValue(":productId", $productId, PDO::PARAM_STR);
        $stmt->execute();

        return true;
    }
}