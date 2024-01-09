import { useSearchParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import FormSection from "./FormSection";

const  Layout = () => {
    const [ searchParams, setSearchParams ] = useSearchParams()
    
    useEffect(() => {
        setSearchParams({tab: 1})
    }, [])

    return <>
        <Sidebar />
        <FormSection />
    </>
}

export default Layout;