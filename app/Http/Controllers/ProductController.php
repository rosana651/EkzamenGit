<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Cache;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
            $products = Cache::remember('products', 3600, function () {
            return Product::all();
        });

    return response()->json($products, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
  public function store(Request $request)
{
    $request->validate([
        'name' => 'required|string|max:255',
        'description' => 'nullable|string|max:1000',
        'category' => 'required|string',
        'image_url' => 'nullable|url',
    ]);

    $product = Product::create([
        'name' => $request->name,
        'description' => $request->description,
        'category' => $request->category,
        'image_url' => $request->image_url
    ]);

    Cache::forget('products');

    return response()->json($product, 201);
}
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // $product = Product::where('id',$id);
        $product = Product::findOrFail($id);
        return response()->json($product,200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
            'category' => 'required|string',
            'image_url' => 'nullable|url',
        ]);

        $product->update([
            'name' => $request->name,
            'description' => $request->description,
            'category' => $request->category,
            'image_url' => $request->image_url
        ]);

        Cache::forget('products');

         return response()->json($product,200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        Cache::forget('products');
        return response()->json(['message' => 'Product deleted'], 200);
    }
}
