<script lang="ts" generics="T extends Record<string, any>">
    import type { Snippet } from "svelte";
    import { enhance } from "$app/forms";
    import type { ActionResult } from "@sveltejs/kit";
    import { goto } from "$app/navigation";
    import Alert from "../Alert.svelte";

    type Props = {
        children: Snippet,
        isSubmitting?: boolean
        inputErrors?: ValidationErrors<T>
        errorMessage?: string
        successMessage?: string,
        result?: ActionResult
    }

    let {
        children,
        errorMessage = $bindable(),
        inputErrors = $bindable(),
        isSubmitting = $bindable(),
        successMessage = $bindable(),
        result = $bindable()
    }: Props = $props()
</script>
{#if errorMessage}
    <Alert variant="danger" classNames="mb-8">{errorMessage}</Alert>
{/if}
{#if successMessage}
    <Alert variant="success" classNames="mb-8">{successMessage}</Alert>
{/if}
<form 
    method="post"
    use:enhance={() => {
        errorMessage = undefined
        isSubmitting = true

        return async (action) => {
            isSubmitting = false
            errorMessage = undefined
            successMessage = undefined
            result = action.result

            if (action.result.type === "failure") {
                inputErrors = action.result.data as ValidationErrors<T>

                if (action.result.data?.statusText) {
                    errorMessage = action.result.data.statusText as string
                }
            }

            if (action.result.type === 'redirect') {
                // @ts-ignore
                setTimeout(() => goto(action.result.location), 1000)
            }
        }
    }}
>
    {@render children()}
</form>