<script lang="ts">
    import { classNames } from '$lib/utils'
    import type { Prisma } from '@prisma/client'
    import dayjs from 'dayjs'
    import MoveRight from 'lucide-svelte/icons/move-right'

    type Props = {
        tournament: Prisma.TourneysGetPayload<{ include: { teams: true, createdBy: true } }>
    }

    let { tournament }: Props = $props()

    const getType = (type: number) => {
        if (1) return '1v1'
        if (2) return '2v2'
        if (3) return '3v3'
        if (4) return '4v4'

        return '1v1'
    }
</script>
<a 
    class={classNames(
        'p-4 transition-colors',
        'bg-gray-200',
        'bg-border-dashed',
        'hover:bg-primary-100'
    )}
    href={`/tourneys/${tournament.slug}`}
>
    <h4 class="text-lg font-bold mb-2">{tournament.name}</h4>
    <span class="flex items-center gap-3">
        {dayjs(tournament.startDate).format('DD MMMM')} 
        {#if tournament.endDate}
            <MoveRight strokeWidth="1" /> 
            {dayjs(tournament.endDate).format('DD MMMM')}
        {/if}
    </span>
    <div class="mt-6 flex flex-col gap-1">
        <div class="flex">
            <span class="w-1/2">Type</span>
            <span>{getType(tournament.type)}</span>
        </div>
        <div class="flex">
            <span class="w-1/2">Organized by</span>
            <span>{tournament.createdBy?.name}</span>
        </div>
        <div class="flex items-center">
            <span class="w-1/2">Registrations</span>
            {#if tournament.registrationsOpen}
                <span class="p-1 px-3 text-xs bg-green-300 shadow-[3px_3px_0] shadow-green-200">open</span>
            {:else}
                <span class="p-1 px-3 text-xs bg-red-300 shadow-[3px_3px_0] shadow-red-200">closed</span>
            {/if}
        </div>
    </div>
</a>