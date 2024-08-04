<script lang="ts">
    import type { ZodIssue } from 'zod'
    import type { Prisma } from '@prisma/client'
    import { enhance } from '$app/forms'
    import Input from '../Input.svelte'
    import Button from '../Button.svelte'
    import Alert from '../Alert.svelte';
    import { page } from '$app/stores';
    import { goto } from '$app/navigation';

    type Props = {
        profile?: Partial<Prisma.SteamProfileCreateInput> | null
    }

    let {
        profile = $bindable()
    }: Props = $props()
    
    let isSubmitting = $state(false)
    let inputErrors = $state<Record<string, ZodIssue>>()
    let errorMessage = $state<string>()
    let successMessage = $state<string>()
</script>
{#if errorMessage}
    <Alert variant="danger" classNames="mb-8">{errorMessage}</Alert>
{/if}
{#if successMessage}
    <Alert variant="success" classNames="mb-8">{successMessage}</Alert>
{/if}
<form
    method="post"
    use:enhance={() => {
        return ({ result }) => {
            isSubmitting = true
            inputErrors = undefined
            errorMessage = undefined

            if (result.type === "failure") {
                // @ts-ignore
                inputErrors = result.data;

                if (result.data?.statusText) {
                    errorMessage = result.data.statusText as string
                }
            }

            if (result.type === 'success') {
                successMessage = 'Steam profile linked.'
            }

            setTimeout(() => {
                isSubmitting = false

                if ($page.url.searchParams.has('redirect')) {
                    goto('/')
                }
            }, 500)
        }
    }}
>
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
