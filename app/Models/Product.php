<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'description',
        'category',
        'image_url',
    ];

    public function productVariants()
    {
        return $this->hasMany(ProductVariant::class);
    }
}
