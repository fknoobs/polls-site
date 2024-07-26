<script>
    import { classNames } from "$lib/utils";
    import { Twitch } from "lucide-svelte";
</script>
<div class="flex h-screen w-screen justify-center items-center">
    <div
        class={classNames(
            'bg-white w-[500px] p-8',
            'shadow-drop'
        )}
    >
        <header class="mb-8">
            <h1 class="text-3xl font-bold mb-6">FkNoobsCoH</h1>
            <p>Welcome, there is not much to see here. Maybe in the future this will change :)</p>
        </header>
        <section>
            <div class="flex items-center gap-3">
                <Twitch /> 
                <a href="https://twitch.ts/fknoobscoh" target="_blank" class="text-primary-700">https://twitch.ts/fknoobscoh</a>
            </div>
        </section>
    </div>
</div>