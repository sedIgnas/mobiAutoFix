<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;

    protected $fillable = [
        'make_id',
        'model_id',
        'category_id',
    ];

    public function make()
    {
        return $this->belongsTo(Make::class);
    }
    public function model()
    {
        return $this->belongsTo(VehicleModel::class);
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
