import { type } from "os"
import { ReactNode } from "react"
import Header from  './header'
type Props={
    children:ReactNode
}

const Layout=({children}:Props)=>{
    return(
        <>
            <Header/>
            {children}
            <footer></footer>
        </>
    )
}
export default Layout