<?php

namespace App\Http\Controllers\V1;

use App\Http\Controllers\Controller;
use App\Models\Producto;
use Illuminate\Http\Request;
use JWTAuth;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;

class ProductoController extends Controller
{
    protected $user;

    public function __construct(Request $request)
    {
        $token = $request->header('Authorization');

        if($token != '')
            $this->user = JWTAuth::parseToken()->authenticate();
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Producto::get();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only('nombre', 'resumen', 'precio', 'imagen', 'moneda_id', 'orden');
        $validator = Validator::make($data, [
            'nombre' => 'required|max:500|string',
            'resumen' => 'required|string',
            'precio' => 'required|numeric',
            'imagen' => 'required|string',
            'moneda_id' => 'required|numeric',
            'orden' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 400);
        }

        $product = Producto::create([
            'nombre' => $request->nombre,
            'resumen' => $request->resumen,
            'precio' => $request->precio,
            'imagen' => $request->imagen,
            'moneda_id' => $request->moneda_id,
            'orden' => $request->orden
        ]);

        return response()->json([
            'message' => 'Producto creado correctamente',
            'data' => $product
        ], Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product = Product::find($id);

        if (!$product) {
            return response()->json([
                'message' => 'Producto no encontrado'
            ], 404);
        }

        return $product;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->only('nombre', 'resumen', 'precio', 'imagen', 'moneda_id', 'orden');
        $validator = Validator::make($data, [
            'nombre' => 'required|max:500|string',
            'resumen' => 'required|string',
            'precio' => 'required|numeric',
            'imagen' => 'required|string',
            'moneda_id' => 'required|numeric',
            'orden' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->messages()], 400);
        }

        $product = Product::findOrfail($id);

        $product->update([
            'nombre' => $request->nombre,
            'resumen' => $request->resumen,
            'precio' => $request->precio,
            'imagen' => $request->imagen,
            'moneda_id' => $request->moneda_id,
            'orden' => $request->orden
        ]);

        return response()->json([
            'message' => 'Producto actualizado correctamente',
            'data' => $product
        ], Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::findOrfail($id);

        $product->delete();

        return response()->json([
            'message' => 'Producto eliminado correctamente'
        ], Response::HTTP_OK);
    }
}
