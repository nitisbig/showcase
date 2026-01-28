<script>
	import Lables from "$lib/components/UI/lables.svelte";
	import Card from "./Card.svelte";
	import Add from "$lib/components/UI/add_btn.svelte";

	const {data} = $props();


</script>

<Lables />
<Card users={data.users} />
<Add />

