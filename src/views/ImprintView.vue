<template>
	<div class="parent-imprint">
		<div class="title">
			<h1>Imprint</h1>
			<ol>
				<li>Owner: Matthias Mantsch</li>
				<li>Email: matthias@mantsch.ch</li>
				<li>Host: <a href="https://vercel.com">Vercel</a></li>
			</ol>
		</div>
		<div class="title">
			<h1>Info</h1>
			<p>
				This Page is only build by me. The only dependency is the framework Vue.js. You can see more of my work on
				<a href="https://github.com/Blize">Github</a>. But if you wanna see some code snipped's and ideas how I created
				this website click here
			</p>
			<p>|</p>
			<p>\/</p>

			<router-link to="/developer" class="button-to-developer">Developer</router-link>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style>
.parent-imprint {
	min-height: calc(100vh - 60px - 61px);
	padding: 0 30% 0 30%;
}
.title {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

li {
	list-style: none;
}
.title p {
	text-align: center;
	margin: 0 3rem 0 3rem;
}
.button-to-developer {
	background-color: rgb(223, 223, 223);
	margin: 1rem 0 2rem 0;
	padding: 0.45rem;
	border-radius: 6px;
	transition-duration: 0.5s;
}
.button-to-developer:hover {
	transform: scale(1.05);
	transition-duration: 0.5s;
}
@media screen and (max-width: 735px) {
	.parent-imprint {
		padding: 0;
	}
}
</style>
