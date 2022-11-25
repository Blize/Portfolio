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
		let theme = localStorage.getItem('myTheme')
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
h2,
h3 {
	font-weight: 400;
}
:root {
	--dark-background: #3d3d3d;
	--dark-secondary-background: #353535;
	--dark-font-color: rgb(167, 167, 167);
	--dark-border-color: #000;
	--dark-upper-background: #454343;

	--light-background: white;
	--light-secondary-background: whitesmoke;
	--light-selected-color: rgb(212, 212, 212);
	--light-hover-color: whitesmoke;
	--light-font-color: black;
	--light-border-color: rgb(104, 104, 104);

	--shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
}

.light-theme .switch-work-private h4:hover {
	background-color: var(--light-hover-color);
}
.dark-theme .switch-work-private h4:hover {
	background-color: var(--light-border-color);
}

.dark-theme {
	top: 0;
	background-color: var(--dark-background);
	color: var(--dark-font-color);
	border: var(--dark-border-color);
	transition: all 0.5s ease-in;
}
.dark-theme a {
	color: var(--dark-font-color);
	text-decoration: none;
}
.dark-theme span {
	color: var(--dark-font-color);
}
.dark-theme .projects-child {
	background-color: var(--dark-upper-background);
	border: var(--dark-border-color);
}
.dark-theme .hobby-object-child h3 {
	background-color: var(--dark-upper-background);
	border: var(--dark-border-color);
}
.dark-theme .flip-card-front {
	background-color: var(--dark-upper-background);
	border: var(--dark-border-color);
	color: var(--dark-font-color);
}
.dark-theme .flip-card-back {
	background-color: var(--dark-upper-background);
	border: var(--dark-border-color);
}
.dark-theme .footer {
	background-color: #222222;
	border: #222222;
}
.dark-theme nav {
	top: 0;
	background-color: var(--dark-secondary-background);
	color: var(--dark-font-color);
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
	background-color: var(--dark-secondary-background);
	color: var(--dark-font-color);
}
.dark-theme .close {
	color: var(--dark-font-color);
}
.dark-theme .button-to-developer {
	background-color: var(--dark-secondary-background);
}
.light-theme {
	margin: 0;
	background-color: var(--light-background);
	color: var(--light-font-color);
	border: black;
	transition-duration: 0.5s;
}
.light-theme a {
	color: var(--light-font-color);
	text-decoration: none;
}
.light-theme nav {
	margin: 0;
	background-color: var(--light-secondary-background);
	color: var(--light-font-color);
	border: var(--light-border-color);
	transition-duration: 0.5s;
}
.light-theme .window-error {
	border: var(--light-border-color);
	background-color: var(--light-secondary-background);
}
.dark-theme .window-error {
	border: var(--dark-border-color);
	background-color: var(--dark-secondary-background);
}
</style>
