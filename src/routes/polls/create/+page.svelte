<script lang="ts">
    import { Plus, Trash } from 'lucide-svelte'
    import { enhance } from "$app/forms";
    import { classNames } from "$lib/utils";
    import Input from "$lib/components/Input.svelte";
    import Textarea from "$lib/components/Textarea.svelte";
    import Button from "$lib/components/Button.svelte";
    import { goto } from '$app/navigation';

    let errorMessage = $state<string | null>(null)
    let options = $state<string[]>([
        'Duclair',
        'Rails and Metal',
        'Wolfheze',
        'Lorraine',
        'McGechean\'s War',
        'Route 913',
        'Pointe du Hoc',
        'Semois (2v2)'
    ])
    let isSubmitting = $state(false)
</script>
<div class="flex h-screen w-screen justify-center items-center">
    <form 
        class={classNames(
            'bg-white w-[450px] p-8',
            'shadow-drop'
        )}
        method="post"
        use:enhance={({ cancel }) => {
            isSubmitting = true

            return async ({ result }) => {
                if (result.type === 'error') {
                    errorMessage = result.error.message ? result.error.message : 'Something went wrong, try again.'
                    cancel()
                }

                if (result.type === 'redirect') {
                    goto(result.location)
                }

                isSubmitting = false
            }
        }}
    >
        <header class="text-center mb-8">
            <h1 class="font-bold text-3xl mb-6">Create poll</h1>
        </header>
        {#if errorMessage}
            <div class="px-4 py-3 mb-8 bg-primary-200">
                {errorMessage}
            </div>
        {/if}
        <section class="flex flex-col gap-6">
            <div>
                <Input label="Title" name="title" placeholder="Keep it short" />
            </div>
            <div>
                <Textarea label="Description" name="description" rows={5} placeholder="Give a brief description of the poll" />
            </div>
            <div>
                <!-- svelte-ignore a11y_label_has_associated_control -->
                <label class="inline-block font-medium mb-2">Options</label>
                {#each options as option, i}
                    <div class="flex items-center gap-1 mb-3">
                        <Input name="options" placeholder={`Option #${i}`} value={option} />
                        {#if (options.length - 1) === i}
                            <button 
                                type="button" 
                                class={classNames(
                                    'p-3 bg-transparent transition-colors', 
                                    'border border-dashed border-black',
                                    'hover:bg-gray-400'
                                )}
                                onclick={() => {
                                    options.push('')
                                }}
                            >
                                <Plus />
                            </button>
                        {:else}
                            <button 
                                type="button" 
                                class={classNames(
                                    'p-3 bg-transparent transition-colors', 
                                    'border border-dashed border-black text-gray-400',
                                    'hover:bg-red-500 hover:text-white'
                                )}
                                onclick={() => {
                                    options.splice(i, 1)
                                }}
                            >
                                <Trash />
                            </button>
                        {/if}
                    </div>
                {/each}
            </div>
            <div>
                <Button bind:loading={isSubmitting}>
                    Create poll
                </Button>
            </div>
        </section>
    </form>
</div>

<!-- Please vote which maps you would like to see included in the tournament. -->