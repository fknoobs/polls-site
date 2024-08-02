<script lang="ts">
    import type { ZodIssue } from 'zod'
    import type { Prisma } from '@prisma/client'
    import { enhance } from '$app/forms'
    import Input from '../Input.svelte'
    import Button from '../Button.svelte'

    type Props = {
        profile?: Partial<Prisma.ProfileCreateInput> | null
    }

    let {
        profile = $bindable({
            displayName: 'fknoobs',
            steamId: '76561198036527204'
        })
    }: Props = $props()
    
    let isSubmitting = $state(false)
    let inputErrors = $state<Record<string, ZodIssue>>()
    let errorMessage = $state<string | null>(null)
</script>
{#if errorMessage}
    <div class="px-4 py-3 mb-8 bg-red-300">
        {errorMessage}
    </div>
{/if}
<form
    method="post"
    use:enhance={() => {
        return async ({ result }) => {
            isSubmitting = true

            if (result.type === "failure") {
                // @ts-ignore
                inputErrors = result.data;

                if (result.data?.statusText) {
                    errorMessage = result.data.statusText as string
                }
            }

            isSubmitting = false
        }
    }}
>
    <div class="mb-4">
        <Input
            name="displayName"
            label="Nickname"
            placeholder="Choose a nickname"
            error={inputErrors?.displayName}
            value={profile?.displayName}
        />
    </div>
    <div class="mb-4">
        <Input
            name="steamId"
            label="Steam ID"
            placeholder="76561198036527204"
            error={inputErrors?.steamId}
            value={profile?.steamId}
        />
    </div>
    <div class="flex justify-end">
        <Button variant="tetriary" loading={isSubmitting}>{profile ? 'Update' : 'Submit'}</Button>
    </div>
</form>
