import { NextResponse } from "next/server"
import { jwtVerify } from "jose"

export async function middleware(request) {
    const jwt = request.cookies.get("myTokenName")
    // console.log(jwt)

        if (jwt === undefined) {
            return NextResponse.redirect(new URL("/login", request.url))
        }

        try {
            const { payload } = await jwtVerify(jwt, new TextEncoder().encode("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"));
            console.log(payload)
            return NextResponse.next()
        } catch (error) {
            // console.log(error)
            // return NextResponse.redirect(new URL("/login", request.url))
        }
    return NextResponse.next()
}

export const config = {
    matcher: ["/mycourses/:path", "/create/:path", "/checkout/:path"]
}


