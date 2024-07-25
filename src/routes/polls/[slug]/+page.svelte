<script lang="ts">
    import { onMount } from 'svelte';
    import type { PollVotesResponse } from '../../../pocketbase-types.js';
    import { applyAction, enhance } from '$app/forms';
    import Spinner from '$lib/components/Spinner.svelte';
    import { goto } from '$app/navigation';

    const { data } = $props()
    
    let isSubmitting = $state(false)
    let hash = $state('')
    let myVotes = $state<PollVotesResponse[]>([])

    onMount( async () => {
        const { getFingerprint } = await import('@thumbmarkjs/thumbmarkjs')

        hash = await getFingerprint() as string
        myVotes = data.poll.votes.filter(vote => vote.user_id === hash)
    })
</script>
<div class="bg-gray-200 h-screen w-screen flex justify-center items-center">
    <form 
        class="bg-white w-[450px] text-center shadow-md p-8 rounded-lg" 
        method="POST" 
        action="?/vote"
        use:enhance={({ formElement, formData, action, cancel, submitter }) => {
            isSubmitting = true

            return async ({ result }) => {
                if (result.type === 'redirect') {
                    goto(result.location)
                } else {
                    await applyAction(result);
                }

                isSubmitting = false
            }
        }}
    >
        <h1 class="font-bold text-3xl mb-4">{data.poll.title}</h1>
        {@html data.poll.description}
        <input type="hidden" value={data.poll.id} name="poll" />
        <input type="hidden" value={hash} name="userId" />
        <div class="flex flex-col gap-2 mb-6 mt-8">
            {#each data.poll.options as option}
                <label
                    for={option.value} 
                    class="
                        cursor-pointer
                        text-start text-gray-500 p-3 rounded-lg
                        border border-dashed border-gray-400
                        has-[:checked]:bg-[#f2bd0e] has-[:checked]:bg-opacity-10
                        has-[:checked]:border-gray-900 has-[:checked]:text-black
                    "
                >
                    <input 
                        type="checkbox" 
                        class="peer hidden" 
                        name="map" 
                        value={option.id} 
                        id={option.value}
                        checked={myVotes.find(vote => vote.poll_option === option.id) ? true : false}
                    />
                    <label for={option.value}>{option.name}</label>
                </label>
            {/each}
        </div>
        <div>
            <button 
                class="
                    flex items-center justify-center gap-3
                    bg-black text-white transition-all
                    font-bold w-full rounded-lg p-3
                    hover:opacity-80 disabled:opacity-60
                "
                disabled={isSubmitting}
            >
                {#if isSubmitting}
                    <Spinner />
                {/if}
                {myVotes.length > 0 ? 'Update' : 'Submit'}
            </button>
        </div>
    </form>
</div>