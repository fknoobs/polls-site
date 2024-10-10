<script lang="ts">
    import type { ZodIssue } from 'zod'
    import type { Prisma } from '@prisma/client'
    import Button from '../Button.svelte'
    import Form from './Form.svelte';
    import Player from './Player.svelte';
    import type { ActionResult } from '@sveltejs/kit';
    import Alert from '../Alert.svelte';

    type Props = {
        profile?: Partial<Prisma.SteamProfileCreateInput> | null
    }

    let {
        profile = $bindable()
    }: Props = $props()
    
    let isSubmitting = $state(false)
    let isDisabled = $state(false)
    let inputErrors = $state<Record<string, ZodIssue>>()
    let result = $state<ActionResult<Record<string, unknown> | undefined>>()
</script>
{#if result?.type === 'redirect' || result?.type === 'success'}
    <Alert variant="success" classNames="mb-4">Steam profile linked, click <a href="/" class="font-bold border-b border-black">here</a> to go to the home page.</Alert>
{:else}
    <Form
        bind:inputErrors
        bind:result
    >
        <div class="mb-4">
            <Player bind:fetchingProfile={isDisabled} />
        </div>
        <div class="flex justify-end">
            <Button 
                variant="tetriary" 
                loading={isSubmitting} 
                disabled={isDisabled}>{profile ? 'Update' : 'Submit'}</Button>
        </div>
    </Form>
{/if}