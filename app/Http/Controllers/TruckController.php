<?php

namespace App\Http\Controllers;

use App\Enums\QuestionTypeEnum;
use App\Http\Resources\SurveyResource;
use App\Models\Truck;
use App\Http\Requests\truckStoreRequest;
use App\Http\Requests\truckUpdateRequest;
use App\Http\Resources\TruckResource;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Enum;
use Symfony\Component\HttpFoundation\Request;

class TruckController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();

        return TruckResource::collection(
            Truck::where('user_id', $user->id)
                ->orderBy('created_at', 'desc')
                ->paginate(2)
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSurveyRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(truckStoreRequest $request)
    {
        $data = $request->validated();
        // Check if image was given and save on local file system
        $survey = Truck::create($data);

        return new TruckResource($survey);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Truck  $Truck
     * @return \Illuminate\Http\Response
     */
    public function show(Truck $truck, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $truck->user_id) {
            return abort(403, 'Unauthorized action');
        }
        return new TruckResource($truck);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSurveyRequest  $request
     * @param  \App\Models\Survey  $survey
     * @return \Illuminate\Http\Response
     */
    public function update(truckUpdateRequest $request, Truck $truck)
    {
        $data = $request->validated();

        // Update truck in the database
        $truck->update($data);

        return new TruckResource($truck);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Truck  $truck
     * @return \Illuminate\Http\Response
     */
    public function destroy(Truck $truck, Request $request)
    {
        $user = $request->user();
        if ($user->id !== $truck->user_id) {
            return abort(403, 'Unauthorized action.');
        }

        $truck->delete();

        return response('', 204);
    }

    public function getById(Truck $truck)
    {
        if (!$truck->status) {
            return response("", 404);
        }


        return new TruckResource($truck);
    }
}
