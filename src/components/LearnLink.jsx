import React from 'react'
import Link from 'next/link'
const LearnLink = () => {
  return (
    <div>
        <Link href="/admin/dashboard">Go to Admin Dashboard</Link><br />
        <Link href="/admin/profile">Go to Admin Profile</Link>
    </div>
  )
}

export default LearnLink