<script lang="ts">
    import type { PollProps } from ".";

    const {
        options,
        votes,
    }: PollProps = $props()

    const getVotes = (id: string) => votes.filter(vote => vote.poll_option === id)
    const getPercentage = (id: string) => (getVotes(id).length / votes.length * 100).toFixed(0)
</script>

<div class="flex flex-col gap-2 mb-6">
    {#each options as option}
        <div class="relative text-end">
            {option.name}
            <div 
                class="
                    h-full top-0 absolute bg-progress bg-center bg-[length:140px]
                    after:content-[attr(data-percentage)] after:absolute after:ms-2
                " 
                style="width: {getPercentage(option.id)}%"
                data-percentage="{getPercentage(option.id)}%"></div>
        </div>
    {/each}
</div>