/**
 * IOSUtils
 * IOS utils methods for IOS detection and requesting orientation permissions. 
 * @author danrossi / https://github.com/danrossi
 */

export default class IOSUtils {

    static get isIOS() {
        return ((/iP(hone|ad)/i).test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
    }

    static requireOrientationPermission() {
        return window.DeviceOrientationEvent !== undefined && typeof window.DeviceOrientationEvent.requestPermission === 'function';
    }

    static requestOrientationPermissions() {
        return window.DeviceOrientationEvent.requestPermission();
    }
}