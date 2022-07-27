<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tipoestatus extends Model
{
    use HasFactory;

    public $table = "tipoestatus";

    protected $fillable = [
        'nombre',
        'estatus_id',
    ];
}
