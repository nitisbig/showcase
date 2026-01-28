<script>
    let {users} = $props()
</script>

{#each users as d}
    <div
        class="group relative mx-auto my-4 flex w-full max-w-2xl items-start gap-6 rounded-2xl border border-gray-300 bg-white p-5 shadow-md transition-all duration-100  hover:border-gray-200 hover:shadow-md hover:shadow-gray-500/10"
    >
        <div class="min-w-0 flex-1">
            <div class="flex items-center justify-between gap-2">
                <div class="truncate text-lg font-bold tracking-tight text-gray-900">
                    {d.name}
                </div>

                <div class="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Verified
                </div>
            </div>

            <a
                href={d.url}
                class="mt-1 block truncate text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
            >
                {d.url}
            </a>

            <div class="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-600">
                {d.description}
            </div>

            <div class="mt-5 flex items-center justify-between border-t border-gray-100 pt-3">
                <button 
                    class="group/btn flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50 active:scale-95"
                >
                    <span class="text-gray-400 group-hover/btn:text-orange-500">▲</span> Upvote
                </button>
                
                <button 
                    class="flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                >
                    Visit Website →
                </button>
            </div>
        </div>

        <img
            src="https://fastly.picsum.photos/id/961/200/200.jpg?hmac=gHwrXvhjUL97oGKmAYQn508wdQ_V5sE9P64erzR-Ork"
            alt="img"
            class="order-first h-full w-fit shrink-0 rounded-xl bg-gray-100 object-cover shadow-sm ring-1 ring-gray-900/5"
        />
    </div>
{/each}
