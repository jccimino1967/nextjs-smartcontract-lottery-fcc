import { useMoralis } from "react-moralis"
import { useEffect } from "react"

export default function ManualHeader() {

    const { enableWeb3, account, isWeb3Enabled, Moralis, deactivateWeb3, isWeb3EnableLoading } = useMoralis()

    useEffect(() => {
        if (isWeb3Enabled) return 
        if (typeof window !== "undefined" ) {
            if (window.localStorage.getItem("connected"))
                enableWeb3()
        }
        enableWeb3()
        console.log("Hola otra vez")
        console.log(isWeb3Enabled)
    },[isWeb3Enabled])
    
    useEffect(() => {
        Moralis.onAccountChanged((account) => {
            console.log(`Cuenta cambiada a ${account}`)
            if (account == null) {
                window.localStorage.removeItem("connected")
                deactivateWeb3()
                console.log("Cuenta null encontrada")

            }
        })
    }, [])

    return (<div>
        {account ? (
            <div>
                Conectado a {account.slice(0, 6)}...{account.slice(account.length - 4)}
            </div>
        ) : (
            <button
                onClick={async () => {
                    await enableWeb3()
                    if (typeof window !== "undefined") {
                        window.localStorage.setItem("connected", "injected")
                    }
                    }}
                disabled={isWeb3EnableLoading}    
            >
                Conectar</button>)}
    
    
    </div>)
}