import { useEffect, useState } from "react"
import Gen from "wasgen"
import { useCTX } from "../context"

export default () => {

    const { get, set } = useCTX()

    const {
        play,
        volume,
        mute
    } = get

    const {
        tone,
        freq,
        vel,
        sec
    } = get.sample()

    const [init, setInit] = useState(false)
    const [SFX, setSFX] = useState(null)

    useEffect(() => {

        if (init) {
            const vol = vel * volume()
            const t = SFX.now() + 0.1
            mute() || SFX.play(tone, freq, vol, t, t + sec)
        }
        else {
            const ctx = new AudioContext
            const SFX = new Gen(ctx)
            setSFX(SFX)
            setInit(true)
        }

    }, [play()])

    return null

}