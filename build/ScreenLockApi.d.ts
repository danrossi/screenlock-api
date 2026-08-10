export default class ScreenLockApi {
    /**
     * Native Screen lock api support
     */
    static get supportsScreenLock(): any;
    /**
     * Set a lock element for IOS fallback
     * @param {*} element
     */
    static lockElement(element: any): void;
    /**
     * Screen lock api
     * @param {*} option
     * @returns
     */
    static lock(option: any): any;
    /**
     * Screen unlock api
     * @returns
     */
    static unlock(): any;
}
