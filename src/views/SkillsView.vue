<template>
	<div class="parent-skills">
		<div class="parent-title-skills">
			<h1>My Skills</h1>
			<h4>Here you have a quick overview of my Skills in different categories</h4>
		</div>

		<div class="skills-programming">
			<h2 class="title">Computer Science Languages</h2>

			<p>JavaScript</p>
			<div class="container-skills">
				<div class="skills js">Very Good</div>
			</div>

			<p>HTML</p>
			<div class="container-skills">
				<div class="skills html">Very Good</div>
			</div>

			<p>CSS</p>
			<div class="container-skills">
				<div class="skills css">Very Good</div>
			</div>

			<p>TypeScript</p>
			<div class="container-skills">
				<div class="skills ts">Basic</div>
			</div>

			<p>BASH</p>
			<div class="container-skills">
				<div class="skills bash">Basic</div>
			</div>

			<p>Python</p>
			<div class="container-skills">
				<div class="skills python">Basic</div>
			</div>

			<p>Java</p>
			<div class="container-skills">
				<div class="skills java">Bad</div>
			</div>
		</div>

		<div class="skills-framework">
			<h2 class="title">Frameworks</h2>

			<p>Vue</p>
			<div class="container-skills">
				<div class="skills vue">Very Good</div>
			</div>

			<p>Express.js</p>
			<div class="container-skills">
				<div class="skills ej">Basic</div>
			</div>

			<p>React</p>
			<div class="container-skills">
				<div class="skills react">Bad</div>
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
				<div class="skills ag">Familiar</div>
			</div>

			<p>UI/UX</p>
			<div class="container-skills">
				<div class="skills uix">Basic</div>
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
	background-color: rgb(145, 150, 152);
	border-radius: 12px;
}

/*  Start Frameworks */
.vue {
	width: 95%;
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

.ej {
	width: 52%;
	animation: ej 1s;
}
@keyframes ej {
	from {
		width: 0%;
	}
	to {
		width: 52%;
	}
}

.react {
	width: 25%;
	animation: react 1s;
}
@keyframes react {
	from {
		width: 0%;
	}
	to {
		width: 25%;
	}
}
/*  End Frameworks */

/* Start Programming language */
.js {
	width: 90%;
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

.ts {
	width: 45%;
	animation: 1s ts;
}
@keyframes ts {
	from {
		width: 0%;
	}
	to {
		width: 45%;
	}
}

.bash {
	width: 42%;
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

.python {
	width: 35%;
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

.java {
	width: 23%;
	animation: 1s java;
}
@keyframes java {
	from {
		width: 0%;
	}
	to {
		width: 23%;
	}
}
/* End Programming language */

/* Start Language */
.ger {
	width: 100%;
	animation: 1s ger;
}
@keyframes ger {
	from {
		width: 0%;
	}
	to {
		width: 100%;
	}
}
.eng {
	width: 75%;
	animation: 1s eng;
}
@keyframes eng {
	from {
		width: 0%;
	}
	to {
		width: 75%;
	}
}
.fr {
	width: 30%;
	animation: 1s fr;
}
@keyframes fr {
	from {
		width: 0%;
	}
	to {
		width: 30%;
	}
}
/* End Language */

/* Start Miscellaneous */
.ag {
	width: 80%;
	animation: 1s ag;
}
@keyframes ag {
	from {
		width: 0%;
	}
	to {
		width: 80%;
	}
}

.uix {
	width: 40%;
	animation: 1s uix;
}
@keyframes uix {
	from {
		width: 0%;
	}
	to {
		width: 40%;
	}
}
/* End Miscellaneous */

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
