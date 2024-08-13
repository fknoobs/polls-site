<script lang="ts">
    import Box from "$lib/components/Box.svelte";
    import Button from "$lib/components/Button.svelte";
    import Link from "$lib/components/Link.svelte";
    import TeamCard from "$lib/components/cards/TeamCard.svelte";
    import Tab from "$lib/components/tabs/Tab.svelte";
    import Tabs from "$lib/components/tabs/Tabs.svelte";
    import { canEdit } from "$lib/stores/user.svelte.js";
    import { classNames } from "$lib/utils.js";
    import LogIn from "lucide-svelte/icons/log-in";
    import MoveLeft from "lucide-svelte/icons/move-left";
    import markdown from "markdown-it";	
    
    const { data } = $props()
</script>
<Box title={data.tourney.name} size="lg">
    {#snippet beforeTitle()}
        <div class="mb-8">
            <Link before={MoveLeft} href={`/tourneys`} variant="black">Go back</Link>
        </div>
        {#if canEdit(data.tourney.userId)}
            <div class="mb-4">
                <Button variant="light" size="sm" href={`/tourneys/${data.tourney.slug}/edit`}>Edit</Button>
            </div>
        {/if}
    {/snippet}
    {#snippet afterTitle()}
        {#if data.tourney.registrationsOpen}
            <Link before={LogIn} href={`/tourneys/${data.tourney.slug}/apply`}>Enter tournament</Link>
        {/if}
    {/snippet}
    <Tabs>
        <Tab id="details" title="Details">
            {#if data.tourney.description}
                <div
                    class={classNames(
                        'px-4 prose',
                        'prose-h1:text-3xl',
                        'prose-h2:text-2xl',
                        'prose-h3:text-xl prose-h3:mb-1',
                        'prose-h2:mb-2 prose-h2:mt-8',
                        'prose-ul:my-0 prose-li:mt-0 prose-li:mb-0',
                        'mt-4'
                    )}
                >{@html markdown().render(data.tourney.description)}</div>
            {/if}
        </Tab>
        <Tab id="teams" title="Teams">
            <div class="py-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {#each data.tourney.teams as team}
                        <TeamCard {...team} />
                    {/each}
                </div>
            </div>
        </Tab>
    </Tabs>
</Box>