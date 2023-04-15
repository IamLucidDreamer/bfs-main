import React from 'react'
import appLogo from "../../public/bfs_main_logo.png"

const AppLogo = ({ width = appLogo.width, height = appLogo.height, className }) => {
    return (
        <img
            src={appLogo.src}
            className={className}
            style={{ width: width, height: height }}
        />
    )
}

export default AppLogo