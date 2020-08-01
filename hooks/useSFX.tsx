import { __setStore, __use } from "../context"
import { SFX } from "../_types"

const useSFX = () => {

    const { mute } = __use("sound")
    const set = __setStore()

    const handlePlay = (s: SFX) => {
        set.sound((draft) => {
            draft.sample = s
            draft.play = !draft.play
            return draft
        })
    }
    const setVolume = (cb: (d: number) => number) => set.sound((draft) => {
        draft.volume = cb(draft.volume)
        return draft
    })
    const setMute = (cb: (d: boolean) => boolean) => set.sound((draft) => {
        draft.mute = cb(draft.mute)
        return draft
    })

    return {
        isMute: mute,
        playSound: (p: SFX) => handlePlay(p),
        setVolume,
        setMute,
    }
}

export default useSFX