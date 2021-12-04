<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Repositories\AdminRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    protected $AdminRepo;
    public function __construct(AdminRepository $Admin)
    {
        $this->AdminRepo = $Admin;
    }
    public function login(Request $request)
    {
        return $this->AdminRepo->login($request);
    }
    public function admin()
    {
        return $this->AdminRepo->admin();
    }
}
