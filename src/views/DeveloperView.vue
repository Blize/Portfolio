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

					<div>
						<h2 class="table-title">CSS Animations</h2>
						<h3 class="table-text">
							I always write my CSS Animation on my own. So I don't use a dependency. Here are some examples
						</h3>
						<div>
							<h3>Here the classic example with KeyFrames</h3>
							<img src="../assets/KeyFrameAnimation.png" width="1135" />
						</div>
						<h3 class="table-text">Another way of writing animations is with conditional classes</h3>
						<div>
							<img src="../assets/ConditionalClassHTML.png" width="1135" />
							<h3>After our page renders we wait 0.5s and then deactivate the class</h3>
							<img src="../assets/SetClassTrue.png" width="1135" />
							<h3>So our animation goes from this</h3>
							<img src="../assets/ConditionalClassHidden.png" width="1135" />
							<h3>To this</h3>
							<img src="../assets/RemoveHiddenClass.png" width="1135" />
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
	padding: 0 20% 0 20%;
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
@media only screen and (max-width: 1200px) {
	img {
		width: 900px !important;
	}
}
@media only screen and (max-width: 900px) {
	img {
		width: 700px !important;
	}
	.parent-developer {
		padding: 0 5% 0 5%;
	}
}
@media only screen and (max-width: 550px) {
	img {
		width: 400px !important;
	}
}
@media only screen and (max-width: 450px) {
	img {
		width: 300px !important;
	}
}
</style>
