<script>
	import { goto } from "$app/navigation";
    let projectName = $state('')
    let url = $state('')
    let description = $state('')
    let email = $state('')
    import { data } from "../shared.svelte";

     function handleClick(){
        data.push(
            		{
			name: projectName,
			url: url,
			description: description
		},
        )

         goto('/')
    }
</script>

<div class="flex flex-col gap-4 w-full max-w-sm p-6 mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm">
    <div class="space-y-3">
        <input 
        bind:value={projectName}
            type="text" 
            placeholder="Enter your project name" 
            class="w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-gray-300 focus:ring-2 focus:ring-black/5 outline-none transition-all duration-200 placeholder-gray-400"
        >
        <input
        bind:value={url} 
            type="text" 
            placeholder="Enter Url"
            class="w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-gray-300 focus:ring-2 focus:ring-black/5 outline-none transition-all duration-200 placeholder-gray-400"
        >
        <input 
        bind:value={description}
            type="text" 
            placeholder="Write description"
            class="w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-gray-300 focus:ring-2 focus:ring-black/5 outline-none transition-all duration-200 placeholder-gray-400"
        >
        
        <input 
        bind:value={email}
            type="email" 
            placeholder="Enter your email"
            class="w-full px-4 py-3 text-sm text-gray-900 bg-gray-50 border border-transparent rounded-lg focus:bg-white focus:border-gray-300 focus:ring-2 focus:ring-black/5 outline-none transition-all duration-200 placeholder-gray-400"
        >
    </div>

    <button onclick={handleClick} class="w-full px-6 py-3 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 transition-all duration-200">
        Publish
    </button>
</div>