import React from 'react'

export default ({
  children,
}: {
  children: React.ReactNode
}) => (
  <div
    className={`
    mx-auto
    px-5
    sm:px-10
    max-w-screen-md
    flex
    items-center
    flex-col
  `}
  >
    {children}
  </div>
)
