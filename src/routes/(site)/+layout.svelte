<div class="flex flex-col min-h-screen bg-stone-800">
    <div class="container">
        <div class="p-4 flex items-center mb-16">
            <div>
                <a href="/" title="FkNoobs">
                    <img src="/logo.png" title="FkNoobs" alt="FkNoobs" width="55" />
                </a>
            </div>
            <div class="ms-auto flex items-center gap-5">
                <span class="text-white">Not logged in</span>
                <span class="block w-10 h-10 bg-stone-500 rounded-full ring-2 ring-offset-2 ring-offset-[#444345] ring-red-200"></span>
            </div>
        </div>
    </div>
    <main class="flex-grow">
        <slot />
    </main>
</div>