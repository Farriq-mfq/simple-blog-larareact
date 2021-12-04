<?php

namespace App\Providers;

use App\Providers\interfaces\AdminInterface;
use App\Repositories\AdminRepository;
use App\Repositories\BlogRepository;
use App\Repositories\interfaces\BlogInterface;
use App\Repositories\interfaces\frontend\BlogInterface as FrontendBlogInterface;
use App\Repositories\frontend\Blogrepo;
use Illuminate\Support\ServiceProvider;
class RespositoryProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(BlogInterface::class,BlogRepository::class);
        $this->app->bind(AdminInterface::class,AdminRepository::class);
        $this->app->bind(FrontendBlogInterface::class,Blogrepo::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
