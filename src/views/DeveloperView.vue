<template>
	<div class="parent-developer">
		<div class="main-content-wrapper">
			<h1>Welcome developer</h1>
			<h3>This page is here to show you some insides of my code. Like a small documentation</h3>

			<div class="table-of-content">
				<div class="naming-of-code">
					<div>
						<h2 class="table-title">Naming</h2>
						<h3 class="table-text">
							My FUNCTIONS are written in camel-case, important is here that the name always should describe what the
							function does
						</h3>
						<div>
							<img src="../assets/NamingOfFunctions.png" width="1135" />
						</div>
						<h3 class="table-text">
							My CLASSES and ID's are written in kebab-case. Also I try to make class names that make sense
						</h3>
						<div>
							<img src="../assets/NamingOfClass.png" width="1135" />
						</div>
					</div>

					<div>
						<h2 class="table-title">Dynamic</h2>
						<h3 class="table-text">
							I try to write dynamic HTML and Java Script/Type Script Code. As you can see here i insert my content
							dynamic into the HTML
						</h3>
						<div>
							<img src="../assets/DynamicHTML.png" width="1135" />
						</div>
						<h3 class="table-text">As well as using util function to not have code duplication</h3>
						<div>
							<img src="../assets/DynamicUtilFunction.png" width="1135" />
						</div>
					</div>
				</div>
			</div>
			<div class="finishing-words">
				<h3>If you wanna see more of my code go to my <a href="https://github.com/Blize">Github</a> Page</h3>
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
.table-of-content {
	margin-bottom: 2rem;
}
.naming-of-code {
	margin-top: 4rem;
}
.table-title {
	text-align: left;
	font-size: 2rem;
	margin-top: 20%;
}
.table-text {
	text-align: left;
}
.finishing-words {
	margin-top: 15%;
}
</style>
