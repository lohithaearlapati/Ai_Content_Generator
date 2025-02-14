import type { NextConfig } from "next";

console.log("Clerk Publishable Key:", process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY);
console.log("Clerk Secret Key:", process.env.CLERK_SECRET_KEY);
const  NextConfig={
  images:{
    domains:['cdn-icons-png.flaticon.com']
  }
};
export default NextConfig;