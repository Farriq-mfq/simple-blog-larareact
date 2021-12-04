<?php 
namespace App\Repositories\interfaces;

interface BlogInterface{
    public function getAll();
    public function Create($request);
    public function Delete($id);
    public function Edit($id);
}