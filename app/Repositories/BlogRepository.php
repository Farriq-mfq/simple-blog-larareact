<?php 

namespace App\Repositories;

use App\Models\Blog;
use App\Repositories\interfaces\BlogInterface;
use App\traits\Respon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
class BlogRepository implements BlogInterface{
        use Respon;
        public function getAll()
        {
            $data = DB::table("blogs")->orderBy('id','DESC')->get();
            return $this->Response("success getting data",true,200,$data);
        }
        public function Create($request)
        {
            $validate = Validator::make($request->all(),[
                'title'=>'required|min:5',
                'short_description'=>'required',
                'content'=>'required',
                'thumbnail'=>'required|image|mimes:png,jpg,jpeg|max:2048'
            ]
        );
            if(!$validate->fails()){
                $imageName = date("YmdHis").'.'.$request->file('thumbnail')->extension();
                $data = [
                    'judul'=>$request->title,
                    'short_description'=>$request->short_description,
                    'tag'=>$request->tag,
                    'content'=>$request->content,
                    'thumbnail'=>$imageName,
                    'slug'=>Str::slug($request->title,'-'),
                    'meta_title'=>$request->meta_title,
                    'meta_description'=>$request->meta_description
                ];
                $create = Blog::create($data);
                if($create){
                    Storage::putFileAs('public/images',$request->file('thumbnail'),$imageName);
                    return $this->Response("success post blog",true,200);
                }else{
                    return $this->Response("failed post blog",false,500);
                }
            }else{
                return $this->Response("input data error",false,400,$validate->errors(),['validate'=>true]);
            }
        }
        public function Delete($id)
        {
            $select = Db::table("blogs")->where('id',$id)->first();
            $image = $select->thumbnail;
            $image_delete = public_path().'/storage/images/'.$image;
            if($image_delete){
                $delete = Db::table("blogs")->where('id',$id)->delete();
                if($delete){
                    return $this->Response("success remove data",true,200);
                }else{
                    return $this->Response("failed remove data",false,500);
                }
            }
        }
        public function Edit($id)
        {
            $edit = Db::table("blogs")->where('id',$id)->first();
            if($edit){
                return $this->Response("get edit data",true,200,[$edit]);
            }else{
                return $this->Response("failed",false,500);
            }
        }
    }