import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {me} from "@/app/auth/api/LoginApi";

// This function can be marked `async` if using `await` inside
export  async  function middleware(request: NextRequest) {

    console.log(request.url)
    const ME:Response=await me();
    if(ME.status!=200 && ! request.url.match("/auth/login")) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }
    if(ME.status==200 && request.url.match("/auth/login")) {
        return NextResponse.redirect(new URL('/admin/users', request.url))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/admin/:path*', '/auth/login/'],
}
