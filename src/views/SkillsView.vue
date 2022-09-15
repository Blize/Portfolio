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
	background-color: rgb(145, 150, 152);
	border-radius: 12px;
}

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
.ejsm {
	width: 60%;
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
	animation: 1s ger;
}
.eng {
	width: 75%;
}
.fr {
	width: 30%;
}
.ag {
	width: 80%;
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
