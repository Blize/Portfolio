<template>
	<div class="parent-home">
		<div class="content">
			<h2>Blize</h2>
			<h2>Blize</h2>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style>
div.parent-home {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	height: 100vh;
}
.content h2 {
	color: #fff;
	font-size: 8em;
	position: absolute;
	transform: translate(-50%, -50%);
}

.content h2:nth-child(1) {
	color: transparent;
	-webkit-text-stroke: 2px #1d67a8;
}

.content h2:nth-child(2) {
	color: #1d67a8;
	animation: liquid 4s ease-in-out infinite;
}

@keyframes liquid {
	0%,
	100% {
		clip-path: polygon(0% 45%, 16% 44%, 33% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%);
	}

	50% {
		clip-path: polygon(0% 60%, 15% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%);
	}
}
</style>
