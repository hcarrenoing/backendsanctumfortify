<template>

	<div id="auth_modal2" uk-modal>

        <div class="uk-modal-dialog uk-modal-body">

            <ul
                class="uk-tab uk-flex-center"
                uk-grid
                uk-switcher="animation: uk-animation-fade">
                              <li><a href="#">Registro</a></li>

            </ul>

            <ul class="uk-switcher uk-margin">

                <!-- Register Form -->
                <li>
                    <register-form2
                        @submit="submitForm"></register-form2>
                </li>



            </ul>

        </div>

    </div>

</template>

<script>

    import RegisterForm2 from '../forms/RegisterForm2'


	export default {
        components: {

            RegisterForm2,

        },
        methods: {
            submitForm (payload) {
                store.dispatch('setAuthUser');
                UIkit.notification({
                    message: payload.message,
                    status: 'success'
                });
                UIkit.modal('#auth_modal2').hide();
                // ...
            }
        }
	}
</script>

