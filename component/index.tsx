import { useEffect, useState } from "react"
import Gen from "wasgen"
import { useSound } from ".."

const _component: React.FC = () => {

    const [init, setInit] = useState(false)
    const [SFX, setSFX] = useState(null)

    const {
        sample: {
            tone,
            freq,
            vel,
            sec
        },
        play,
        mute,
        volume
    } = useSound()


    useEffect(() => {

        if (init) {
            const vol = vel * volume
            const t = SFX.now() + 0.1
            mute || SFX.play(tone, freq, vol, t, t + sec)
        }
        else {
            const ctx = new AudioContext
            const SFX = new Gen(ctx)
            setSFX(SFX)
            setInit(true)
        }

    }, [play])

    return null

}

export default _component