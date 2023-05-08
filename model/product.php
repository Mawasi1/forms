<?php
class Product
{
    public ?string $name;
    public ?string $description;
    public ?string $size;
    
    public function __construct(?string $name, ?string $description, ?string $size)
    {
        $this->name = $name;
        $this->description = $description;
        $this->size = $size;

    }
}

class Inventory
{
    public function __construct(){}

    public array $inventory = [];
    public function GenerateProducts()
    {
        $items = array('shorts', 'jeans', 't-shirt', 'shirt', 'jacket', 'pants', 'trousers', 'vest', 'socks');
        $colors = array('green ', 'khaky', 'striped ', 'long', 'blue', 'dark', 'brown', 'gray', 'socks');
        $sizes = array('s', 'm', 'l', 'xl');
        for ($i = 0; $i < 10; $i++) {
            $item = array_rand($items, 1);
            $color = array_rand($colors, 1);
            $size = array_rand($sizes, 1);
            array_push($this->inventory, new Product($items[$item], $colors[$color] . ' ' . $items[$item], $sizes[$size]));
        }
    }

    public function getInventory()
    {
        $this->GenerateProducts();
        return $this->inventory;
    }
}



?>