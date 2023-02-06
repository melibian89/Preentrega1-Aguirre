import { collection, getDocs, query } from "firebase/firestore"
import { db } from "../firebase/config"
import { useEffect, useState } from "react"


const useCollection = (col, dependencies = [], querys = null) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    // const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const collectionRef = collection(db, col)
        const q = querys
                    ? query(collectionRef, ...querys )
                    : collectionRef
        getDocs(q)
            .then((resp) => {

                setData( resp.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                }))
            })
            .finally(() => {
                setLoading(false)
            })

    }, dependencies)


}

export default useCollection