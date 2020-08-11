import { SFX, Sound } from "../_types"

export default (obj: Sound): SFX => {

    const types: { [key in Sound["shape"]]: SFX["tone"][0]["type"] } = {
        harmonic: "w9999",
        metal: "n1",
        noise: "n0",
        saw: "saw",
        sine: "sine",
        square: "square",
        triangle: "triangle"
    }

    const {
        shape, pitch, env, volume, duration, bend = [0, 0]
    } = obj

    return {
        __preserveCTX: true,
        tone: [{
            type: types[shape],
            gain: {
                a: env.attack,
                d: env.decay,
                s: env.sustain,
                r: env.release,
            },
            freq: {
                p: bend[0],
                q: bend[1]
            }
        }],
        freq: pitch,
        vel: volume,
        sec: duration
    }
}