import { DSCTX } from "ds-ctx"
import dynamic from "next/dynamic"
import { initSound } from "./_init"

const Sound = dynamic(
    () => import("../component"),
    { ssr: false }
)

const [ContextProvider, useCTX] = DSCTX(initSound)

export default ({ children }) =>
    <ContextProvider>
        <Sound />
        {children}
    </ContextProvider>

export { useCTX }
