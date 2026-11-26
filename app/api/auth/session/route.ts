import {NextRequest,NextResponse} from "next/server";
import {COOKIE,verifySession} from "@/lib/auth";
export async function GET(req:NextRequest){
 const authenticated=verifySession(req.cookies.get(COOKIE)?.value);
 return NextResponse.json({authenticated},{headers:{"Cache-Control":"no-store"}});
}
