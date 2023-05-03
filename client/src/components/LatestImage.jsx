import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App'

const LatestImage = () => {
    const {latestPost, setLatestPost} = useContext(AppContext)
    useEffect(() => {
        fetch('http://localhost:3000/latest')
        .then(r => r.json())
        .then(data => {
            setLatestPost(data.image_url)
        })
        .catch((error)=>console.error(error) )
    }, [latestPost])
    
  return (
    <div>
        <img src={latestPost} alt="latest post" className='post'/>
    </div>
  )
}

export default LatestImage