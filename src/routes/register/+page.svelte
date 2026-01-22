<script lang="ts">
    import { goto } from '$app/navigation';
    import { data } from "../shared.svelte";

    let form = $state({
        name: '',
        url: '',
        description: '',
        email: ''
    });


    const inputClasses = "w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-gray-300 focus:ring-2 focus:ring-black/5 outline-none transition-all duration-200 placeholder-gray-400";

    function handleSubmit(e: SubmitEvent) {
 
        e.preventDefault();

        data.push({ ...form });


        goto('/');
    }
</script>

<form 
    onsubmit={handleSubmit} 
    class="flex flex-col gap-4 w-full max-w-sm p-6 mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm"
>
    <div class="space-y-3">
        <input 
            bind:value={form.name}
            type="text" 
            placeholder="Enter your project name" 
            required
            class={inputClasses}
        >
        
        <input
            bind:value={form.url} 
            type="url" 
            placeholder="Enter URL (https://...)"
            required
            class={inputClasses}
        >
        
        <input 
            bind:value={form.description}
            type="text" 
            placeholder="Write description"
            class={inputClasses}
        >
        
        <input 
            bind:value={form.email}
            type="email" 
            placeholder="Enter your email"
            required
            class={inputClasses}
        >
    </div>

    <button 
        type="submit" 
        class="w-full px-6 py-3 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 transition-all duration-200"
    >
        Publish
    </button>
</form>