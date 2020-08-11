import { useCTX } from "../context"
import { SFX } from "../_types"

const useSFX = () => {

    const { get, set } = useCTX()

    const isMute = get.mute()

    const handlePlay = (s: SFX) => {
        set.sample(s)
        set.play(p => !p)
    }
    const setVolume = (cb: (d: number) => number) =>
        set.volume((draft) => {
            draft = cb(draft)
            return draft
        })

    const setMute = (cb: (d: boolean) => boolean) =>
        set.mute((draft) => {
            draft = cb(draft)
            return draft
        })

    return {
        isMute,
        playSound: (p: SFX) => handlePlay(p),
        setVolume,
        setMute,
    }
}

export default useSFX