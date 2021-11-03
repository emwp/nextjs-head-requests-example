import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const country = req.geo.country?.toLowerCase() || "us";
  const locale = req.headers.get("accept-language")?.split(",")?.[0] || "en-US";

  console.log({ country, locale });
}
