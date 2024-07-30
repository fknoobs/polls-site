<script lang="ts">
    import { onMount } from 'svelte';

    let canPlay = $state(true)
    let data = $state<string[]>([])

    const requestNextInQueue = async () => {
        try {
            const request = await fetch('/api/tts/queue/next')
            data.push(request.statusText)

            if (!request.ok) {
                return null
            }

            if (request.status === 204) {
                return null
            }

            return request.blob()
        } catch(_) {
            return null
        }
    }

    onMount( async () => {
        const audio = new Audio

        audio.addEventListener('loadeddata',  () => {
            canPlay = true
        })

        audio.addEventListener('ended', () => {
            canPlay = true
        })

        audio.addEventListener('playing', () => {
            canPlay = false
        })

        setInterval( async () => {
            if (!canPlay) {
                return
            }

            const next = await requestNextInQueue()

            if (!next) {
                return
            }

            audio.setAttribute('src', URL.createObjectURL(next))
            audio.play()
        }, 100)
    })
</script>