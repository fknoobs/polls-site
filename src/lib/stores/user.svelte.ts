export let fingerprint = $state<{ value: string | null }>({ value: null })
export let session = $state<{ value: Session | null }>({ value: null })
export let steamAuthUrl = $state<{ value: string | null }>({ value: null })

export const canEdit = (userId?: string) =>
    session.value?.userId === userId ||
    session.value?.user.role === 'ADMIN' || 
    session.value?.user.role === 'MODERATOR'