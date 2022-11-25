<script>
	import { staticData } from '../../lib/data';

	const { nav } = staticData;
</script>

<section class="text-white body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-col text-center w-full mb-20">
			<h2 class="text-xs text-white tracking-widest font-medium title-font mb-1">
				A simple layout
			</h2>
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">About - {nav}</h1>
			<p class="lg:w-2/3 mx-auto leading-relaxed text-base">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</div>
	</div>
</section>
