
<script>
    import { goto } from "$app/navigation";
    function handleClick(){
        goto('/register')
    }
</script>

<div class=" absolute top-4 right-5">
    <button onclick={handleClick} class="h-14 w-14 text-2xl text-center text-white transition-colors bg-gray-900 rounded-full shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
        +
    </button>
</div>