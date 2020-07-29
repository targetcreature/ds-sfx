import { useDSC } from "ds-ctx"
import dynamic from "next/dynamic"
import { initSound } from "../init"

const Sound = dynamic(
    () => import("../component"),
    { ssr: false }
)

const [ContextProvider, __use, __setStore] = useDSC(initSound)

export default ({ children }) =>
    <ContextProvider>
        <Sound />
        {children}
    </ContextProvider>

export { __use, __setStore }
