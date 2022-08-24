<template>
	<div :class="theme === 'light' ? 'light-theme' : 'dark-theme'" class="main-body" v-if="windowWidth >= 376">
		<nav>
			<router-link to="/" class="routerButton">Home</router-link>
			<router-link to="/about" class="routerButton">About</router-link>
			<router-link to="/skills" class="routerButton">Skills</router-link>
			<span class="routerButton" v-if="this.theme == 'light'" @click="changeTheme"> Day </span>

			<span v-else class="routerButton" @click="changeTheme">Night</span>
		</nav>
	</div>

	<div v-else>
		<nav>
			<router-link to="/" class="routerButton">Home</router-link>
			<router-link to="/about" class="routerButton">About</router-link>
			<router-link to="/skills" class="routerButton">Skills</router-link>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'Header',
	data() {
		return {
			theme: 'light',
			windowWidth: 10,
		}
	},
	emits: ['changeTheme'],
	created() {
		this.windowWidth = window.innerHeight
		this.$nextTick(() => {
			window.addEventListener('resize', this.onResize)
		})
	},
	methods: {
		changeTheme() {
			this.$emit('changeTheme')
			this.theme = this.theme === 'dark' ? 'light' : 'dark'
			const key = 'DarkOrLightMode'
			window.localStorage.setItem(key, this.theme)
		},
		onResize() {
			this.windowWidth = window.innerWidth
			console.log(this.windowWidth)
		},
	},
	watch: {
		windowWidth(newWidth, oldWidth) {
			this.windowWidth = newWidth
		},
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.onResize)
	},
}
</script>

<style>
nav {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	min-width: 100%;
	border-bottom: 1px black solid;
	height: 60px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
}
.routerButton {
	margin: 4px 4px;
	padding: 4px 12px;
	font-size: 20px;
	font-weight: 500;
	text-decoration: none;
	border-radius: 6px;
	color: black;
	transition-duration: 0.5s;
	background: none;
	border: none;
}
.routerButton:hover {
	background-color: rgb(183, 183, 183);
	cursor: grab;
	transform: scale(1.05);
	transition-duration: 0.75s;
}
.routerButton:active {
	cursor: grabbing;
	transform: scale(0.95);
	transition-duration: 0.75s;
}
</style>
