import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request) {
    // return NextResponse.redirect(new URL('/login', request.url))
    // if (request.nextUrl.pathname.startsWith('/dashboard')) {
    //     return NextResponse.redirect(new URL('/login', request.url))
    // }
    console.log("cookies: ", request.cookies)
}