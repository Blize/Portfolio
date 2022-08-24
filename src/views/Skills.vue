<template>
	<div class="parent">
		<h1>My Skills</h1>

		<p>Vue</p>
		<div class="container">
			<div class="skills vue">95%</div>
		</div>

		<p>JavaScript</p>
		<div class="container">
			<div class="skills js">90%</div>
		</div>

		<p>HTML</p>
		<div class="container">
			<div class="skills html">85%</div>
		</div>

		<p>CSS</p>
		<div class="container">
			<div class="skills css">85%</div>
		</div>

		<p>BASH</p>
		<div class="container">
			<div class="skills bash">42%</div>
		</div>

		<p>TypeScript</p>
		<div class="container">
			<div class="skills ts">40%</div>
		</div>

		<p>Python</p>
		<div class="container">
			<div class="skills python">35%</div>
		</div>
	</div>
</template>

<script></script>

<style scoped>
.parent {
	min-height: calc(100vh - 61px - 61px);
	padding: 3rem 5rem 2rem 5rem;
}

.container {
	width: 100%;
	background-color: #ddd;
	border-radius: 12px;
}
.skills {
	text-align: right;
	padding: 10px 5px 10px 0;
	color: white;
	border-radius: 12px;
}
.vue {
	width: 95%;
	background-color: rgb(95, 172, 128);
}
.js {
	width: 90%;
	background-color: rgb(243, 222, 80);
}
.html {
	width: 85%;
	background-color: rgb(214, 103, 57);
}
.css {
	width: 85%;
	background-color: rgb(51, 98, 220);
}

.bash {
	width: 42%;
	background-color: rgb(64, 71, 74);
}
.ts {
	width: 40%;
	background-color: rgb(67, 120, 192);
}
.python {
	width: 35%;
	background: linear-gradient(90deg, rgb(72, 119, 161) 50%, rgb(249, 241, 98) 50%);
}
</style>
