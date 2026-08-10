//#region src/ScreenLockApi.js
function iosScreenLock() {
	return new Promise((accept) => {
		const el = document.querySelector(".screen-lockable");
		el && el.classList.add("landscape");
		(screen && screen.dispatchEvent || screen && screen.orientation.dispatchEvent || window.dispatchEvent)(new Event("orientationchange"));
		accept();
	});
}
function iosScreenUnlock() {
	const el = document.querySelector(".screen-lockable");
	el && el.classList.remove("landscape");
	(screen && screen.dispatchEvent || screen && screen.orientation.dispatchEvent || window.dispatchEvent)(new Event("orientationchange"));
}
if (window.screen) {
	const screenLockApi = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation || screen.orientation && screen.orientation.lock && screen.orientation.lock.bind(screen.orientation);
	screen.lockOrientationUniversal = screenLockApi || iosScreenLock;
	screen.supportsScreenLock = !!screenLockApi;
	screen.unlockOrientationUniversal = screen.unlockOrientation || screen.mozUnlockOrientation || screen.msUnlockOrientation || screen.orientation && screen.orientation.unlock && screen.orientation.unlock.bind(screen.orientation) || iosScreenUnlock;
} else {
	const _listeners = [];
	window.screen = {
		supportsScreenLock: false,
		addEventListener: (name, callback) => {
			if (!_listeners[name]) _listeners[name] = [];
			_listeners[name].push(callback);
		},
		dispatchEvent: (name) => {
			_listeners[name].forEach((callback) => callback());
		}
	};
	window.screen.lockOrientationUniversal = iosScreenLock;
	window.screen.unlockOrientationUniversal = iosScreenUnlock;
}
var ScreenLockApi = class {
	static get supportsScreenLock() {
		return screen.supportsScreenLock;
	}
	static lockElement(element) {
		element.classList.add("screen-lockable");
	}
	static lock(option) {
		return screen.lockOrientationUniversal(option);
	}
	static unlock() {
		return screen.unlockOrientationUniversal();
	}
};
//#endregion
//#region screenlock.js
var screenlock_default = ScreenLockApi;
//#endregion
export { screenlock_default as default };
