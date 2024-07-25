<script lang="ts">
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
<div class="bg-white min-h-screen p-8 text-2xl">
    <header class="text-start mb-8">
        <h1 class="font-bold text-3xl mb-6">{title}</h1>
        {@html description}
    </header>
    <section class="flex flex-col gap-3">
        {#each options as option}
            <div class="flex flex-col">
                <span>{option.name}</span>
                <div class="flex items-center relative gap-4 h-6">
                    <div
                        class={classNames(
                            'relative h-full',
                            'bg-progress bg-[length:200px] bg-center',
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