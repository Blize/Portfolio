<template>
	<div class="parent-developer">
		<div class="main-content-wrapper">
			<h1>Welcome developer</h1>
			<h3>This page is here to show you some insides of my code. Like a small documentation</h3>

			<div class="table-of-content">
				<div>
					<h2 class="table-title">Naming</h2>
					<h3 class="table-text">
						My FUNCTIONS are written in camel-case. For me it is important that the names also describe what the
						functions do.
					</h3>
					<div>
						<img src="../assets/NamingOfFunctions.png" width="1135" />
					</div>
					<h3 class="table-text">
						My CLASSES and ID's are written in kebab-case. For this I also try to use clever names for the CLASSES and
						IDs
					</h3>
					<div>
						<img src="../assets/NamingOfClass.png" width="1135" />
					</div>
				</div>

				<div>
					<h2 class="table-title">Dynamic</h2>
					<h3 class="table-text">
						I am trying to write dynamic HTML CSS and Java Script. Here you can see how I insert Java Script dynamically
						into the HTML
					</h3>
					<div>
						<img src="../assets/DynamicHTML.png" width="1135" />
					</div>
					<h3 class="table-text">I am also trying to write util functions to avoid code duplication.</h3>
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
						<img src="../assets/KeyFrameAnimation.png" width="1135" />
					</div>
					<h3 class="table-text">Another way to write animations is with conditional classes</h3>
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

				<div>
					<h2 class="table-title">Responsive Design</h2>
					<h3 class="table-text">For response design I use display fle, as a example</h3>
					<div>
						<img src="../assets/DisplayFlexWrap.png" width="1135" />
					</div>
					<h3 class="table-text">Another important aspect ist @media. Here a rather small example</h3>
					<div>
						<img src="../assets/MediaResponsive.png" width="1135" />
					</div>
					<h3 class="table-text">
						And as last component, we have the units. It is important not to use units such as px, instead use rem, %,
						vh or vw
					</h3>
					<div>
						<img src="../assets/RemUnit.png" width="1135" />
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
@media screen and (max-width: 1200px) {
	img {
		width: 900px !important;
	}
}
@media screen and (max-width: 900px) {
	img {
		width: 700px !important;
	}
	.parent-developer {
		padding: 0 5% 0 5%;
	}
}
@media screen and (max-width: 550px) {
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
