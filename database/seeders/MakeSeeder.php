<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MakeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->makes() as $make) {
            DB::table('makes')->insert([
                'name' => $make
            ]);
        }
    }

    private function makes()
    {
        return [
            'Alfa Romeo',
            'Alpina',
            'Aston Martin',
            'Audi',
            'Bentley',
            'BMW',
            'Bugatti',
            'Cadillac',
            'Chevrolet',
            'Chrysler',
            'Citroen',
            'Cupra',
            'Dacia',
            'Daewoo',
            'Daihatsu',
            'Dodge',
            'DS',
            'Ferrari',
            'Fiat',
            'Ford',
            'GMC',
            'Great Wall',
            'Honda',
            'Hummer',
            'Hyundai',
            'Infiniti',
            'Jaguar',
            'Jeep',
            'Kia',
            'Koenigsegg',
            'Lada',
            'Lamborghini',
            'Lancia',
            'Land Rover',
            'Lexus',
            'Lotus',
            'Maserati',
            'Mazda',
            'Mercedes-Benz',
            'MG',
            'Mini',
            'Mitsubishi',
            'Moskvich',
            'NIO',
            'Nissan',
            'Opel',
            'Pagani',
            'Peugeot',
            'Porsche',
            'RAM',
            'Renault',
            'Rolls-Royce',
            'Rover',
            'Saab',
            'Seat',
            'Skoda',
            'Smart',
            'Subaru',
            'Suzuki',
            'Tesla',
            'Toyota',
            'Vauxhall',
            'Volkswagen',
            'Volvo',
        ];
    }
}
