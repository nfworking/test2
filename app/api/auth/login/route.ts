import {NextRequest,NextResponse} from "next/server";
import {COOKIE,cookieOptions,issueSession,validCredentials,isAllowedOrigin} from "@/lib/auth";
export const runtime="nodejs";
export async function POST(req:NextRequest){
 if(!isAllowedOrigin(req.headers.get("origin"),req.nextUrl.origin))return NextResponse.json({error:"Invalid request origin"},{status:403});
 let data:{username?:string;password?:string};try{data=await req.json()}catch{return NextResponse.json({error:"Invalid JSON"},{status:400})}
 const u=typeof data.username==="string"?data.username:"",p=typeof data.password==="string"?data.password:"";
 if(u.length>256||p.length>1024)return NextResponse.json({error:"Invalid credentials"},{status:400});
 try{if(!validCredentials(u,p))return NextResponse.json({error:"Incorrect username or password"},{status:401});const res=NextResponse.json({ok:true});res.cookies.set(COOKIE,issueSession(u),cookieOptions);return res}
 catch{return NextResponse.json({error:"Authentication is not configured. Check server environment variables."},{status:503})}
}
