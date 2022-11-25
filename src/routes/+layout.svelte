<script>
	import SEO from '../components/SEO.svelte';
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	import '../app.css';
</script>

<SEO />
<div class="flex flex-col h-screen">
	<Nav />
	<div
		class="bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center flex-grow"
	>
		<slot />
	</div>
	<Footer />
</div>
