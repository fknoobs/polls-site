<script lang="ts">
    import type { ZodIssue } from "zod";
    import { enhance } from "$app/forms";
    import Input from "../Input.svelte";
    import Checkbox from "../Checkbox.svelte";
    import Radio from "../Radio.svelte";
    import Tabs from "../tabs/Tabs.svelte";
    import Tab from "../tabs/Tab.svelte";
    import Markdown from "../Markdown.svelte";
    import Button from "../Button.svelte";
    import type { Tourneys } from "@prisma/client";
    import Alert from "../Alert.svelte";
    import dayjs from "dayjs";

    type Props = {
        tournament?: Partial<Tourneys>
    }

    let {
        tournament = $bindable({ type: 1 })
    }: Props = $props()

    let isSubmitting = $state(false)
    let inputErrors = $state<Record<string, ZodIssue>>()
    let errorMessage = $state<string | null>(null)
    let successMessage = $state<string | null>(null)
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
        return async ({ result }) => {
            isSubmitting = true
            errorMessage = null
            successMessage = null

            if (result.type === "failure") {
                // @ts-ignore
                inputErrors = result.data

                if (result.data?.statusText) {
                    errorMessage = result.data.statusText as string
                }
            }

            if (result.type === 'success') {
                setTimeout(() => {
                    isSubmitting = false

                    successMessage = 'Tournament details have been updated'
                }, 500)
            }
        }
    }}
>
    <div class="mb-4">
        <Input
            name="name"
            label="Name"
            placeholder="Name of the tournament"
            error={inputErrors?.name}
            value={tournament?.name}
        />
    </div>
    <div class="mb-4 grid grid-cols-2 gap-4">
        <div>
            <Input
                type="date"
                name="startDate"
                label="Start date"
                error={inputErrors?.startDate}
                value={tournament?.startDate && dayjs(tournament.startDate).format('YYYY-MM-DD')}
            />
        </div>
        <div>
            <Input
                type="date"
                name="endDate"
                label="End date"
                error={inputErrors?.endDate}
                value={tournament?.endDate && dayjs(tournament.endDate).format('YYYY-MM-DD')}
            />
        </div>
    </div>
    <div class="mb-8">
        <Checkbox 
            name="registrationsOpen" 
            label="Open registrations"
            error={inputErrors?.registrationsOpen}
            checked={tournament?.registrationsOpen}
        />
    </div>
    <div class="mb-4">
        <label for="type" class="inline-block font-medium mb-2"
            >Select type</label
        >
        <div class="grid grid-cols-4 gap-4">
            <Radio
                name="type"
                label="1v1"
                value={1}
                bind:group={tournament.type}
            />
            <Radio
                name="type"
                label="2v2"
                value={2}
                bind:group={tournament.type}
            />
            <Radio
                name="type"
                label="3v3"
                value={3}
                bind:group={tournament.type}
            />
            <Radio
                name="type"
                label="4v4"
                value={4}
                bind:group={tournament.type}
            />
        </div>
    </div>
    <div class="mb-4 mt-10">
        <Tabs>
            <Tab id="description" title="Description">
                <div class="mt-6">
                    <Markdown
                        name="description"
                        label="Description (Supports markdown)"
                        value={tournament?.description ?? ''}
                    />
                </div>
            </Tab>
            <Tab id="rules" title="Rules">
                <div class="mt-6">
                    <Markdown
                        name="rules"
                        label="Rules (Supports markdown)"
                        value={tournament?.rules ?? ''}
                    />
                </div>
            </Tab>
        </Tabs>
    </div>
    <div class="flex justify-end">
        <Button variant="tetriary" loading={isSubmitting}>{tournament ? 'Update' : 'Create'}</Button>
    </div>
</form>
