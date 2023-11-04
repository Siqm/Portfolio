export const fonts = {
    neutralFace: (color, size) => ({
        fontSize: size,
        color: color,
        fontFamily: 'Neutral',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal'
    }),

    textAlign: (position) => ({
        textAlign: position
    }),

    Mazius: (size) => ({
        color: '#FFF',
        fontFamily: 'Mazius',
        fontSize: size,
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
    }),

    Avenir: (size) => ({
        color: '#FFF',
        fontFamily: 'Avenir',
        fontSize: size,
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
    })
}

export const styles = {
    dimesion: (width, height) => ({
        width: width,
        height: height,
    }),

    displayFlex: (justify, align, direction) => ({
        display: 'flex',
        justifyContent: justify,
        alignItems: align,
        flexDirection: direction
    }),

    icon: (maxWidth, maxHeigt) => ({
        maxWidth: maxWidth,
        maxHeigt: maxHeigt,
    })
}