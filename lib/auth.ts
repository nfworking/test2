import {createHmac,scryptSync,timingSafeEqual} from "node:crypto";
import {cookies} from "next/headers";
export const COOKIE="apiworkbench_session";
export function isAllowedOrigin(origin:string|null,requestOrigin:string){if(!origin)return false;try{const supplied=new URL(origin);const expected=new URL(process.env.AUTH_BASE_URL||requestOrigin);return supplied.origin===expected.origin&&supplied.origin===origin}catch{return false}}
const TTL=8*60*60;
function key(){const s=process.env.AUTH_SECRET;if(!s||Buffer.byteLength(s)<32)throw Error("AUTH_SECRET must contain at least 32 bytes");return s}
function sign(v:string){return createHmac("sha256",key()).update(v).digest("base64url")}
export function validCredentials(u:string,p:string){const expected=process.env.AUTH_USERNAME||"",encoded=process.env.AUTH_PASSWORD_HASH||"",[salt,hex]=encoded.split(":");const a=Buffer.from(u),b=Buffer.from(expected);const user=a.length===b.length&&timingSafeEqual(a,b);if(!salt||!/^[a-f0-9]{128}$/i.test(hex||""))throw Error("Invalid AUTH_PASSWORD_HASH");const got=scryptSync(p,salt,64),want=Buffer.from(hex!,"hex");return user&&got.length===want.length&&timingSafeEqual(got,want)}
export function issueSession(u:string){const payload=Buffer.from(JSON.stringify({sub:u,exp:Math.floor(Date.now()/1000)+TTL})).toString("base64url");return payload+"."+sign(payload)}
export function verifySession(token?:string){if(!token)return false;const [p,s]=token.split(".");if(!p||!s)return false;const a=Buffer.from(s),b=Buffer.from(sign(p));if(a.length!==b.length||!timingSafeEqual(a,b))return false;try{const v=JSON.parse(Buffer.from(p,"base64url").toString());return v.sub===process.env.AUTH_USERNAME&&Number.isInteger(v.exp)&&v.exp>Date.now()/1000}catch{return false}}
export async function hasSession(){const jar=await cookies();return verifySession(jar.get(COOKIE)?.value)}
export const cookieOptions={httpOnly:true,secure:process.env.NODE_ENV==="production",sameSite:"strict" as const,path:"/",maxAge:TTL};
