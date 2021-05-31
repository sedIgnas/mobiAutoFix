<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->cities() as $city) {
            DB::table('cities')->insert([
                'name' => $city
            ]);
        }
    }

    private function cities()
    {
        return [
            'Vilnius',
            'Kaunas',
            'Klaipėda',
            'Šiauliai',
            'Panevėžys',
            'Alytus',
            'Marijampolė',
            'Mažeikiai',
            'Jonava',
            'Utena',
            'Kėdainiai',
            'Tauragė',
            'Telšiai',
            'Ukmergė',
            'Visaginas',
            'Plungė',
            'Kretinga',
            'Palanga',
            'Radviliškis',
            'Šilutė',
            'Gargždai',
            'Druskininkai',
            'Rokiškis',
            'Elektrėnai',
            'Kuršėnai',
            'Grigiškės',
            'Biržai',
            'Lentvaris',
            'Garliava',
            'Jurbarkas',
            'Raseiniai',
            'Vilkaviškis',
            'Anykščiai',
            'Prienai',
            'Joniškis',
            'Varėna',
            'Kelmė',
            'Kaišiadorys',
            'Naujoji Akmenė',
            'Šalčininkai',
            'Pasvalys',
            'Zarasai',
            'Kupiškis',
            'Kazlų Rūda',
            'Širvintos',
            'Molėtai',
            'Pabradė',
            'Skuodas',
            'Šakiai',
            'Ignalina',
            'Švenčionėliai',
            'Šilalė',
            'Nemenčinė',
            'Kybartai',
            'Vievis',
            'Pakruojis',
            'Trakai',
            'Švenčionys',
            'Kalvarija',
            'Lazdijai',
            'Neringa',
            'Žiežmariai',
            'Rietavas',
            'Eišiškės',
            'Birštonas',
            'Ariogala',
            'Šeduva',
            'Akmenė',
            'Venta',
            'Viekšniai',
            'Rūdiškės',
            'Vilkija',
            'Tytuvėnai',
            'Ežerėlis',
            'Gelgaudiškis',
            'Pagėgiai',
            'Kudirkos Naumiestis',
            'Skaudvilė',
            'Ramygala',
            'Salantai',
            'Žagarė',
            'Linkuva',
            'Priekulė',
            'Simnas',
            'Veisiejai',
            'Baltoji Vokė',
            'Joniškėlis',
            'Jieznas',
            'Varniai',
            'Daugai',
            'Seda',
            'Virbalis',
            'Subačius',
            'Vabalninkas',
            'Obeliai',
            'Dūkštas',
            'Pandėlys',
            'Užventis',
            'Dusetos',
            'Kavarskas'
        ];
    }
}
