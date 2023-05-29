import { useEffect, useState } from 'react'

const UseParts = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [parts, setParts] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://manufacturer-server-side.onrender.com/carParts/')
      .then((res) => res.json())
      .then((data) => {
        setParts(data)
        setIsLoading(false)
      })
  }, [])
  return [parts, isLoading, setParts]
}

export default UseParts
