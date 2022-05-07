<html>
<head>
    <title>Laravel Authenticación</title>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="csrf-token" content="{{ csrf_token() }}">
<!-- UIkit CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.14.1/dist/css/uikit.min.css" />
<link rel="stylesheet" type="text/css" href="{{mix('css/custom.css')}}">

</head>
<body>
    <div id="app">
        <app-component></app-component>

    </div>
<!--
    <div class="uk-session uk-padding-remove uk-section-muted">
        <div class="uk-container">
            <nav class="uk-navbar-container" uk-navbar>
                <div class="uk-navbar-left">
                    <ul class="uk-navbar-nav">
                        <li class="uk-active"><a href="">Acerca</a></li>

                        <li><a href=""></a></li>
                    </ul>

                </div>

                <div class="uk-navbar-right">
                    <ul class="uk-navbar-nav">

                        <li class="uk-parent"><a href="#" uk-toggle="target: #my-auth" >Acceso</a></li>

                    </ul>

                </div>
            </nav>


        </div>



    </div>


    <div id="my-auth" uk-modal>
        <div class="uk-modal-dialog uk-modal-body">
            <ul class="uk-tab uk-flex-center uk-grid"
            uk-switcher="animation: uk-animation-fade">
                <li><a href="#">Iniciar Sesión</a></li>
                <li><a href="#">Registrarse</a></li>


            </ul>
            <ul class="uk-switcher uk-margin">


            <li>
                <h3 class="uk-card-title uk-text-center">Sign up todays</h3>
                <form>

                    <div class="uk-margin">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon" uk-icon="icon: user"></span>
                            <input class="uk-input uk-form-large" type="text" placeholder="First and last name">

                        </div>
                    </div>

                    <div class="uk-margin">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon" uk-icon="icon: mail"></span>
                            <input class="uk-input uk-form-large" type="text" placeholder="Address Email">

                        </div>
                    </div>

                    <div class="uk-margin">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon" uk-icon="icon: lock"></span>
                            <input class="uk-input uk-form-large" type="password" placeholder="Password">

                        </div>
                    </div>


                    <div class="uk-margin uk-grid-small uk-child-with-auto uk-grid">

                            <label >
                                <input type="checkbox" class="uk-checkbox" name="" id="">
                                I agree to the terms and conditions

                            </label>

                    </div>

                    <div class="uk-margin">
                        <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Sign up</button>
                    </div>

                </form>

            </li>


            <!--  Login -->

        <!--    <li>
                <h3 class="uk-card-title uk-text-center">Sign up todays</h3>
                <form>



                    <div class="uk-margin">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon" uk-icon="icon: mail"></span>
                            <input class="uk-input uk-form-large" type="text" placeholder="Address Email">

                        </div>
                    </div>

                    <div class="uk-margin">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon" uk-icon="icon: lock"></span>
                            <input class="uk-input uk-form-large" type="password" placeholder="Password">

                        </div>
                    </div>




                    <div class="uk-margin">
                        <button class="uk-button uk-button-primary uk-button-large uk-width-1-1">Login</button>
                    </div>

                </form>

            </li>

            </ul>



        </div>
    </div>

-->


    <!-- UIkit JS -->
<script src="https://cdn.jsdelivr.net/npm/uikit@3.14.1/dist/js/uikit.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/uikit@3.14.1/dist/js/uikit-icons.min.js"></script>
<script src="{{ mix('js/custom.js')}}"></script>
<script src="{{ mix('js/app.js') }}"></script>


</body>
</html>



