<template>
	<div class="parent-not-found">
		<div class="window-error">
			<div class="window-error-title">
				<h1>404</h1>
			</div>
			<div class="window-error-text">
				<h3>Seems like this page does not exists</h3>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style>
.parent-not-found {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	padding: 4rem;
}
.window-error {
	padding: 15% 35% 15% 35%;
	border: 1px solid;
	border-radius: 6px;
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
}
</style>
