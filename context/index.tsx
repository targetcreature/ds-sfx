import { useDSC } from "ds-ctx"
import dynamic from "next/dynamic"
import { initSound } from "../init"

const Sound = dynamic(
    () => import("../component"),
    { ssr: false }
)

const [ContextProvider, useStore, setStore] = useDSC(initSound)

export const _provider: React.FC = ({ children }) =>
    <ContextProvider>
        <Sound />
        {children}
    </ContextProvider>

export { useStore, setStore }

