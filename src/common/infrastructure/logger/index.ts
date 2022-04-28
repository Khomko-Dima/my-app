export function Logger(
	type: 'log' | 'warning' | 'error',
	title = '',
	data: Array<string | { [key: string]: any }>,
) {
	if (type === 'log') {
		console.group(title); // eslint-disable-line
		data.forEach((el) => {
			if (typeof el === 'string') {
				console.log(el);// eslint-disable-line
			} else {
				for (const elKey in el) {
					console.log(elKey, el[elKey]);// eslint-disable-line
				}
			}
		});
		console.groupEnd();// eslint-disable-line
	}
	if (type === 'warning') {
		console.group(title); // eslint-disable-line
		data.forEach((el) => {
			console.warn(el);// eslint-disable-line
		});
		console.groupEnd();// eslint-disable-line
	}
	if (type === 'error') {
		console.group(title); // eslint-disable-line
		data.forEach((el) => {
			console.error(el);// eslint-disable-line
		});
		console.groupEnd();// eslint-disable-line
	}
}
