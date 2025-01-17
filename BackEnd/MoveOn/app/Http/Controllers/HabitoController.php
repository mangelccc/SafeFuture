<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreHabitoRequest;
use App\Http\Requests\UpdateHabitoRequest;
use App\Models\Habito;

class HabitoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreHabitoRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Habito $habito)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Habito $habito)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateHabitoRequest $request, Habito $habito)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Habito $habito)
    {
        //
    }
}
