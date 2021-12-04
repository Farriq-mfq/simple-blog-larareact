<?php 

namespace App\Repositories;

use App\Repositories\interfaces\AdminInterface;
use App\traits\Respon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AdminRepository implements AdminInterface{
    use Respon;
    public function login($request)
    {
        $credentials = $request->only('email','password');
        $validate = Validator::make($credentials,[
            'email'=>'required',
            'password'=>'required'
        ]);
        if(!$validate->fails()){
            $token = Auth::guard('admin')->attempt($credentials);
            try {
                if(!$token){
                    return $this->Response('Invalid credentials',false,400);
                }
            } catch (JWTException $jwt) {
                return $this->Response('error credentials',false,500,[
                    'error'=>$jwt
                ]);
            }
            return $this->Response('success get token',true,200,[
                'token'=>$token
            ])->header('Authorization','Bearer '.$token)
        ->header('Access-Control-Allow-Headers','Authorization')
        ->header('Access-Control-Expose-Headers','Authorization');
        }else{
            return $this->Response('input error',false,400,$validate->errors(),['validate'=>true]);
        }
    }
    public function admin()
    {
        if(Auth::guard('admin')->check()){
            return $this->Response('success get token',true,200,[
                'user'=>Auth::guard('admin')->user()
            ]);
        }
    }
}