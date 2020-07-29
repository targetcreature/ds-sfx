import { __set } from "../context"
import { SFX } from "../_types"

export default () => {


    const handlePlay = (s: SFX) => {
        __set("sound")((draft) => {
            draft.sample = s
            draft.play = !draft.play
        })
    }
    const setVolume = (cb: (d: number) => number) => __set("sound")((draft) => {
        draft.volume = cb(draft.volume)
    })
    const setMute = (cb: (d: boolean) => boolean) => __set("sound")((draft) => {
        draft.mute = cb(draft.mute)
    })

    return {
        playSound: (p: SFX) => handlePlay(p),
        setVolume,
        setMute,
    }
}
