<?php

namespace App\Http\Controllers;

use App\ToDo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ToDoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {


       return Inertia::render('ToDo/Index', [
           'tareas' => ToDo::where('complete', 0)->get(['id', 'todo', 'complete'])

       ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function complete()
    {
        return Inertia::render('ToDo/Complete', [
            'tareas' => ToDo::where('complete', 0)->get(['id', 'todo', 'complete'])

        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function store(Request $request)
    {
        //

        $datos = $request;
        //dd($request);

        $tareas = new ToDo();

        $tareas->todo = $datos['nombre'];
        $tareas->complete = $datos['completado'];
        $tareas->indice = $datos['indice'];
        $tareas->save();


        return Inertia::render('ToDo/Index', [
            'tareas' => ToDo::where('complete', 0)->get(['id', 'todo', 'complete'])
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\ToDo  $toDo
     * @return \Inertia\Response
     */
    public function show()
    {
        //

        return Inertia::render('ToDo/Complete', [
            'tareasCompletadas' => ToDo::where('complete', 1)->get(['id', 'todo', 'complete'])
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\ToDo  $toDo
     * @return \Illuminate\Http\Response
     */
    public function edit(ToDo $toDo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\ToDo  $toDo
     * @return \Inertia\Response
     */
    public function update(Request $request, ToDo $toDo)
    {
        //

        DB::table('to_dos')
            ->where('id', $request['id'])
            ->update(['complete' => $request['completado']]);


        return Inertia::render('ToDo/Index', [
            'tareas' => ToDo::where('complete', 0)->get(['id', 'todo', 'complete'])
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\ToDo  $toDo
     * @return \Illuminate\Http\Response
     */
    public function destroy(ToDo $toDo)
    {
        //
    }
}
