<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VehicleModelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->models() as $model) {
            DB::table('vehicle_models')->insert([
                'name' => $model
            ]);
        }
    }

    private function models()
    {
        return [
            "145",
            "146",
            "147",
            "155",
            "156",
            "159",
            "164",
            "166",
            "33",
            "C",
            "75",
            "Competizione",
            "Alfas",
            "Alfetta",
            "Arna",
            "Brera",
            "Giulia",
            "Giulietta",
            "GT",
            "GTA",
            "GTV",
            "MiTo",
            "Montreal",
            "Spider",
            "Stelvio",
            "Tonale",
            "Agile",
            "Alero",
            "Astra",
            "Astro",
            "Avalanche",
            "Aveo",
            "BelAir",
            "Beretta",
            "Blazer",
            "BoltEUV",
            "BoltEV",
            "1",
            "2",
            "3",
            "5",
            "i3",
            "i4",
            "i8",
            "iX",
            "iX3",
            "M2",
            "M3",
            "M4",
            "M5",
            "M6",
            "M8",
        ];
    }
}
