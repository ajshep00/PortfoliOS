import React from 'react'
import Head from 'next/head';
import Script from 'next/script'

export default function Meta() {
    const faviconGif = '/files/artwork/favicon_frames/os_favicon.gif'
    return (
        <>
            <title>PortfoliOS | Alex Shepherd Portfolio</title>
            <meta charSet="utf-8" />
            <meta name="title" content="Alex Shepherd - Desktop Portfolio" />
            {/* <link rel="icon" href={faviconGif} type="image/gif" ></link> */}
            <link id="dynamic-favicon" rel="icon" href="/files/artwork/favicon_frames/frame_00.png" />
            <Script src="/files/favicon.js" />
            {/* <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" /> */}
        </>
    )
}