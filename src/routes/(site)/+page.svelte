<script>
    import Box from "$lib/components/Box.svelte";
    import Button from "$lib/components/Button.svelte";
    import { classNames } from "$lib/utils";
    import Twitch from "lucide-svelte/icons/twitch";
    import MoveRight from "lucide-svelte/icons/move-right";
</script>
<Box title="FkNoobsCoH">
    <section>
        <div class="mb-8">
            <a href="/tourneys" class="py-2 px-4 inline-block font-bold transition-colors bg-primary-200 hover:bg-primary-100">
                <span class="flex items-center gap-2">
                    Tournaments
                    <MoveRight />
                </span>
            </a>
        </div>
        <div class="flex items-center gap-3">
            <Twitch /> 
            <a href="https://twitch.ts/fknoobscoh" target="_blank" class="text-primary-700">https://twitch.ts/fknoobscoh</a>
        </div>
    </section>
</Box>