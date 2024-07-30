<script lang="ts">
    import Box from "$lib/components/Box.svelte";
    import { classNames } from "$lib/utils";
    import dayjs from 'dayjs'
    import CalendarPlus from "lucide-svelte/icons/calendar-plus";

    const { data } = $props()
</script>
<Box title="Tournaments" size="lg">
    {#snippet afterTitle()}
        <a href="/tourneys/create" class="flex items-center gap-2 font-bold text-primary-800">
            <CalendarPlus />
            Create a new tournament
        </a>
    {/snippet}
    
    {#if data.upcomming.length}
        <h2 class="font-bold text-xl mb-4">Upcomming</h2>
    {/if}
    <div class="flex gap-4">
        {#each data.upcomming as tourney}
            <a 
                href={`/tourneys/${tourney.slug}`}
                class={classNames(
                    'flex flex-col gap-1 w-full sm:w-1/2 p-4 transition-colors',
                    'border border-dashed border-black',
                    'hover:bg-gray-200'
                )}
            >
                <div class="mb-4 flex items-center gap-3">
                    <h6 class="font-bold">{tourney.name}</h6>
                </div>
                <div class="flex">
                    <span class="w-1/2">
                        Date
                    </span>
                    <span class="w-1/2">
                        {dayjs(tourney.startDate).format('YYYY/MM/DD')}
                    </span>
                </div>
                <div class="flex items-center">
                    <span class="w-1/2">
                        Registrations
                    </span>
                    <span class="w-1/2 flex items-center">
                        {#if tourney.registrationsOpen}
                            <span class="inline-block w-4 h-4 bg-green-400 rounded-full" title="Open"></span>
                        {:else}
                            <span class="inline-block w-4 h-4 bg-red-500 rounded-full" title="Open"></span>
                        {/if}
                    </span>
                </div>
            </a>
        {/each}
    </div>
</Box>