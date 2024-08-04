<script lang="ts">
    import { classNames } from '$lib/utils'
    import type { Prisma } from '@prisma/client'
    import dayjs from 'dayjs'
    import UsersIcon from 'lucide-svelte/icons/users'
    import CalenderIcon from 'lucide-svelte/icons/calendar'
    import { canEdit } from '$lib/stores/user.svelte';

    type Props = {
        tournament: Prisma.TourneysGetPayload<{ include: { teams: true, createdBy: true } }>
    }

    let { tournament }: Props = $props()

    const getType = (type: number) => {
        if (type === 1) return '1v1'
        if (type === 2) return '2v2'
        if (type === 3) return '3v3'
        if (type === 4) return '4v4'

        return '1v1'
    }
</script>
<div
    class={classNames(
        'p-4 transition-colors',
        'bg-gray-200',
        'bg-border-dashed'
    )}
    
>
    <h4 class="flex items-center text-lg font-bold mb-2">
        <a href={`/tourneys/${tournament.slug}`} class="border-b hover:border-black">{tournament.name}</a>
        {#if canEdit(tournament.userId)}
            <a
                role="button"
                href={`/tourneys/${tournament.slug}/edit`}
                class={classNames(
                    'py-1 px-2',
                    'ms-auto block transition-colors',
                    'text-sm font-normal',
                    'hover:bg-gray-300'
                )}
            >Edit</a>
        {/if}
    </h4>
    <div class="flex items-center gap-4 text-slate-500">
        <div class="flex items-center gap-2">
            {#if tournament.registrationsOpen}
                <span class="p-1 px-2 text-xs bg-green-200">open</span>
            {:else}
                <span class="p-1 px-2 text-xs bg-red-200">closed</span>
            {/if}
        </div>
        <div class="flex items-center gap-2">
            <UsersIcon size="18" />
            {getType(tournament.type)}
        </div>
        <div class="flex items-center gap-2">
            <CalenderIcon size="18" />
            {dayjs(tournament.startDate).format('DD MMM YYYY')} 
        </div>
    </div>
</div>