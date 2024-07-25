<script lang="ts">
    import { enhance } from "$app/forms";
    import { classNames } from "$lib/utils.js";
    import { CircleCheck, CircleDashed } from "lucide-svelte";
    import { fingerprint } from "$lib/stores/user.js";
    import { goto } from "$app/navigation";
    import Button from "$lib/components/Button.svelte";

    const { data } = $props()
    const {
        title,
        description,
        options,
        votes
    } = data.poll

    let isSubmitting = $state(false)
    let errorMessage = $state<string | null>(null)
    
    const userVotes = $derived(votes.filter(vote => vote.fingerprint === $fingerprint))
    const didVote = $derived(!!userVotes.length)
</script>
<div class="flex h-screen w-screen justify-center items-center">
    <form 
        class={classNames(
            'bg-white w-[450px] p-6',
            'shadow-drop'
        )}
        method="post"
        action="?/vote"
        use:enhance={({ formElement, formData, action, cancel, submitter }) => {
            isSubmitting = true

            const ids = formData.getAll('ids')
            const fingerprint = formData.get('fingerprint')

            if (!fingerprint) {
                errorMessage = 'You are not allowed to vote, sorry!'
                isSubmitting = false

                cancel()
            }

            if (ids.length < 4) {
                errorMessage = 'Select atleast 4 maps'
                isSubmitting = false

                cancel()
            } else {
                errorMessage = null
            }

            return async ({ result }) => {
                if (result.type === 'error') {
                    errorMessage = result.error.message ? result.error.message : 'Something went wrong, try again.'
                }

                if (result.type === 'redirect') {
                    goto(result.location)
                }

                isSubmitting = false
            }
        }}
    >
        <header class="text-center mb-8">
            <h1 class="font-bold text-3xl mb-6">{title}</h1>
            {@html description}
        </header>
        {#if errorMessage}
            <div class="px-4 py-3 mb-8 bg-primary-200">
                {errorMessage}
            </div>
        {/if}
        <section class="flex flex-col gap-1">
            {#if !$fingerprint}
                {#each [0, 1, 2, 3, 4] as _}
                    <div class="py-2 px-4 flex items-center bg-slate-300 animate-pulse">
                        <CircleDashed class="ms-auto text-gray-500" />
                    </div>
                {/each}
            {:else}
                <input type="hidden" name="pollId" value={data.poll.id} />
                <input type="hidden" name="fingerprint" value={$fingerprint} />

                {#each options as option}
                    <label 
                        class={classNames(
                            'py-2 px-4',
                            'flex items-center',
                            'cursor-pointer',
                            'text-gray-500',
                            'border-l-[6px] border-transparent',
                            'has-[:checked]:border-black',
                            'has-[:checked]:bg-primary-100 has-[:checked]:text-black',
                            'hover:bg-primary-50',
                        )}
                    >
                        <span>{option.name}</span>
                        <CircleCheck class="ms-auto" />
                        <input
                            class="peer hidden"
                            type="checkbox" 
                            name="ids"
                            value={option.id}
                            checked={!!userVotes.find(vote => vote.optionId === option.id)}
                        />
                    </label>
                {/each}
                <Button variant="primary" bind:loading={isSubmitting}>
                    {didVote ? 'Update' : 'Send'}
                </Button>
            {/if}
        </section>
    </form>
</div>