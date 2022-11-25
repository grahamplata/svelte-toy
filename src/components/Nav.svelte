<script>
	import { staticData } from '../lib/data';

	const { nav } = staticData;
</script>

<header class="text-gray-600 body-font">
	<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
		<a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
			<span class="ml-3 text-xl">{nav}</span>
		</a>
		<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
			<a href="/" class="mr-5 hover:text-gray-900">Home</a>
			<a href="/about" class="mr-5 hover:text-gray-900">About</a>
		</nav>
	</div>
</header>
