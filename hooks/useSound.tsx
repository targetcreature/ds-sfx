import { setStore, useStore } from "../context"
import { SFX } from "../_types"

export const _useSound = () => {

    const set = setStore()
    const props = useStore("sound")

    const handlePlay = (s: SFX) => {
        set.sound((draft) => {
            draft.sample = s
            draft.play = !draft.play
        })
    }
    const setVolume = (cb: (d: number) => number) => set.sound((draft) => {
        draft.volume = cb(draft.volume)
    })
    const setMute = (cb: (d: boolean) => boolean) => set.sound((draft) => {
        draft.mute = cb(draft.mute)
    })

    return {
        ...props,
        playSound: (p: SFX) => handlePlay(p),
        setVolume,
        setMute,
    }
}
