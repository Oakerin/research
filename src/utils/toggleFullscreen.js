export function requestFullscreen() {
    if (!document.fullscreenElement) {
        if (document.documentElement) {
            document.documentElement.requestFullscreen();
        }
    }
}

export function exitFullscreen() {
    if (document.fullscreenElement) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
