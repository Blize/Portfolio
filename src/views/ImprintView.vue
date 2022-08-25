<template>
	<div class="parent">
		<div class="title">
			<h1>Imprint</h1>
			<ol>
				<li>Owner: Matthias Mantsch</li>
				<li>Email: matthias@mantsch.ch</li>
				<li>Host: Vercel</li>
			</ol>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style>
.parent {
	min-height: calc(100vh - 60px - 61px);
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
</style>
