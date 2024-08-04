<script lang="ts">
    import { enhance } from "$app/forms";
    import { classNames } from "$lib/utils.js";
    import CircleCheck from "lucide-svelte/icons/circle-check";
    import CircleDashed from "lucide-svelte/icons/circle-dashed";
    import { fingerprint } from "$lib/stores/user.svelte.js";
    import { goto } from "$app/navigation";
    import Button from "$lib/components/Button.svelte";
    import Box from "$lib/components/Box.svelte";

    const { data } = $props()
    const {
        title,
        description,
        options,
        votes,
        multiple,
        maxChoices,
        minChoices
    } = data.poll

    let isSubmitting = $state(false)
    let errorMessage = $state<string | null>(null)
    
    const userVotes = $derived(votes.filter(vote => vote.fingerprint === fingerprint))
    const didVote = $derived(!!userVotes.length)
</script>
<Box {title} {description}>
    <form 
        method="post"
        action="?/vote"
        use:enhance={({ formData, cancel }) => {
            isSubmitting = true

            const ids = formData.getAll('ids')
            const fingerprint = formData.get('fingerprint')

            if (!fingerprint) {
                errorMessage = 'You are not allowed to vote, sorry!'
                isSubmitting = false

                cancel()
            }

            if (multiple && ids.length < minChoices) {
                errorMessage = `Select atleast ${minChoices}`
                isSubmitting = false

                cancel()
            } else {
                errorMessage = null
            }

            if (ids.length > maxChoices) {
                errorMessage = `You cannot select more than ${minChoices} options`
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
        {#if errorMessage}
            <div class="px-4 py-3 mb-8 bg-primary-200">
                {errorMessage}
            </div>
        {/if}
        <section class="flex flex-col gap-1">
            {#if !fingerprint}
                {#each [0, 1, 2, 3, 4] as _}
                    <div class="py-2 px-4 flex items-center bg-slate-300 animate-pulse">
                        <CircleDashed class="ms-auto text-gray-500" />
                    </div>
                {/each}
            {:else}
                <input type="hidden" name="pollId" value={data.poll.id} />
                <input type="hidden" name="fingerprint" value={fingerprint} />

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
                            type={multiple ? 'checkbox' : 'radio'}
                            name="ids"
                            value={option.id}
                            checked={!!userVotes.find(vote => vote.optionId === option.id)}
                        />
                    </label>
                {/each}
                <div class="mt-8">
                    <Button variant="primary" bind:loading={isSubmitting}>
                        {didVote ? 'Update' : 'Submit'}
                    </Button>
                </div>
            {/if}
        </section>
    </form>
</Box>