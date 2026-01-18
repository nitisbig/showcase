<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Title from "$lib/components/UI/title.svelte";
	let { children } = $props();
</script>

<Title />

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
