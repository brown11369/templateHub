import React, { useEffect } from 'react'
import usePersist from "../../hooks/usePersist"
import useRefresh from "../../hooks/useRefresh"
import { useSelector } from "react-redux"
import { RootState } from "../../store/rootReducer"


interface PersistLoginProps {
    children: React.ReactNode;
}

const PersistLogin: React.FC<PersistLoginProps> = ({ children }) => {

    const [persist] = usePersist()
    console.log(persist)

    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated
    );

    // const [trueSuccess, setTrueSuccess] = useState(false)

    const { handleRefresh } = useRefresh()



    useEffect(() => {


        const verifyRefreshToken = async () => {
            console.log('verifying refresh token')
            try {

                await handleRefresh()
                //const { accessToken } = response.data
                // setTrueSuccess(true)
            }
            catch (err) {
                console.error(err)
            }
        }
        console.log(isAuthenticated)

        if (!isAuthenticated && persist) verifyRefreshToken()


    }, [])


    let content = children
    // if (!persist) { // persist: no
    //     console.log('no persist')
    //     content = children
    // } else if (isAuthenticated && trueSuccess) {
    //     console.log(isAuthenticated, trueSuccess)
    //     content = children
    // } else if (isAuthenticated) {
    //     console.log(isAuthenticated, trueSuccess, persist, "persisted")
    //     content = children
    // }

    return content
}
export default PersistLogin