<?php 
namespace App\traits;

trait Respon{
    protected function Response($message,$success = true,$status=200,$data=[],$custom = [])
        {   
            if($message){
                if(count($data) > 0){
                    if(count($custom)>0){
                        $rs = [
                            'message'=>$message,
                            'error'=>!$success,
                            'data'=>$data,
                        ];
                        $respon = array_merge($rs,$custom);
                    }else{
                        $respon = [
                            'message'=>$message,
                            'error'=>!$success,
                            'data'=>$data,
                        ];
                    }
                    return response()->json($respon,$status);
                }else{
                    return response()->json([
                        'message'=>$message,
                        'error'=>!$success,
                    ],$status);
                }
            }else{
                return response()->json([
                    'message'=>'Message is required',
                    'error'=>true
                ],500);
            }
        }
    }
