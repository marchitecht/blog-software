import React, { useEffect, useState } from 'react'

const useWindowSize = () => {
  const [size, setSize] = useState({
    width: 0,
  })
  useEffect(() => {
    setSize({
      width: window.innerWidth,
    })
    window.addEventListener('resize', () => {
      setSize({
        width: window.innerWidth,
      })
    })
    return () => {
      window.removeEventListener('resize', () => {})
    }
  }, [])
  return size
}

export default useWindowSize
