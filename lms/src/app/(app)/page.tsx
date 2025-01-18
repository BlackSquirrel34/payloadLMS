"use client";
// without that:
// annot read properties of undefined (reading 'match')
import React, { ReactElement } from 'react'
// import { UploadButton } from "@/utils/uploadthing";
import Image from 'next/image';

export default function Page(): ReactElement {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
     
     <Image
        src="https://t36rk2nq9h.ufs.sh/f/2YRvB6PdQEV9uUn9NqpGBfs4TtVa930FqENodCZP5zpkRyOD"
        alt="A coffe cup served via CDN uploadthing"
        width={400}
        height={300}
        unoptimized={true}
      />
  </div>
  );
}
