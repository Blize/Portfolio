<template>
	<div class="parent-developer">
		<div class="main-content-wrapper">
			<h1>Welcome developer</h1>
			<h3>This page is here to show you some insides of my code. Like a small documentation</h3>

			<div class="table-of-content">
				<div class="naming-of-code">
					<h2 class="table-title">Naming</h2>
					<h3>
						My functions are written in camel-case, important is here that the name always should describe what the
						function does
					</h3>
					<div>
						<img src="../assets/NamingOfFunctions.png" width="1135" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
.parent-developer {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: flex-start;
}
img {
	border-radius: 6px;
}
.main-content-wrapper {
	text-align: center;
}
.naming-of-code {
	margin-top: 5rem;
}
.table-title {
	text-align: left;
}
</style>
