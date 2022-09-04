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
				<a href="https://github.com/Blize">Github</a>
			</p>
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
@media screen and (max-width: 735px) {
	.parent-imprint {
		padding: 0;
	}
}
</style>
