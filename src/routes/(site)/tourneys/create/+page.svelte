<script lang="ts">
    import Box from '$lib/components/Box.svelte'
    import Input from '$lib/components/Input.svelte'
    import Markdown from '$lib/components/Markdown.svelte'
    import Button from '$lib/components/Button.svelte'
    import { enhance } from '$app/forms'
    import type { Prisma } from '@prisma/client'
    import Link from '$lib/components/Link.svelte'
    import MoveLeft from 'lucide-svelte/icons/move-left'
    import Radio from '$lib/components/Radio.svelte'
    import Tabs from '$lib/components/tabs/Tabs.svelte'
    import Tab from '$lib/components/tabs/Tab.svelte'
    import Checkbox from '$lib/components/Checkbox.svelte';
    import { TourneysCreateInputSchema } from '$prisma/inputTypeSchemas/TourneysCreateInputSchema'
    import { type ZodError } from 'zod'

    type Props = {
        type: '1v1' | '2v2' | '3v3' | '4v4'
    }

    let type = $state('1')
    let errors = $state<ZodError<Prisma.TourneysCreateInput>['errors']>()
</script>
<Box title="Create a tournament" size="md">
    {#snippet beforeTitle()}
        <div class="mb-8">
            <Link before={MoveLeft} href={`/tourneys`} variant="black">Go back</Link>
        </div>
    {/snippet}
    <form 
        method="post"
        use:enhance={async ({ formElement, formData, action, cancel, submitter }) => {
            const { success, data, error } = TourneysCreateInputSchema.safeParse(
                Object.fromEntries(formData.entries())
            )
            
            if (error) {
                errors = error.errors
                console.log(Object.fromEntries(formData.entries()))
            }

            cancel()
            return async ({ result }) => {
                
            }
        }}
    >
        <div class="mb-4">
            <Input name="name" label="Name" placeholder="Name of the tournament" />
        </div>
        <div class="mb-4 grid grid-cols-2 gap-4">
            <div>
                <Input type="date" name="startDate" label="Start date" />
            </div>
            <div>
                <Input type="date" name="endDate" label="End date" />
            </div>
        </div>
        <div class="mb-8">
            <Checkbox name="registrationsOpen" label="Open registrations" />
        </div>
        <div class="mb-4">
            <label for="type" class="inline-block font-medium mb-2">Select type</label>
            <div class="grid grid-cols-4 gap-4">
                <Radio name="type" label="1v1" value="1" bind:group={type} />
                <Radio name="type" label="2v2" value="2" bind:group={type} />
                <Radio name="type" label="3v3" value="3" bind:group={type} />
                <Radio name="type" label="4v4" value="4" bind:group={type} />
            </div>
        </div>
        <div class="mb-4 mt-10">
            <Tabs>
                <Tab id="description" title="Description">
                    <div class="mt-6">
                        <Markdown name="description" label="Description (Supports markdown)" />
                    </div>
                </Tab>
                <Tab id="rules" title="Rules">
                    <div class="mt-6">
                        <Markdown name="rules" label="Rules (Supports markdown)" />
                    </div>
                </Tab>
            </Tabs>
        </div>
        <div class="flex justify-end">
            <Button variant="tetriary">
                Create
            </Button>
        </div>
    </form>
</Box>