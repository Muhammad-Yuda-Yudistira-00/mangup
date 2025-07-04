import {nextResponse} from 'next/server'

export function middleware(request) {
	console.info('request running for: ', request.url)
}