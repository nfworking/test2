import {NextRequest,NextResponse} from "next/server";
import {COOKIE,isAllowedOrigin} from "@/lib/auth";
export async function POST(req:NextRequest){if(!isAllowedOrigin(req.headers.get("origin"),req.nextUrl.origin))return NextResponse.json({error:"Invalid origin"},{status:403});const r=NextResponse.json({ok:true});r.cookies.set(COOKIE,"",{httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"strict",path:"/",maxAge:0});return r}
