
/**
 *
 * @param {string} method - method request
 * @param {string} url - url request
 * @param {{}} data - object request
 * @returns response
 */
export default function makeRequest(method, url, data) {
	return new Promise(function (resolve, reject) {
		let request = new XMLHttpRequest();
		request.open(method, url);

		request.send(data);

		request.onload = function () {
			if (this.status >= 200 && this.status < 300) {
				resolve(request.response);
			} else {
				reject({
					status: this.status,
					statusText: request.statusText
				});
			}
		};
		request.onerror = function () {
			reject({
				status: this.status,
				statusText: request.statusText
			});
		};
	});
}