"use client"
import { useRouter } from 'next/navigation'
import React from 'react'


const LearnUseRouter = () => {
    const router = useRouter();

  return (
    <div>
        <h1>Learn Use Router</h1>
        <button type='button' onClick={()=>router.push("/admin/dashboard")}>Goto Admin Dashboard</button>
    </div>
  )
}

export default LearnUseRouter