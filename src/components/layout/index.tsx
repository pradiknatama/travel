import { ReactNode } from "react"
import Header from  './header'
import Footer from './Footer'
type Props={
    children:ReactNode
}

const Layout=({children}:Props)=>{
    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}
export default Layout