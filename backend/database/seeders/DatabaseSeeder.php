<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

use App\Models\Moneda;
use App\Models\Producto;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Moneda Inicial
        Moneda::create([
            'nombre' => "Dolares",
            'siglas' => "USD",
        ]);

        // Producto Inicial
        Producto::create([
            'nombre' => "Plantilla 1",
            'resumen' => "Una de las mejores para tu perfil",
            'precio' => "100",
            'imagen' => "https://www.yacaresistemas.com/portfolio/builderximg/plantilla1.png",
            'moneda_id' => 1,
            'orden' => 1,
        ]);

        Producto::create([
            'nombre' => "Plantilla 2",
            'resumen' => "Uno de las mejores",
            'precio' => "200",
            'imagen' => "https://www.yacaresistemas.com/portfolio/builderximg/plantilla2.jpg",
            'moneda_id' => 1,
            'orden' => 2,
        ]);
    

    }
}
