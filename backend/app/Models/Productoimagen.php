<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Productoimagen extends Model
{
    use HasFactory;

    public $table = "productoimagen";

    protected $fillable = [
        'producto_id',
        'imagen',
    ];
}
