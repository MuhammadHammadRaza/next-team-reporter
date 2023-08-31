// import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
// import { setCookie } from "cookies-next";
// import { cookies } from "next/headers";

// const protectedRoutes = ["/dashboard", "/team", "/team/:path*"];
// const unProtectedRoutes = ["/login", "/signup", "/"];

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  if (
    request.nextUrl.pathname !== "/login" &&
    request.nextUrl.pathname !== "/signup" &&
    request.nextUrl.pathname !== "/"
  ) {
    console.log("Hello protected routes");
    if (request.cookies.has("authToken")) {
      const _authToken = request.cookies.get("authToken");
      try {
        const jsonRes = await fetch(`http://localhost:3000/verify-token`, {
          headers: {
            Cookie: `authToken=${_authToken.value}`,
          },
        });

        const res = await jsonRes.json();
        if (!res.status) {
          // const _response = NextResponse.next();
          const _response = NextResponse.redirect(
            new URL("/login", request.url)
          );
          _response.cookies.delete("authToken");
          // _response.redirected = true;
          console.log("_response: ", _response);
          // return redirect("/login");
          // NextResponse.redirect(new URL("/login", request.url));
          // _response.redirect(new URL("/login", request.url));
          return _response;
          // return NextResponse.redirect(new URL("/login", request.url));
        }
      } catch (error) {
        const _response = NextResponse.next();
        _response.cookies.delete("authToken");
        return _response;
      }
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    console.log("Hello UNprotected routes");
    if (request.cookies.has("authToken")) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
