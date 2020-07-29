import { useDSC } from "ds-ctx"
import dynamic from "next/dynamic"
import { initSound } from "./init"

const Sound = dynamic(
    () => import("./component"),
    { ssr: false }
)

const [ContextProvider, useSFX, setSFX] = useDSC(initSound)

const SFXProvider: React.FC = ({ children }) =>
    <ContextProvider>
        <Sound />
        {children}
    </ContextProvider>

export { SFXProvider, useSFX, setSFX }
