<?php
namespace App\Repositories\frontend;

use App\Models\Blog;
use App\Repositories\interfaces\frontend\BlogInterface;
use App\traits\Respon;

class Blogrepo implements BlogInterface{
    use Respon;
    public function getAll()
    {
        $all = Blog::all();
        if(count($all)){
            return $this->Response('get blog',true,200,$all );
        }else{
            return $this->Response('error',false,404);
        }
    }
}