<script lang="ts">
    import Box from '$lib/components/Box.svelte';
    import { classNames } from '$lib/utils';
    import { uniqBy } from 'lodash-es'

    let { data } = $props()
    const {
        title,
        description,
        options,
        votes
    } = data.poll

    const uniqueVotesCount = uniqBy(votes, 'fingerprint').length
</script>
<Box {title} {description}>
    <section class="flex flex-col gap-3">
        {#each options as option}
            <div class="flex flex-col">
                <span class="font-bold">{option.name}</span>
                <div class="flex items-center relative gap-4 h-6ðß">
                    <div
                        class={classNames(
                            'relative h-full',
                            'bg-progress bg-[length:240px] bg-center',
                        )}
                        style="width: {(option.votes.length / uniqueVotesCount * 100).toFixed(2)}%;"
                        data-percentage={`${(option.votes.length / uniqueVotesCount * 100).toFixed(2)}%`}
                    ></div>
                    <span>{(option.votes.length / uniqueVotesCount * 100).toFixed(0)}%</span>
                </div>
            </div>
        {/each}
        <span class="block mt-8 mb-2 font-bold text-lg">{uniqueVotesCount} votes</span>
    </section>
</Box>