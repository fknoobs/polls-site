<script lang="ts">
    import Box from "$lib/components/Box.svelte";
    import Input from "$lib/components/Input.svelte";
    import Textarea from "$lib/components/Textarea.svelte";
    import Button from "$lib/components/Button.svelte";
    import { enhance } from "$app/forms";
    import { page } from '$app/stores';
    import type { Prisma } from "@prisma/client";

    let isSubmitting = $state(false)
    let errorMessage = $state<string | null>(null)
    let createdTourney = $state<Prisma.TourneysSelect | null>(null)
</script>
<Box>
    <header class="mb-8">
        <h1 class="text-3xl font-bold mb-6">Create a tournament</h1>
        <p>Fill out the fields below to create a new tournament.</p>
    </header>
    {#if errorMessage}
        <div class="px-4 py-3 mb-8 bg-primary-200">
            {errorMessage}
        </div>
    {/if}
    {#if createdTourney}
        <section>
            <div class="mb-3">
                <span class="block mb-1 font-bold">Name</span>
                <span class="block">{createdTourney.name}</span>
            </div>
            <div class="mb-3">
                <span class="block mb-1 font-bold">Description</span>
                <span class="block">{createdTourney.description}</span>
            </div>
            <div class="mb-3">
                <span class="block mb-1 font-bold">Users can registrate here</span>
                <a href={`${$page.url.origin}/tourneys/${createdTourney.slug}/apply`}>{$page.url.origin}/tourneys/{createdTourney.slug}/apply</a>
            </div>
        </section>
    {:else}
        <form 
            method="post"
            use:enhance={({ formElement, formData, action, cancel, submitter }) => {
                errorMessage = null
                isSubmitting = true

                return async ({ result }) => {
                    if (result.type === 'success' && result.data) {
                        createdTourney = result.data
                    } else {
                        createdTourney = null
                        errorMessage = 'Failed to create tournament.'
                    }

                    errorMessage = null
                    isSubmitting = false
                }
            }}
        >
            <div class="mb-3">
                <Input 
                    label="Name"
                    placeholder="Eg: clash of titans"
                    name="name"
                    autocomplete="off"
                    required
                />
            </div>
            <div class="mb-3">
                <Input 
                    label="Start date"
                    name="date"
                    type="date"
                    required
                />
            </div>
            <div class="mb-3">
                <Textarea
                    label="Description"
                    name="description"
                    rows={5}
                    placeholder="A brief description of the tournament"
                />
            </div>
            <div class="mb-3">
                <Button loading={isSubmitting}>
                    Create tournament
                </Button>
            </div>
        </form>
    {/if}
</Box>