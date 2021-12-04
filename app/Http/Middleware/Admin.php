<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\traits\Respon;
class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    use Respon;
    public function handle(Request $request, Closure $next)
    {
        if($request->headers->get('authorization') != null){
            $check = Auth::guard('admin')->check();
            if(!$check){
                return $this->Response('unauthorization',false,401);
            };  
            return $next($request);
        };
        return $this->Response('unauthorization',false,401);
    }
}
