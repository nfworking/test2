import {redirect} from "next/navigation";
import {hasSession} from "@/lib/auth";
import Workbench from "@/components/workbench";
export const dynamic="force-dynamic";
export default async function Home(){if(!(await hasSession()))redirect("/login");return <Workbench/>}
