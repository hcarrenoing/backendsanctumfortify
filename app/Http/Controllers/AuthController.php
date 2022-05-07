<?php

namespace App\Http\Controllers;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Password;

use Illuminate\Auth\Events\PasswordReset;

use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Str;
class AuthController extends Controller
{


    protected $guard;

    /**
     * Create a new controller instance.
     *
     * @param  \Illuminate\Contracts\Auth\StatefulGuard  $guard
     * @return void
     */
    public function __construct(StatefulGuard $guard)
    {
        $this->guard = $guard;
    }
    public function get_auth_user(){
        if (Auth::check()) {
            return response()->json([
                'validation' => true,
                'user'=> Auth::user()
            ]);
        } else {
            return response()->json([
                'validation' => false,

            ]);
        }

    }



    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
            return response()->json([
                'validation' => true,
                'user'=> Auth::user(),
            'messages'=>'Logueado Correctamente'],200
            );
        }
        else{
            return response()->json([
                'validation' => false,
                'user'=> Auth::user(),
                'messages'=>'Contraseña o correo incorreto, intente de nuevo'],500
            );
        }

    }



    public function cerrarDestroy(Request $request)
    {

        $this->guard->logout();

        $request->session()->invalidate();

       $request->session()->regenerateToken();
        return response()->json([
                'validation' => true,
                'user' => null,
                'message' => 'Logout Successful'],200);
    }

    public function register(Request $request){

        $rules = [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ];
        $messages = [
            'name.required' => 'El nombre es requerido',
            'name.string' => 'El nombre debe ser una cadena de caracteres',
            'name.max' => 'El nombre no debe superar los 255 caracteres',
            'email.required' => 'El correo es requerido',
            'email.string' => 'El correo debe ser una cadena de caracteres',
            'email.email' => 'El correo debe ser un correo valido',
            'email.max' => 'El correo no debe superar los 255 caracteres',
            'email.unique' => 'El correo ya esta registrado',
            'password.required' => 'La contraseña es requerida',
            'password.string' => 'La contraseña debe ser una cadena de caracteres',

            'password.min' => 'La contraseña debe tener al menos 6 caracteres',
            'password.confirmed' => 'Las contraseñas no coinciden',
        ];
        $validator = Validator::make($request->all(), $rules, $messages);

        if ($validator->fails()) {
            return response()->json([
                'validation' => false,
                'user' => null,
                'messages' => $validator->errors()],500);
        }
        try{
        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();
        return response()->json([
            'validation' => true,
            'user' => $user,
            'message' => 'User created successfully'],200);
        }catch (\Exception $e){
            return response()->json([
                'validation' => false,
                'user' => null,
                'messages' => $e->getMessage()],500);
        }
    }

    public function get_user($id){
        $user = User::find($id);
        return response()->json([
            'validation' => true,
            'user' => $user,
            'message' => 'User created successfully'],200);
    }

    public function update_user(Request $request, $id){
        $user = User::find($id);
        $user->name = $request->name;
        $user->email = $request->email;
       // $user->password = bcrypt($request->password);
        $user->save();
        return response()->json([
            'validation' => true,
            'user' => $user,
            'message' => 'User updated successfully'],200
            );


    }

        public function delete_user($id){
            $user = User::find($id);
            $user->delete();
            return response()->json([
            'validation' => true,
            'user' => $user,
            'message' => 'User deleted successfully'],200
            );
        }


        public function get_users(){
            $users = User::all();

            return response()->json([
                'validation' => true,
                'users' => $users,
                'message' => 'Users retrieved successfully'],200
                );
        }

        public function get_user_by_email($email){
            $user = User::where('email', $email)->first();
            return response()->json([
                'validation' => true,
                'user' => $user,
                'message' => 'User retrieved successfully'],200
                );
        }

        public function get_user_by_name($name){
            $user = User::where('name', $name)->first();
            return response()->json([
                'validation' => true,
                'user' => $user,
                'message' => 'User retrieved successfully'],200
                );
        }

        public function get_user_by_id($id){
            $user = User::where('id', $id)->first();
            return response()->json([
                'validation' => true,
                'user' => $user,
                'message' => 'User retrieved successfully'],200
                );
        }

        public function get_user_by_id_and_email($id, $email){
            $user = User::where('id', $id)->where('email', $email)->first();
            return response()->json([
                'validation' => true,
                'user' => $user,
                'message' => 'User retrieved successfully'],200
                );
        }

        public function get_user_by_id_and_name($id, $name){
            $user = User::where('id', $id)->where('name', $name)->first();
            return response()->json([
                'validation' => true,
                'user' => $user,
                'message' => 'User retrieved successfully'],200
                );
        }


        /*public function reset_password(Request $request){
            $user = User::where('email', $request->email)->first();
            $user->password = bcrypt($request->password);
            $user->save();
            return response()->json([
                'validation' => true,
                'user' => $user,
                'message' => 'User updated successfully'],200
                );
        }

        */

        public function forgotPassword(Request $request){

            $rules=['email'=>'required|email'];

            $messages = ['email.required'=>'El correo es requerido',
            'email.email'=>'El correo debe ser un correo valido'];
            $validator = Validator::make($request->all(), $rules, $messages);
            if ($validator->fails()) {
                return response()->json([
                    'validation' => false,
                    'user' => null,
                    'messages' => $validator->errors()],500);

            }



                $status = Password::sendResetLink(
                    $request->only('email')
                );

                return $status === Password::RESET_LINK_SENT
                            ? back()->with(['status' => __($status)])
                            : back()->withErrors(['email' => __($status)]);



        }


        public function  resetPassword(Request $request){


                $request->validate([
                    'token' => 'required',
                    'email' => 'required|email',
                    'password' => 'required|min:8|confirmed',
                ]);

                $status = Password::reset(
                    $request->only('email', 'password', 'password_confirmation', 'token'),
                    function ($user, $password) {
                        $user->forceFill([
                            'password' => Hash::make($password)
                        ])->setRememberToken(Str::random(60));

                        $user->save();

                        event(new PasswordReset($user));
                    }
                );

                return $status === Password::PASSWORD_RESET
                            ? redirect()->route('login')->with('status', __($status))
                            : back()->withErrors(['email' => [__($status)]]);

        }


}
