<script lang="ts">
    import ProfileSection from "$lib/components/header/ProfileSection.svelte";
    import { session } from "$lib/stores/user.svelte";

    const { children } = $props()
</script>
<div class="pb-12 flex flex-col min-h-screen bg-stone-800">
    <div class="container">
        <div class="p-4 flex items-center mb-16">
            <div>
                <a href="/" title="FkNoobs">
                    <img src="/logo.png" title="FkNoobs" alt="FkNoobs" width="55" />
                </a>
            </div>
            <div class="ms-auto flex items-center gap-5">
                <ProfileSection session={session.value} />
            </div>
        </div>
    </div>
    <main class="flex-grow">
        {@render children()}
    </main>
</div>