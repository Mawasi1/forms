<?php

// require '../../model/product.php';
require('BaseController.php');
require('model/product.php');
// use controller\api\BaseController;

class SearchController extends BaseController
{

    public array $inventory;

    public function __construct()
    {
        $temp = new Inventory();

        $this->inventory = $temp->getInventory();
    }
    public function SearchInventory($name, $description, $size)
    {
        foreach ($this->inventory as $product) {
            if ($product->name == $name && $product->description == $description && $product->size == $size) {
                return $product;
            } else {

                return [];
            }

        }
    }

    public function searchResults()
    {

        $strErr = '';
        $requestMethod = $_SERVER['REQUEST_METHOD'];

        $queryParams = $this->getQueryStringParams();

        if (strtoupper($requestMethod) == 'GET') {
            try {
                if (isset($queryParams['name']) && isset($queryParams['description']) && isset($queryParams['size'])) {
                    $match = $this->SearchInventory($queryParams['name'], $queryParams['description'], $queryParams['size']);
                    $responseData = $match ? json_encode(array($match->name, $match->description, $match->size)) : json_encode(array('data' => array()));
                } else {

                    $match = '';
                    $responseData = json_encode(array('data' => array()));

                }

            } catch (Error $err) {

                $strErr = $err . getMessage();
            }



        }
        if (!$strErr) {

            $this->sendOutput($responseData, array('Content-Type: application/json', 'HTTP/1.1 200 OK'));
        } else {
            $this->sendOutput(json_encode(array('error' => $strErr)), array('Content-Type: application/json', 'HTTP/1.1 500 '));

        }

    }

    public function allResults()
    { 

            $strErr = '';
            $requestMethod = $_SERVER['REQUEST_METHOD'];


            if (strtoupper($requestMethod) == 'GET') {
                try {
                    $responseData = json_encode($this->map());


                } catch (Error $err) {

                    $strErr = $err . getMessage();
                }



            }
            if (!$strErr) {

                $this->sendOutput($responseData, array('Content-Type: application/json', 'HTTP/1.1 200 OK'));
            } else {
                $this->sendOutput(json_encode(array('error' => $strErr)), array('Content-Type: application/json', 'HTTP/1.1 500 '));

            }

        
    }

    public function map()
    {
        $arr = [];
        foreach ($this->inventory as $product) {
            array_push($arr,[$product->name,$product->description,$product->size]);
            
        }
        return $arr;
    }

}



?>