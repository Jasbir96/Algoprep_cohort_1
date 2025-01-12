import React, { Suspense } from 'react'
import { Skeleton } from '../atom/Skeleton'


function CategoriesSection({ title, id,fetcher }) {
    return (
        <div className="py-8 px-6">
            <h2 id={id} className="text-2xl font-medium mb-6 scroll-m-[100px]">
                {title}
            </h2>
            <Suspense fallback={<CategoriesFallback/> }>
                <CategoriesContent fetcher={fetcher} />
            </Suspense>


        </div>
    )
}

async function CategoriesContent({fetcher}) {
    const data = await fetcher();
    return <ul className="flex gap-4 w-full overflow-scroll scrollbar-hide">
        {data?.map((item) => {
            return <li className="min-w-[200px] h-[300px] rounded-lg border-2 border-red-500" key={item.id}>{item.title||item.name}</li>
        })}
    </ul>
}

function CategoriesFallback() {
    return (
        <ul className="flex gap-4 w-full overflow-scroll scrollbar-hide ">
            {new Array(12).fill(0).map((e, index) => (
                <Skeleton key={index} className="min-w-[200px] h-[300px] " />
            ))}
        </ul>
    )
}

export default CategoriesSection