<?php 

namespace App\Repositories\interfaces;


interface AdminInterface{
    public function login($request);
    public function admin();
}