<script lang="ts">
    import { pb } from '$lib';
    import { getPoll } from '$lib/poll.js';
    import { onMount } from 'svelte';
    import { uniqBy } from 'lodash-es'

    let { data } = $props()
    let poll = $state(data.poll)

    const getVotes = (id: string) => poll.votes.filter(vote => vote.poll_option === id)
    const getPercentage = (id: string) => (getVotes(id).length / uniqBy(poll.votes, 'user_id').length * 100).toFixed(0)

    onMount( () => {
        pb.collection('poll').subscribe(data.poll.id, async (e) => {
            poll = await getPoll(poll.slug)
        })
    })
</script>
<div class="text-2xl font-medium m-8 overflow-clip">
    <div class="mb-6">{@html poll.description}</div>
    <div class="flex flex-col gap-2 mb-6">
        {#each poll.options as option}
            <div class="flex flex-col gap-1 mb-3">
                <span>{option.name}</span>
                <div class="relative text-end">
                    <span class="relative z-10 opacity-0">{option.name}</span>
                    <div 
                        class="
                            h-full top-0 absolute bg-progress bg-center bg-[length:140px]
                            after:content-[attr(data-percentage)] after:absolute after:ms-2
                        " 
                        style="width: {getPercentage(option.id)}%"
                        data-percentage="{getPercentage(option.id)}%"></div>
                </div>
            </div>
        {/each}
    </div>
</div>