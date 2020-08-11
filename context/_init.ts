import { Init } from "../_types"

export const initSound: Init = {
    sample: {
        __preserveCTX: true,
        tone: [{
            type: "sine",
            gain: {
                a: 0,
                d: 0,
                r: 0,
                s: 0,
            },
            freq: {
                p: 0,
                q: 0
            }
        }],
        freq: 0,
        sec: 0,
        vel: 0
    },
    play: false,
    mute: false,
    volume: 1,
}