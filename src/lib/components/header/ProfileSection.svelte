<script lang='ts'>
    import type { Session } from '@auth/sveltekit'
    import { signOut } from '@auth/sveltekit/client'
    import LogOutIcon from 'lucide-svelte/icons/log-out'
    import Modal from '$lib/components/Modal.svelte'
    import SignInWithTwitch from '$lib/components/SignInWithTwitch.svelte'
    import Dropdown from '$lib/components/Dropdown.svelte';
    import { classNames } from '$lib/utils';
    import SignInWithSteam from '../SignInWithSteam.svelte';
    import { onMount } from 'svelte';

    type Props = {
        session?: Session | null
    }

    let modal = $state<Modal>()
    let dropdown = $state<Dropdown>()
    let reference = $state<HTMLElement>()
    let { session }: Props = $props()
</script>

{#if !session}
    <span class='text-white'>Not logged in</span>
    <button onclick={() => modal?.openModal()} class='block w-10 h-10 bg-stone-300 rounded-full ring-2 ring-offset-2 ring-offset-[#444345] ring-red-200'></button>
    <Modal title='Login' bind:this={modal}>
        <div class='flex flex-col gap-2'>
            <SignInWithSteam />
            <SignInWithTwitch />
        </div>
    </Modal>
{:else}
    <span class="text-white">{session.user?.name}</span>
    <button onclick={() => dropdown?.togglePopup()}>
        <img 
            bind:this={reference}
            src={session.user?.image} alt={session.user?.name} 
            class="w-10 rounded-full ring-2 ring-offset-2 ring-offset-[#444345] ring-green-200"
        />
    </button>
    <Dropdown bind:this={dropdown} {reference} placement="bottom-end">
        <button 
            onclick={() => signOut()} 
            class={classNames(
                'py-2 px-4 transition-colors',
                'flex gap-2',
                'hover:bg-stone-200'
            )}
        >
            <LogOutIcon />
            Sign out
        </button>
    </Dropdown>
{/if}