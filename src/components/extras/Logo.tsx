import React from 'react'
import Image from 'next/image'

function Logo() {
    // Color of loading bar: #ff0080
    const PortfoliOSGif = '/files/artwork/portfoliOS/portfoliOS_logo.gif'

    return (
        <div>
            <Image
                src={PortfoliOSGif}
                alt='PortfoliOS'
                width={500}
                height={250}
            />
        </div>
    )
}

export default Logo