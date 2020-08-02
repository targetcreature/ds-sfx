import { __setStore, __use } from "../context"
import { SFX } from "../_types"

const useSFX = () => {

    const isMute = __use("sound")("mute")
    const set = __setStore()

    const handlePlay = (s: SFX) => {
        set.sound.sample(s)
        set.sound.play(p => !p)
    }
    const setVolume = (cb: (d: number) => number) =>
        set.sound.volume((draft) => {
            draft = cb(draft)
            return draft
        })

    const setMute = (cb: (d: boolean) => boolean) =>
        set.sound.mute((draft) => {
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