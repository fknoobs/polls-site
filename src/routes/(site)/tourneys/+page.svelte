<script lang="ts">
    import Box from "$lib/components/Box.svelte";
    import TourneyCard from "$lib/components/cards/TourneyCard.svelte";
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
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        {#each data.upcomming as tourney}
            <TourneyCard tournament={tourney} />
        {/each}
    </div>
</Box>