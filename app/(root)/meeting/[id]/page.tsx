import React from 'react'

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      Meeting Id : #{params.id}
    </div>
  )
}

export default page
