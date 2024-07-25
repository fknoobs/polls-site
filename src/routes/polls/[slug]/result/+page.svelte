<script lang="ts">
    import { uniqBy } from 'lodash-es';

    const { data } = $props()

    const getVotes = (id: string) => data.poll.votes.filter(vote => vote.poll_option === id)
    const getPercentage = (id: string) => (getVotes(id).length / uniqBy(data.poll.votes, 'user_id').length * 100).toFixed(0)
</script>
<div class="bg-gray-200 h-screen w-screen flex justify-center items-center">
    <div class="bg-white w-[450px] text-center shadow-md p-8 rounded-lg">
        <h1 class="font-bold text-3xl mb-6">{data.poll.title}</h1>
        <a href={`/polls/${data.poll.slug}`} class="relative inline-block font-bold transition-all left-0 mb-10 hover:-left-2">&#8592; Edit my vote</a>
        <div class="flex flex-col gap-2 mb-6 overflow-clip">
            {#each data.poll.options as option}
                <div class="flex flex-col gap-2">
                    <span class="text-start">{option.name}</span>
                    <div class="relative text-end">
                        <span class="opacity-0">{option.name}</span>
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
</div>