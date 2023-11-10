<template>
	<div class="parent-about">
		<div class="fly-in-text" :class="{ hidden: isNotActive }">
			<h1>A</h1>
			<h1>B</h1>
			<h1>O</h1>
			<h1>U</h1>
			<h1>T</h1>
		</div>

		<div class="info-text">
			<h4>
				I am a 17 year old developer at Swisscom. I already got to know different areas of computer science. Below here
				you can see my hobbies and more.
			</h4>
		</div>

		<div class="hobby">
			<div class="title-hobby">
				<h1>Hobbies</h1>
			</div>
			<div class="hobby-object-parent">
				<div class="hobby-object-under-parent" v-for="hobby in hobbies" :key="hobby.hobbyTitle">
					<span class="hobby-object-child" @click="openModal(hobby.id)">
						<h3>{{ hobby.hobbyTitle }}</h3>
					</span>
					<div class="modal">
						<div class="modal-content">
							<span class="close" @click="closeModal()">&times;</span>
							<h3>{{ modalText }}</h3>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="projects-object-parent">
			<div class="project-text">
				<h1>Projects</h1>
				<h4>Overview of my previous projects</h4>
			</div>

			<div class="switch-work-private">
				<h4 @click="changeProject('private-project', 'work-project', true)" id="private-project">Private</h4>
				<h4 @click="changeProject('private-project', 'work-project', false)" id="work-project">Work</h4>
			</div>

			<div v-if="this.switchProject" class="project-wrapper">
				<div class="flip-card" v-for="project in projects" :key="project.projectTitle">
					<div class="flip-card-inner">
						<div class="flip-card-front">
							<h2>{{ project.projectTitle }}</h2>
							<h4>{{ project.projectInfo }}</h4>
						</div>

						<div class="flip-card-back">
							<h1>{{ project.projectTitle }}</h1>
							<a :href="project.projectURL">{{ project.projectURL }}</a>
						</div>
					</div>
				</div>
			</div>
			<div class="project-wrapper" v-else>
				<div class="flip-card" v-for="project in workProjects" :key="project.projectTitle">
					<div class="flip-card-inner">
						<div class="flip-card-front">
							<h2>{{ project.projectTitle }}</h2>
							<h4>{{ project.projectInfo }}</h4>
						</div>

						<div class="flip-card-back">
							<h1>{{ project.projectTitle }}</h1>
							<p>{{ project.projectLeader }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isNotActive: true,
			showIFrame: true,
			windowWidth: 10,
			hobbies: [
				{
					id: 1,
					hobbyTitle: 'Downhill',
					hobbyModal:
						'I am passionate about mountain-biking, because while I am biking I can forget everything and fully concentrate on the here and now.',
				},
				{
					id: 2,
					hobbyTitle: 'Programmer',
					hobbyModal: 'I like programming very much, because the possibilities are unlimited.',
				},
				{
					id: 3,
					hobbyTitle: 'Gamer',
					hobbyModal: "I like to play games to isolate myself from the world, it doesn't matter which game I play",
				},
				{ id: 4, hobbyTitle: 'Drawer', hobbyModal: 'Sometimes I like to draw at home. Either on the iPad or on paper' },
			],

			modalText: '',
			switchProject: true,
			projects: [
				{
					projectTitle: 'Portfolio',
					projectInfo: 'The Portfolio is a little web-application built by myself. It is written in Vue 3.',
					projectURL: 'https://blize.vercel.app',
				},
				{
					projectTitle: 'FaceApp',
					projectInfo:
						'This is a little application where I use a AI to recognize the emotion of the person who is looking in the camera.',
					projectURL: 'https://face-app-detector.vercel.app',
				},
				{
					projectTitle: 'Reddit-Bot',
					projectInfo:
						'This is a small Bot build with Python in school with some friends. You can send messages directly via Reddit.',
					projectURL: 'https://github.com/Blize/reddit-bot',
				},
			],
			workProjects: [
				{
					projectTitle: 'Onboarding',
					projectInfo: 'A 3 month project in which I learned basic knowledge about computer science',
					projectLeader: 'prename name',
				},
				{
					projectTitle: 'Team Atlas',
					projectInfo:
						'A 6 month project where I learned Vue.js, Express and Maria.DB. I became familiar with frontend and backend development',
					projectLeader: 'prename name',
				},
				{
					projectTitle: 'A-Team',
					projectInfo:
						'A 9 month project in which I worked as a frontend developer. I redeveloped and reworked the existing site with Vue 3. I had to deal with translation, project architecture and state management.',
					projectLeader: 'prename name',
				},
				{
					projectTitle: 'Team Neville',
					projectInfo:
						'In a 6 month project I was being a Product Owner for a team of 3 apprentice. Together we went through 3 months of learning an preparing for other teams and 3 months of developing',
					projectLeader: 'prename name',
				},
				{
					projectTitle: 'Team EDP',
					projectInfo:
						'In 6 months I was developing the Frontend of the EDH website. I was mostly working with react in this time',
					projectLeader: 'prename name',
				},
			],
		}
	},
	mounted() {
		this.setInitialValue()
		this.closeModalOnEscape()
		setTimeout(() => {
			this.isNotActive = false
		}, 250)
	},
	created() {
		this.windowWidth = window.innerWidth
		this.$nextTick(() => {
			window.addEventListener('resize', this.onResize)
		})
	},
	methods: {
		setInitialValue() {
			let element = document.getElementById('private-project')
			let theme = localStorage.getItem('myTheme')

			if (theme === 'light') {
				element.style.backgroundColor = 'rgb(212, 212, 212)'
			} else element.style.backgroundColor = '#454343'
		},
		openModal(id) {
			let myHobby = this.hobbies.filter((hobby) => hobby.id === id)[0]
			this.modalText = myHobby.hobbyModal
			let modal = document.getElementsByClassName('modal')[0]
			modal.style.display = 'block'
		},
		closeModal() {
			let modal = document.getElementsByClassName('modal')[0]
			modal.style.display = 'none'
		},
		closeModalOnEscape() {
			addEventListener('keydown', (event) => {
				if (event.key === 'Escape') {
					this.closeModal()
				}
			})
		},
		changeProject(id, secondId, bool) {
			let element = document.getElementById(id)
			let secondElement = document.getElementById(secondId)
			let theme = localStorage.getItem('myTheme')

			if (bool) {
				this.switchProject = true
				if (theme === 'light') {
					element.style.backgroundColor = 'rgb(212, 212, 212)'
				} else element.style.backgroundColor = '#454343'
				secondElement.style.backgroundColor = ''
			} else {
				this.switchProject = false
				if (theme === 'light') {
					secondElement.style.backgroundColor = 'rgb(212, 212, 212)'
				} else secondElement.style.backgroundColor = '#454343'
				element.style.backgroundColor = ''
			}
		},
	},
}
</script>

