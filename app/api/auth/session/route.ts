import {NextRequest,NextResponse} from "next/server";
import {COOKIE,verifySession} from "@/lib/auth";
export async function GET(req:NextRequest){return NextResponse.json({authenticated:verifySession(req.cookies.get(COOKIE)?.value},{headers:{"Cache-Control":"no-store"}})}
