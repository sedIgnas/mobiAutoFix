<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class vehicleCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
            foreach ($this->categories() as $category) {
                DB::table('categories')->insert([
                    'name' => $category,
                    'description' => ''
                ]);
            }
        }

        private
        function categories()
        {
            return [
                "Sedan",
                "Coupe",
                "Hatchback",
                "Convertible",
                "Pickup-truck",
                "SUV",
                "Offroad",
                "Station-vagon",
                "Van",
                "Mini-van",
                "Sports-car",
                "Roadster",
                "Crossover",
                "Grand-tourer",
                "Luxury",
                "Race-car",
                "Limousine",
            ];
        }
    }
