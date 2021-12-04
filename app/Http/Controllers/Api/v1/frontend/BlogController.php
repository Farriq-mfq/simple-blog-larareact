<?php

namespace App\Http\Controllers\Api\v1\frontend;

use App\Http\Controllers\Controller;
use App\Repositories\frontend\Blogrepo;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    protected $blogrepo;
    public function __construct(Blogrepo $blogrepo)
    {
        $this->blogrepo = $blogrepo;
    }
    public function getAll()
    {
        return $this->blogrepo->getAll();
    }
}
