//#region src/FullscreenApi.js
var _exitFullScreenApi = document.exitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen;
var _fullScreenAvailable = document.fullscreenEnabled || document.mozFullscreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled;
var _webkitCurrentFullScreenElement;
var FullscreenApi = class {
	static get fullScreenAvailable() {
		return _fullScreenAvailable;
	}
	static get currentFullScreenElement() {
		return document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.fullscreenElement || document.msFullscreenElement || _webkitCurrentFullScreenElement;
	}
	static iosRequestFullscreen(element, parentElement) {
		return new Promise((accept) => {
			const el = parentElement || element;
			el.classList.add("ios-fs");
			_webkitCurrentFullScreenElement = el;
			document.dispatchEvent(new Event("webkitfullscreenchange"));
			accept();
		});
	}
	static iosExitFullscreen(element, parentElement) {
		return new Promise((accept) => {
			(parentElement || element).classList.remove("ios-fs");
			_webkitCurrentFullScreenElement = null;
			document.dispatchEvent(new Event("webkitfullscreenchange"));
			accept();
		});
	}
	static requestFullscreen(element, parentElement) {
		if (this.fullScreenAvailable) return (element.requestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen || element.msRequestFullscreen).bind(element)();
		else return this.iosRequestFullscreen(element, parentElement);
	}
	static exitFullscreen(element, parentElement) {
		if (this.fullScreenAvailable) return _exitFullScreenApi.bind(document)();
		else return this.iosExitFullscreen(element, parentElement);
	}
};
//#endregion
//#region fullscreen.js
var fullscreen_default = FullscreenApi;
//#endregion
export { fullscreen_default as default };
