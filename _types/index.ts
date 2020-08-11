export type Sound = {
    shape:
    | "sine"
    | "saw"
    | "square"
    | "triangle"
    | "harmonic"
    | "noise"
    | "metal"
    env: {
        attack: number
        decay: number
        sustain: number
        release: number
    }
    pitch: number
    volume: number
    duration: number
    bend?: number[]
}

export type SFX = {
    __preserveCTX: true
    tone: {
        type:
        | "sine"
        | "saw"
        | "square"
        | "triangle"
        | "w9999"
        | "n0"
        | "n1"
        gain: {
            a: number
            d: number
            s: number
            r: number
        }
        freq: {
            p: number
            q: number
        }
    }[],
    freq: number
    vel: number
    sec: number
}

export type Init = {
    sample?: SFX
    play: boolean
    mute: boolean
    volume: number
}