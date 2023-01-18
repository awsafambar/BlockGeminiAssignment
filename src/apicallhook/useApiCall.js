import { useEffect, useState } from "react";

export default function useApiCall(url) {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("for url", url, "data is ", data)
                setData(data)
            })
    }, [url])

    return { data }
}