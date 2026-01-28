<script lang="ts">
    import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
    import { users as sharedData } from "../shared.svelte"; 

    let formState = $state({
        name: '',
        url: '',
        description: '',
        email: ''
    });

    const inputClasses = "w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-gray-300 focus:ring-2 focus:ring-black/5 outline-none transition-all duration-200 placeholder-gray-400";
</script>

<form
	method="POST"
	use:enhance={() => {
		return async ({ result }) => {
			if (result.type === 'redirect') {
				sharedData.push({ ...formState });
				await goto(result.location);
			}
		};
	}}
	class="space-y-4"
>
    <input 
        type="text" 
        name="name" 
        placeholder="Name" 
        bind:value={formState.name} 
        class={inputClasses} 
    />

    <input 
        type="text" 
        name="url" 
        placeholder="URL" 
        bind:value={formState.url} 
        class={inputClasses} 
    />

    <input 
        type="text" 
        name="description" 
        placeholder="Description" 
        bind:value={formState.description} 
        class={inputClasses} 
    />

    <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        bind:value={formState.email} 
        class={inputClasses} 
    />

    <button 
        type="submit"
        class="w-full px-4 py-3 text-white bg-black rounded-lg hover:bg-gray-800"
    >
        Register
    </button>
</form>