<style>
.parent-about {
	min-height: calc(100vh - 120px);
	padding: 3rem 7rem 0rem 7rem;
}
.fly-in-text {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: row;
}
.fly-in-text h1 {
	padding: 5px;
	opacity: 1;
	font-size: 4rem;
	transition: all 1.3s ease;
}
.fly-in-text.hidden h1 {
	opacity: 0;
}
.fly-in-text.hidden h1:nth-child(1) {
	transform: translateX(-400px) translateY(-200px);
}
.fly-in-text.hidden h1:nth-child(2) {
	transform: translateX(20px) translateY(100px);
}
.fly-in-text.hidden h1:nth-child(3) {
	transform: translateX(-150px) translateY(-80px);
}
.fly-in-text.hidden h1:nth-child(4) {
	transform: translateX(10px) translateY(-200px);
}
.fly-in-text.hidden h1:nth-child(5) {
	transform: translateX(-300px) translateY(200px);
}
.fly-in-text.hidden h1:nth-child(6) {
	transform: translateX(20px) translateY(-20px);
}
.fly-in-text.hidden h1:nth-child(7) {
	transform: translateX(50px) translateY(250px);
}

.info-text {
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 0 5% 5px 5%;
}
.title-hobby {
	display: flex;
	align-items: center;
	justify-content: center;
}
.hobby-object-parent {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
}

.hobby-object-under-parent {
	margin: 1%;
}
.hobby-object-child h3 {
	height: 5rem;
	width: 10rem;
	margin: 1rem 0.25rem 0.25rem 1rem;
	padding: 0.75rem;
	border-radius: 6px;
	background-color: rgb(255, 255, 255);
	border: 0.65px solid rgb(218, 218, 218);
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
	text-align: center;
	transition-duration: 0.75s;
}
.hobby-object-child h3:hover {
	transform: scale(1.05);
	transition-duration: 0.75s;
	cursor: grab;
}
.hobby-object-child h3:active {
	cursor: grabbing;
}

.switch-work-private {
	display: flex;
	flex-direction: row;

	margin: 2rem;

	border-radius: 6px;

	box-shadow: var(--shadow);
}
.switch-work-private h4 {
	padding: 1rem 2rem 1rem 2rem;
	margin: 0;
	border-radius: 6px;
}
.switch-work-private h4:hover {
	cursor: pointer;
	background-color: rgb(104, 104, 104);
}

.projects-object-parent {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.project-text {
	text-align: center;
}
.flip-card {
	background-color: transparent;
	width: 325px;
	height: 325px;
	perspective: 800px;
	margin-bottom: 4rem;
}

.flip-card-inner {
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transition: transform 0.8s;
	transform-style: preserve-3d;
}
.flip-card-inner h4 {
	padding: 1rem;
}

.flip-card:hover .flip-card-inner {
	transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
	border-radius: 6px;
	border: 0.65px solid rgb(218, 218, 218);
	position: absolute;
	width: 100%;
	height: 100%;

	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
}

.flip-card-front {
	background-color: rgb(255, 255, 255);
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
	color: black;
	overflow: hidden;
}

.flip-card-back {
	background-color: rgb(249, 249, 249);
	transform: rotateY(180deg);
	line-break: strict;
}
.modal {
	display: none;
	position: fixed;
	z-index: 1;
	padding-top: 100px;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: scroll;
	backdrop-filter: blur(6px);
	background-color: rgb(0, 0, 0);
	background-color: rgba(0, 0, 0, 0.6);
}

.modal-content {
	background-color: #fefefe;
	margin: auto;
	padding: 20px;
	border-radius: 6px;
	width: 80%;
	text-align: center;
}
.close {
	margin-top: -15px;
	float: right;
	color: #000000;
	font-size: 35px;
	font-weight: bold;
}
.close:hover {
	cursor: grab;
}
.close:active {
	cursor: grabbing;
}
@media screen and (max-width: 735px) {
	.parent-about {
		padding: 3rem 0rem 0rem 0rem;
	}
	div.fly-in-text {
		margin-bottom: -1rem;
	}
	.hobby-object-child h3 {
		width: 7.75rem;
	}
	.projects-child {
		height: 300px;
		width: 250px;
	}
	.flip-card {
		width: 200px;
		height: 250px;
	}
}
</style>
