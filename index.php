<?php

require "./controller/api/SearchController.php";

$objFeedController = new SearchController();


$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$uri = explode('/', $uri);
if ((isset($uri[2]) && $uri[2] != 'products')) {

    header("HTTP/1.1 404 Not Found");

    exit();

} else if ((isset($uri[1]) && $uri[1] == 'all')) {
    $objFeedController->allResults();

} else {

    $objFeedController->searchResults();

}




?>