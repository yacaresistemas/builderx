<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pago extends Model
{
    use HasFactory;

    public $table = "pago";

    protected $fillable = [
        'transaccion_id',
        'estatus_id',
        'monto',
        'moneda_id',
    ];
}
