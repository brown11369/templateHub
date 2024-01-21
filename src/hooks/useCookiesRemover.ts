import { COOKIES_REMOVER_URL } from "../utils/constant";


const useCookiesRemover = () => {

    const handleCookieRemover=async()=>{
        try {
            const res = await fetch(COOKIES_REMOVER_URL,{credentials:"include"});

            if (res.ok) {
                await res.json();
                localStorage.clear();
            } 
        } catch (error) {
            console.error("Error removing cookies", error);
        }
    }
  return {handleCookieRemover}
}

export default useCookiesRemover