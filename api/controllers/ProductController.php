<?php

class ProductController
{
    public function __construct(private ProductGateway $gateway)
    {
    }
    public function processReq(string $method, ?string $id): void
    {
        if ($id) {
            $this->processResourceReq($method, $id);
        } else {
            $this->processCollectionReq($method);
        }
    }

    private function processResourceReq(string $method, string $id): void
    {
        switch ($method) {
            case "DELETE":
                echo json_encode(["id" => $id]);
                break;
        }
    }
    private function processCollectionReq(string $method): void
    {
        switch ($method) {
            case "GET":
                echo json_encode($this->gateway->getAll());
                break;
            case "POST":
                $data = (array)json_decode(file_get_contents("php://input"), true);
                $id = $this->gateway->create($data);
                if (!$id) {
                    http_response_code(400);
                    echo json_encode(
                        [
                            'success' => false,
                            'message' => 'SKU already exists'
                        ]
                    );
                } else {

                    echo json_encode(
                        [
                            "message" => "Product Created",
                            "id" => $id,
                        ]
                    );
                }
                break;
            case "DELETE":
                $data = (array)json_decode(file_get_contents("php://input"), true);
                $this->gateway->deleteProduct($data["productId"]);
                break;
        }
    }
}
