<?php

namespace App\Models;

use App\Http\Services\ImageMaker;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'city_id',
        'address',
        'profile_img',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function setPasswordAttribute($input)
    {
        if ($input)
            $this->attributes['password'] = app('hash')->needsRehash($input) ? Hash::make($input) : $input;
    }

    public function getFullNameAttribute(): string
    {
        return $this->first_name . ' ' . $this->last_name;
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function createUser($request)
    {
        DB::transaction(function () use ($request) {
            //create user
            $this->fill($request->all())->save();
            //create images and sync with user
//            $this->images()->sync( $this->uploadImages($request->images)->pluck('id') );
        });
    }
//
//    public function uploadImages($images): collection
//    {
//        //upload thumb
//        (new ImageMaker($images, ImageMaker::getThumbPath(), 100, null))->resizeImage()->upload();
//        //upload original
//        $imageTitles = (new ImageMaker($images, ImageMaker::getOriginalPath(), 600, null))->resizeImage()->upload();
//        //store images
//        return $this->storeImage($imageTitles);
//    }
//
//    public function storeImage($imageTitles): collection
//    {
//        $storedImages = collect([]);
//        foreach ($imageTitles as $imageTitle) {
//            $image = (new Image())->where('title', $imageTitle)->first() ?: new Image();
//            $image->fill(['title'=>$imageTitle])->save();
//            $storedImages[] = $image;
//        }
//
//        return $storedImages;
//    }



}
