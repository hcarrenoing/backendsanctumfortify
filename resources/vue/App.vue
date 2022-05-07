<template>

	<div id="app_wrapper">

		<header-component
			:is-auth="isAuth"></header-component>

    	<main-component></main-component>

    	<footer-component></footer-component>

		<auth-modal
			v-if="!isAuth"></auth-modal>
        <auth-modal2></auth-modal2>

	</div>

</template>

<script>
	import HeaderComponent from './layouts/HeaderComponent'
	import MainComponent from './layouts/MainComponent'
	import FooterComponent from './layouts/FooterComponent'
	import AuthModal from './modals/AuthModal'
    import AuthModal2 from './modals/AuthModal2'

	export default {
		components: {
			HeaderComponent,
			MainComponent,
			FooterComponent,
			AuthModal,
            AuthModal2

		},
		beforeCreate () {
			store.dispatch('setAuthUser');
		},
		computed: {
			isAuth () {
				return (state.authUser) ? true : false;
			}
		}
	}
</script>
