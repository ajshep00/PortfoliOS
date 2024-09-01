import React from 'react'
import Image from 'next/image'

function LoadingBar() {
    // Color of loading bar: #ff0080
    const LoadingGif = '/files/artwork/loading_bar/loading_bar_extended.gif'

    return (
        <div>
            <Image
                src={LoadingGif}
                alt='Loading Bar'
                width={500}
                height={250}
            />
        </div>
    )
}

export default LoadingBar