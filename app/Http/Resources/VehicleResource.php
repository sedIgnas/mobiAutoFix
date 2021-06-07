<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class VehicleResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
        'id' => $this->id,
        'make_id' => $this->make_id,
        'model_id' => $this->model_id,
        'category_id' => $this->category_id
        ];
    }
}
