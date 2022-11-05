<template>
	<div class="parent-imprint">
		<div class="title">
			<h1>Imprint</h1>
			<ol>
				<li>Owner: Matthias Mantsch</li>
				<li>Email: matthias@mantsch.ch</li>
				<li>Host: <a href="https://vercel.com">Vercel</a></li>
			</ol>
		</div>

		<div class="form">
			<h1>Write an Email</h1>

			<label for="name">Name</label>
			<input type="text" name="name" />

			<label for="last-name">Last Name</label>
			<input type="text" name="last-name" />

			<label for="email">Email</label>
			<input type="text" name="email" />

			<label for="info-text">Your Text</label>
			<textarea name="info-text" cols="20" rows="10"></textarea>

			<button class="submit-button">Submit</button>
		</div>

		<div class="title">
			<h1>Info</h1>
			<p>
				This Page is only build by me. The only dependency is the framework Vue.js. You can see more of my work on
				<a href="https://github.com/Blize">Github</a>. But if you wanna see some code snipped's and ideas how I created
				this website click here
			</p>
			<p>|</p>
			<p>\/</p>

			<router-link to="/developer" class="button-to-developer">Developer</router-link>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
.parent-imprint {
	min-height: calc(100vh - 60px - 61px);
	padding: 0 30% 0 30%;
}
.title {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}

li {
	list-style: none;
}
.title p {
	text-align: center;
	margin: 0 3rem 0 3rem;
}
.button-to-developer {
	background-color: rgb(223, 223, 223);
	margin: 1rem 0 2rem 0;
	padding: 0.45rem;
	border-radius: 6px;
	transition-duration: 0.5s;
}
.button-to-developer:hover {
	transform: scale(1.05);
	transition-duration: 0.5s;
}
@media screen and (max-width: 735px) {
	.parent-imprint {
		padding: 0;
	}
}

.form {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-radius: 6px;
}
label,
input,
textarea {
	padding-top: 1rem;
	border-radius: 6px;
}

input:hover,
textarea:hover {
	border: gray 2px solid;
}

input:focus,
textarea:focus {
	border: blue 2px solid;
}
.submit-button {
	border-radius: 6px;
	padding: 0.25rem 1rem 0.25rem 1rem;
	margin: 1rem;
}
</style>
