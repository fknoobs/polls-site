<script lang="ts">
    import { type ZodIssue } from 'zod'
    import Box from '$lib/components/Box.svelte'
    import Input from '$lib/components/Input.svelte'
    import Markdown from '$lib/components/Markdown.svelte'
    import Button from '$lib/components/Button.svelte'
    import Link from '$lib/components/Link.svelte'
    import MoveLeft from 'lucide-svelte/icons/move-left'
    import Radio from '$lib/components/Radio.svelte'
    import Tabs from '$lib/components/tabs/Tabs.svelte'
    import Tab from '$lib/components/tabs/Tab.svelte'
    import Checkbox from '$lib/components/Checkbox.svelte';
    import { TourneysCreateInputSchema } from '$prisma/inputTypeSchemas/TourneysCreateInputSchema'
    import { validate } from '$lib/utils';
    import { enhance } from '$app/forms'

    type Props = {
        type: '1v1' | '2v2' | '3v3' | '4v4'
    }

    let type = $state('1')
    let inputErrors = $state<{[key in keyof typeof TourneysCreateInputSchema['_output']]: ZodIssue}>()

    const testdata = $state({
        name: '2v2 Clash of Noobs',
        startDate: '2024-11-25',
        endDate: '2024-12-31',
        openRegistrations: true,
        type: 2,
        description: `Victory at All Costs is an intense and strategic tournament for Company of Heroes 1 enthusiasts. Players will engage in high-stakes battles, commanding their forces with precision and cunning.`,
        rules: `- **Anti-Tank (AT) Gun and Pak Abuse:** 
  - You are prohibited from exploiting glitches that allow AT guns and Paks to skip their reload animations, causing them to fire faster than intended.
- **Sniper Limit:** 
  - Each team can deploy a maximum of 2 snipers.
- **Forbidden Mods:** 
  - Any mods that provide an unfair advantage are not allowed, including but not limited to:
    - Maphacks
    - Minimap reveal mods
    - Resource modification mods
`
    })
</script>
<Box title="Create a tournament" size="md">
    {#snippet beforeTitle()}
        <div class="mb-8">
            <Link before={MoveLeft} href={`/tourneys`} variant="black">Go back</Link>
        </div>
    {/snippet}
    <form 
        method="post"
        use:enhance={async ({ formData, cancel }) => {
            let { errors, data } = validate(TourneysCreateInputSchema, formData)
            
            if (errors) {
                inputErrors = errors
                cancel()
            }

            console.log(data)

            return async ({ result }) => {
                if (result.type === 'failure') {
                    // @ts-ignore
                    inputErrors = result.data
                }
            }
        }}
    >
        <div class="mb-4">
            <Input 
                name="name"
                label="Name"
                placeholder="Name of the tournament"
                error={inputErrors?.name}
                bind:value={testdata.name}
            />
        </div>
        <div class="mb-4 grid grid-cols-2 gap-4">
            <div>
                <Input 
                    type="date" 
                    name="startDate" 
                    label="Start date" 
                    error={inputErrors?.startDate}
                    bind:value={testdata.startDate}
                />
            </div>
            <div>
                <Input 
                    type="date" 
                    name="endDate" 
                    label="End date" 
                    error={inputErrors?.endDate}
                    bind:value={testdata.endDate}
                />
            </div>
        </div>
        <div class="mb-8">
            <Checkbox name="registrationsOpen" label="Open registrations" />
        </div>
        <div class="mb-4">
            <label for="type" class="inline-block font-medium mb-2">Select type</label>
            <div class="grid grid-cols-4 gap-4">
                <Radio name="type" label="1v1" value={1} bind:group={testdata.type} />
                <Radio name="type" label="2v2" value={2} bind:group={testdata.type} />
                <Radio name="type" label="3v3" value={3} bind:group={testdata.type} />
                <Radio name="type" label="4v4" value={4} bind:group={testdata.type} />
            </div>
        </div>
        <div class="mb-4 mt-10">
            <Tabs>
                <Tab id="description" title="Description">
                    <div class="mt-6">
                        <Markdown name="description" label="Description (Supports markdown)" bind:value={testdata.description} />
                    </div>
                </Tab>
                <Tab id="rules" title="Rules">
                    <div class="mt-6">
                        <Markdown name="rules" label="Rules (Supports markdown)" bind:value={testdata.rules} />
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