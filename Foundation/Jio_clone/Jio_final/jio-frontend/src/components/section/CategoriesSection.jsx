import React from 'react'
import { Skeleton } from '../atom/Skeleton'

function CategoriesSection({title,id}) {
  return (
      <div className="py-8 px-6">
          <h2 id={id} className="text-2xl font-medium mb-6 scroll-m-[100px]">
              {title}
          </h2>
          <ul className="flex gap-4 w-full overflow-scroll scrollbar-hide ">
              {new Array(12).fill(0).map((e, index) => (
                  <Skeleton key={index} className="min-w-[200px] h-[300px] " />
              ))}
          </ul>


      </div>
  )
}

export default CategoriesSection