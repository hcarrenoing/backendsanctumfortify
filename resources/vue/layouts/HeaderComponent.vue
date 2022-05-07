<template>

	<header>
		<div class="uk-section uk-padding-remove uk-section-muted">

            <div class="uk-container">

                <nav class="uk-navbar-container" uk-navbar>

                    <div class="uk-navbar-left">
                        <ul class="uk-navbar-nav">
                            <li class="uk-active"><a href="">VueAuth</a></li>
                        </ul>
                    </div>

                    <div class="uk-navbar-right">

                        <ul class="uk-navbar-nav">

                            <li>
                                <a href="#" uk-toggle="target: #auth_modal2">Registro de usuario</a>
                            </li>


                            <li v-if="!isAuth">
                                <a href="#" uk-toggle="target: #auth_modal">Acceso</a>
                            </li>





                             <li v-if="isAuth">
                                <logout2-component
                                    text="Salir api"></logout2-component>
                            </li>

                        </ul>

                    </div>

                </nav>

            </div>

        </div>
    </header>

</template>

<script>



   import Logout2Component from '../components/Logout2Component.vue'
	export default {

        props: {
            isAuth: {
                type: Boolean,
                required: true
            }
        },
        components: {


              Logout2Component
        }

	}
</script>
