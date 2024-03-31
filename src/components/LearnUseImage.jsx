import React from 'react'
import Image from 'next/image'
import MyImage from '../../public/logopd.PNG'
const LearnUseImage = () => {
  return (
    <div>
        <h1>Learn Use Image</h1>
        <Image src={MyImage} width={200} alt='"MyImage' height={300}/>
    </div>
  )
}

export default LearnUseImage