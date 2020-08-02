import { useEffect, useState } from "react"
import Gen from "wasgen"
import { __use } from "../context"

export default () => {


    const play = __use("sound")("play")
    const volume = __use("sound")("volume")
    const mute = __use("sound")("mute")

    const {
        tone,
        freq,
        vel,
        sec
    } = __use("sound")("sample")

    const [init, setInit] = useState(false)
    const [SFX, setSFX] = useState(null)

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