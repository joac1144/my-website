import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        console.log("Revalidation request received");

        const secret = req.nextUrl.searchParams.get("secret");

        if (secret !== process.env.DATOCMS_REVALIDATE_SECRET) {
            return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
        }

        revalidatePath("/projects");

        console.log("Revalidation successful");

        return NextResponse.json({ revalidated: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
    }
}