import {useState} from 'react'

interface UploadOptions {
	[key: string]: string
}

/**
 * The `useFileUploadWithXHR` function is a custom hook in TypeScript that allows for file upload using
 * XMLHttpRequest and provides progress tracking.
 * @returns The function `useFileUploadWithXHR` returns an object with two properties: `progress` and
 * `uploadFile`.
 */
export function useFileUploader() {
	const [progress, setProgress] = useState(0)

	const uploadFile = async (url: string, file: string | Blob | File, options?: UploadOptions) => {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest()

			xhr.upload.addEventListener('progress', (event) => {
				const percent = (event.loaded / event.total) * 100
				setProgress(percent)
			})

			xhr.onreadystatechange = () => {
				if (xhr.readyState === XMLHttpRequest.DONE) {
					if (xhr.status === 200) {
						try {
							resolve(JSON.parse(xhr.responseText))
						} catch {
							resolve(xhr.responseText)
						}
					} else {
						try {
							reject(JSON.parse(xhr.responseText))
						} catch {
							reject(xhr.responseText)
						}
					}
				}
			}

			xhr.open('POST', url, true)

			// Set additional headers or options
			if (options && typeof options === 'object') {
				for (const key in options) {
					xhr.setRequestHeader(key, options[key])
				}
			}

			const formData = new FormData()
			formData.append('file', file)
			xhr.send(formData)
		})
	}

	return {progress, uploadFile}
}
