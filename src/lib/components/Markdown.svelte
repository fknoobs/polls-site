<script lang="ts">
    import markdownit from 'markdown-it'
    import hljs from 'highlight.js'
    import markdown from 'highlight.js/lib/languages/markdown'
    import { classNames } from '$lib/utils';
    import type { HTMLTextareaAttributes } from 'svelte/elements';

    type Props = {
        label?: string
        name: string
        value?: string
        showPreview?: boolean
    } & HTMLTextareaAttributes

    let {
        label,
        name,
        value = $bindable(``),
        showPreview = $bindable(false),
        ...rest
    }: Props = $props()
    let highlightedCode = $state('')
    let preview = $state('')

    hljs.registerLanguage('markdown', markdown)
        
    $effect(() => {
        let text = value
        
        if (text[text.length - 1] === '\n') {
            text += ' '
        }
        
        text
            .replace(/&/g, '&amp')
            .replace(/</g, '&lt')
            
        highlightedCode = hljs.highlight(text, { language: 'markdown' }).value
        preview = markdownit().render(text)
    })
</script>
<div class="flex items-center mb-4">
    <label for={name} class="inline-block font-medium">{label}</label>
    <button type="button" class="ms-auto bg-stone-100 px-4 py-2" onclick={() => showPreview = !showPreview}>{showPreview ? 'Hide preview' : 'Show preview'}</button>
</div>
<div class:hidden={showPreview} class="relative block w-full min-h-[250px] [&_.hljs-section]:font-bold [&_.hljs-section]:text-primary-900 not-prose">
    <pre 
        class={classNames(
            'm-0 p-4 block w-full min-h-[250px]',
            'border border-dashed border-black',
            'font-mono whitespace-pre-wrap',
            'pointer-events-none'
        )}
        spellcheck="false"
        autocapitalize="false"
    ><code spellcheck="false" autocapitalize="false">{@html highlightedCode}</code></pre>
    <textarea
        bind:value
        class={classNames(
            'p-4 absolute top-0 left-0 w-full h-full',
            'bg-transparent text-transparent', 
            'caret-black font-mono outline-none'
        )}
        spellcheck="false"
        autocomplete="false"
        autocapitalize="false"
        id={name}
        {name}
        {...rest}
    ></textarea>
</div>
<div
    class={classNames(
        'transition-all',
        'prose',
        'prose-h1:text-3xl',
        'prose-h2:text-2xl',
        'prose-h3:text-xl prose-h3:mb-1',
        'prose-h2:mb-4 prose-h2:mt-6',
        'prose-ul:my-0 prose-li:mt-0 prose-li:mb-0',
        'mt-4'
    )}
    class:block={showPreview}
    class:hidden={!showPreview}
>{@html preview}</div>