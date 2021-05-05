export function requestFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
}

export function exitFullscreen() {
    if (document.fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
