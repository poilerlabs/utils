import {useState} from 'react'

interface UploadOptions {
	headers?: {
		[key: string]: string
	}
	method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
	type?: 'File' | 'FormData' | 'Blob'
	formField?: string
}

/**
 * The `useFileUploadWithXHR` function is a custom hook in TypeScript that allows for file upload using
 * XMLHttpRequest and provides progress tracking.
 * @returns The function `useFileUploadWithXHR` returns an object with two properties: `progress` and
 * `uploadFile`.
 */
export function useFileUploader() {
	const [progress, setProgress] = useState(0)
	const [startTime, setStartTime] = useState<number | null>(null)

	const speed = () => {
		if (startTime !== null && progress > 0) {
			const currentTime = Date.now()
			const elapsedTime = currentTime - startTime
			const transferSpeed = (progress / elapsedTime) * 1000 // Multiply by 1000 to convert to bytes per second
			return transferSpeed
		}
		return -1 // Return -1 if speed calculation is not possible
	}

	const ETA = () => {
		if (startTime !== null && progress > 0) {
			const currentTime = Date.now()
			const elapsedTime = currentTime - startTime
			const estimatedTotalTime = elapsedTime / (progress / 100) - elapsedTime
			return estimatedTotalTime
		}
		return -1 // Return -1 if ETA calculation is not possible
	}

	const uploadFile = async (url: string, file: string | Blob | File, options?: UploadOptions) => {
		return new Promise((resolve, reject) => {
			setStartTime(Date.now())
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

			xhr.open(options?.method || 'POST', url, true)

			// Set additional headers or options
			if (options?.headers && typeof options.headers === 'object') {
				for (const key in options.headers) {
					xhr.setRequestHeader(key, options.headers[key])
				}
			}

			switch (options?.type) {
				case 'Blob' || 'Blob':
					xhr.send(file)
					break
				default:
					const formData = new FormData()
					formData.append(options?.formField || 'file', file)
					xhr.send(formData)
			}
		})
	}

	return {progress, uploadFile, ETA, speed}
}
