<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transacciondetalle extends Model
{
    use HasFactory;

    public $table = "transacciondetalle";

    protected $fillable = [
        'transaccion_id',
        'producto_id',
    ];

}
