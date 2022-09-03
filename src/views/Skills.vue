<template>
	<div class="parent-skills">
		<div class="parent-title-skills">
			<h1>My Skills</h1>
			<h4>Here you have a quick overview of my Skills in different categories</h4>
		</div>

		<div class="skills-programming">
			<h2 class="title">Developer</h2>
			<p>Vue</p>
			<div class="container-skills">
				<div class="skills vue">95%</div>
			</div>

			<p>JavaScript</p>
			<div class="container-skills">
				<div class="skills js">90%</div>
			</div>

			<p>HTML</p>
			<div class="container-skills">
				<div class="skills html">85%</div>
			</div>

			<p>CSS</p>
			<div class="container-skills">
				<div class="skills css">85%</div>
			</div>

			<p>Express + Node.js, MariaDB</p>
			<div class="container-skills">
				<div class="skills ejsm">60%</div>
			</div>

			<p>BASH</p>
			<div class="container-skills">
				<div class="skills bash">42%</div>
			</div>

			<p>TypeScript</p>
			<div class="container-skills">
				<div class="skills ts">40%</div>
			</div>

			<p>Python</p>
			<div class="container-skills">
				<div class="skills python">35%</div>
			</div>
		</div>

		<div class="skills-language">
			<h2 class="title">Languages</h2>
			<p>German</p>
			<div class="container-skills">
				<div class="skills ger">Native Language</div>
			</div>

			<p>English</p>
			<div class="container-skills">
				<div class="skills eng">Fluent</div>
			</div>

			<p>French</p>
			<div class="container-skills">
				<div class="skills fr">Basics</div>
			</div>
		</div>

		<div class="skills-language">
			<h2 class="title">Miscellaneous</h2>
			<p>Agile Working</p>
			<div class="container-skills">
				<div class="skills ag">80%</div>
			</div>
		</div>
	</div>
</template>

<script></script>

<style>
.parent-skills {
	min-height: calc(100vh - 61px - 61px);
	padding: 3rem 5rem 2rem 5rem;
}
.parent-title-skills {
	display: flex;
	align-items: flex-start;
	align-items: flex-start;
	flex-direction: column;
	text-align: center;
}
.container-skills {
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
	animation: vue 1s;
}
@keyframes vue {
	from {
		width: 0%;
	}
	to {
		width: 95%;
	}
}
.js {
	width: 90%;
	background-color: rgb(243, 222, 80);
	animation: js 1s;
}
@keyframes js {
	from {
		width: 0%;
	}
	to {
		width: 90%;
	}
}
.html {
	width: 85%;
	background-color: rgb(214, 103, 57);
	animation: html 1s;
}
@keyframes html {
	from {
		width: 0%;
	}
	to {
		width: 85%;
	}
}
.css {
	width: 85%;
	background-color: rgb(51, 98, 220);
	animation: css 1s;
}
@keyframes css {
	from {
		width: 0%;
	}
	to {
		width: 85%;
	}
}
.ejsm {
	width: 60%;
	background: linear-gradient(90deg, rgb(50, 50, 50) 50%, rgb(190, 155, 114));
	animation: ejsm 1s;
}
@keyframes ejsm {
	from {
		width: 0%;
	}
	to {
		width: 60%;
	}
}
.bash {
	width: 42%;
	background-color: rgb(64, 71, 74);
	animation: bash 1s;
}
@keyframes bash {
	from {
		width: 0%;
	}
	to {
		width: 42%;
	}
}
.ts {
	width: 40%;
	background-color: rgb(67, 120, 192);
	animation: 1s ts;
}
@keyframes ts {
	from {
		width: 0%;
	}
	to {
		width: 40%;
	}
}
.python {
	width: 35%;
	color: black;
	background: linear-gradient(90deg, rgb(72, 119, 161) 50%, rgb(249, 241, 98) 50%);
	animation: 1s python;
}
@keyframes python {
	from {
		width: 0%;
	}
	to {
		width: 35%;
	}
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
	animation: 1s ger;
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
	.parent-skills {
		padding: 3rem 1rem 2rem 1.2rem;
	}
	.parent-title-skills {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: -2rem;
		gap: -1rem;
	}
}
</style>
