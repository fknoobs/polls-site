<script lang="ts">
    import { classNames } from '$lib/utils';
    import { uniqBy } from 'lodash-es'
    import { onMount } from 'svelte';
    import { page } from '$app/stores';  

    let { data } = $props()
    let poll = $state(data.poll)

    const uniqueVotesCount = $derived(uniqBy(poll.votes, 'fingerprint').length)

    onMount( () => setInterval( async () => {
        const request = await fetch(`/api/polls/${$page.params.slug}`)
        const response = await request.json() as typeof poll

        poll = response
    }, 2000) )
</script>
<div class="bg-white min-h-screen p-8 text-2xl">
    <header class="text-start mb-8">
        <h1 class="font-bold text-3xl mb-6">{poll.title}</h1>
        {@html poll.description}
    </header>
    <section class="flex flex-col gap-4">
        {#each poll.options as option}
            <div class="flex flex-col">
                <span class="font-bold">{option.name}</span>
                <div class="flex items-center relative gap-4 h-8">
                    <div
                        class={classNames(
                            'relative h-full',
                            'bg-progress bg-[length:300px] bg-center',
                        )}
                        style="width: {(option.votes.length / uniqueVotesCount * 100).toFixed(2)}%;"
                        data-percentage={`${(option.votes.length / uniqueVotesCount * 100).toFixed(2)}%`}
                    ></div>
                    <span>{(option.votes.length / uniqueVotesCount * 100).toFixed(0)}%</span>
                </div>
            </div>
        {/each}
    </section>
</div>