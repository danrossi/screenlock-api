export default class FullscreenApi {
    /**
     * Has native fullscreen support
     */
    static get fullScreenAvailable(): any;
    /**
     * Get current fullscreen element
     */
    static get currentFullScreenElement(): any;
    /**
     * IOS request fullscreen
     * @param {*} element
     * @param {*} parentElement
     * @returns
     */
    static iosRequestFullscreen(element: any, parentElement: any): Promise<any>;
    /**
     * IOS exit fullscreen
     * @param {*} element
     * @param {*} parentElement
     * @returns
     */
    static iosExitFullscreen(element: any, parentElement: any): Promise<any>;
    /**
     * Request fullscreen
     * @param {*} element
     * @param {*} parentElement
     * @returns
     */
    static requestFullscreen(element: any, parentElement: any): any;
    /**
     * Exit fullscreen
     * @param {*} element
     * @param {*} parentElement
     * @returns
     */
    static exitFullscreen(element: any, parentElement: any): Promise<any>;
}
