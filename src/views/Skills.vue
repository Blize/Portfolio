<template>
	<div class="parent">
		<h1 class="parent-title">My Skills</h1>

		<div class="skills-programming">
			<h2 class="title">Developer</h2>
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

			<p>Express + Node.js, MariaDB</p>
			<div class="container">
				<div class="skills ejsm">60%</div>
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

		<div class="skills-language">
			<h2 class="title">Languages</h2>
			<p>German</p>
			<div class="container">
				<div class="skills ger">Native Language</div>
			</div>

			<p>English</p>
			<div class="container">
				<div class="skills eng">Fluent</div>
			</div>

			<p>French</p>
			<div class="container">
				<div class="skills fr">Basics</div>
			</div>
		</div>

		<div class="skills-language">
			<h2 class="title">Miscellaneous</h2>
			<p>Agile Working</p>
			<div class="container">
				<div class="skills ag">80%</div>
			</div>
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
.ejsm {
	width: 60%;
	background: linear-gradient(90deg, rgb(50, 50, 50) 50%, rgb(190, 155, 114));
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
	color: black;
	background: linear-gradient(90deg, rgb(72, 119, 161) 50%, rgb(249, 241, 98) 50%);
}
.ger {
	width: 100%;
	background: -webkit-linear-gradient(90deg, #000 33%, rgba(0, 0, 0, 0) 33%),
		-webkit-linear-gradient(90deg, #dd0000 66%, #ffc608 66%);
	background: -o-linear-gradient(90deg, #000 33%, rgba(0, 0, 0, 0) 33%),
		-o-linear-gradient(90deg, #dd0000 66%, #ffc608 66%);
	background: -moz-linear-gradient(90deg, #000 33%, rgba(0, 0, 0, 0) 33%),
		-moz-linear-gradient(90deg, #dd0000 66%, #ffc608 66%);
	background: linear-gradient(90deg, #000 33%, rgba(0, 0, 0, 0) 33%), linear-gradient(90deg, #dd0000 66%, #ffc608 66%);
}
.eng {
	width: 75%;
	color: black;
	border: 0.25px solid gray;
	background-color: rgb(184, 43, 53);
}
.fr {
	width: 30%;
	color: black;
	border: 0.25px solid gray;
	background: linear-gradient(to right, blue 33%, white 33%, white 66%, red 66%);
}
.ag {
	width: 80%;
	background-color: rgb(72, 52, 52);
}
.title {
	margin-top: 5rem;
}
@media screen and (max-width: 736px) {
	.parent-title {
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>
