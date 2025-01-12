import Link from 'next/link';
import React from 'react'

function JumperSection({ list }) {
    return (
        <div className="p-6 flex gap-4 mt-[64px] " >
            {
                list.map((item) => (<Link
                    key={item.href}
                    className="px-3 py-2 rounded-full bg-white/15 text-sm over-scroll  scrollbar-hide"
                    href={`#${item.href}`}
                >
                    {item.label}
                </Link>
                ))
            }
        </div>
    )
}

export default JumperSection;