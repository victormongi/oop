<?php

use Illuminate\Support\Collection;
use Illuminate\Support\Carbon;

require_once 'vendor/autoload.php';
include 'functions.php';

$products = collect(load_json('products.json')['products']);

var_dump($products->all());
















// $totalCost = 0;

// foreach ($products as $product) {
//   if ($product['product_type'] == 'Lamp' || $product['product_type'] == 'Wallet') {
//     foreach ($product['variants'] as $variant) {
//       $totalCost += $variant['price'];
//     }
//   }
// }

// $totalCost = $products->filter( function ($product) {
//   // return $product['product_type'] == 'Lamp' || $product['product_type'] == 'Wallet';
//   return $product['product_type'] == 'Pants';
// })->flatMap( function ($product) {
//   return $product['variants'];
// })->sum('price');

// dd($totalCost);

// $shifts =[
//   'Shipping Stive_Robi_H4',
//   'Analogi_Lore_T5',
//   'Smarti_Dun_U7',
//   'Harmon_Mato_Y78'
// ];

// $shiftIds = collect($shifts)->map( function($shift) {
//   return collect(explode('_',$shift))->last();
// });

// var_dump($shifts);


// convert binary to decimal

// $binary = '1110000111010101010';

// $columns = collect(str_split($binary))
//   ->reverse()->values()->map( function($column, $index) {
//     return $column * (pow(2, $index));
// })->sum();

// var_dump($columns);

// function gitHubScores($events)
// {
// //
// }

// $events = load_json('events.json');

// dd(gitHubScores($events));
