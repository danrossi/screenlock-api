/**
 * FullscreenAPI
 * Fullscreen api helper. Includes IOS iPhone fullscreen css hack as fallback. 
 * @author danrossi / https://github.com/danrossi
 */



const _exitFullScreenApi = document.exitFullscreen 
|| document.webkitCancelFullScreen 
|| document.mozCancelFullScreen 
|| document.msExitFullscreen;


const _fullScreenAvailable = document.fullscreenEnabled || 
                            document.mozFullscreenEnabled ||
                            document.webkitFullscreenEnabled ||
                            document.msFullscreenEnabled;

let _webkitCurrentFullScreenElement;

export default class FullscreenApi {

    /**
     * Has native fullscreen support
     */
    static get fullScreenAvailable() {
        return _fullScreenAvailable;
    }

    /**
     * Get current fullscreen element 
     */
    static get currentFullScreenElement() {
        return document.webkitCurrentFullScreenElement 
        || document.mozFullScreenElement 
        || document.fullscreenElement 
        || document.msFullscreenElement
        || _webkitCurrentFullScreenElement;
    }

    /**
     * IOS request fullscreen
     * @param {*} element 
     * @param {*} parentElement 
     * @returns 
     */
    static iosRequestFullscreen(element, parentElement) {
        return new Promise((accept) => {
            const el = (parentElement || element);
            el.classList.add("ios-fs");
            _webkitCurrentFullScreenElement = el;
            document.dispatchEvent(new Event("webkitfullscreenchange"));
            accept();
        });
        
    }

    /**
     * IOS exit fullscreen
     * @param {*} element 
     * @param {*} parentElement 
     * @returns 
     */
    static iosExitFullscreen(element, parentElement) {
        return new Promise((accept) => {
            (parentElement || element).classList.remove("ios-fs");
            _webkitCurrentFullScreenElement = null;
            document.dispatchEvent(new Event("webkitfullscreenchange"));
            accept();
        });
    }

    /**
     * Request fullscreen
     * @param {*} element 
     * @param {*} parentElement 
     * @returns 
     */
    static requestFullscreen(element, parentElement) {
        
       if (this.fullScreenAvailable) {
            const requestFullscreen = element.requestFullscreen 
            || element.mozRequestFullScreen 
            || element.webkitRequestFullscreen 
            || element.msRequestFullscreen;

            return requestFullscreen.bind(element)();
        } else {
            return this.iosRequestFullscreen(element, parentElement);
        }
    }

    /**
     * Exit fullscreen
     * @param {*} element 
     * @param {*} parentElement 
     * @returns 
     */
    static exitFullscreen(element, parentElement) {

        if (this.fullScreenAvailable) {
            return _exitFullScreenApi.bind(document)();
        } else {
            return this.iosExitFullscreen(element, parentElement);
        }
    }
}