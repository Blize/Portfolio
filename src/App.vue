<template>
	<div :class="theme === 'light' ? 'light-theme' : 'dark-theme'" class="main-body">
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300&display=swap" rel="stylesheet" />
		<Header @changeTheme="theme = theme === 'dark' ? 'light' : 'dark'" />
		<router-view></router-view>
		<Footer />
	</div>
</template>

<script>
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default defineComponent({
	data() {
		return {
			theme: 'light',
		}
	},
	components: {
		Header,
		Footer,
	},
	mounted() {
		var theme = localStorage.getItem('myTheme')
		this.theme = theme
	},
	computed: {
		ChangeTheme() {
			const key = 'myTheme'
			this.theme = this.theme === 'dark' ? 'light' : 'dark'
			localStorage.setItem(key, this.theme)
		},
	},
})
</script>
<style lang="scss">
#app {
	font-family: 'Manrope', sans-serif;
	padding: 0;
	margin: 0;
}
body {
	margin: 0;
	padding: 0;
	width: 100%;
}
.dark-theme {
	top: 0;
	background-color: #3d3d3d;
	color: rgb(167, 167, 167);
	border: rgb(0, 0, 0);
	transition-duration: 0.5s;
}
.dark-theme a {
	color: rgb(167, 167, 167);
	text-decoration: none;
}
.dark-theme span {
	color: rgb(167, 167, 167);
}
.dark-theme .projects-child {
	background-color: #454343;
	border: #00000000;
}
.dark-theme .hobby-object-child h3 {
	background-color: #454343;
	border: #00000000;
}
.dark-theme .flip-card-front {
	background-color: #454343;
	border: #00000000;
	color: rgb(167, 167, 167);
}
.dark-theme .flip-card-back {
	background-color: #454343;
	border: #00000000;
}
.dark-theme .curtain {
	&__panel {
		background-color: #353535;
		color: rgb(167, 167, 167);
	}
}
.dark-theme .footer {
	background-color: #222222;
	border-color: #222222;
}
.dark-theme nav {
	top: 0;
	background-color: #353535;
	color: rgb(167, 167, 167);
	border: #353535;
	transition-duration: 0.5s;
}
.dark-theme .container-skills {
	background-color: #5b5656;
}
.dark-theme .skills {
	background-color: rgb(64, 71, 74);
}
.dark-theme .modal-content {
	background-color: #353535;
	color: rgb(167, 167, 167);
}
.dark-theme .close {
	color: rgb(167, 167, 167);
}
.light-theme {
	margin: 0;
	background-color: white;
	color: black;
	border: black;
	transition-duration: 0.5s;
}
.light-theme a {
	color: black;
	text-decoration: none;
}
.light-theme nav {
	margin: 0;
	background-color: whitesmoke;
	color: black;
	border: rgb(104, 104, 104);
	transition-duration: 0.5s;
}
</style>
