"use client"

import { useEffect } from "react"
export default function Error({ error, resolve }: { error: Error, resolve: () => void}) {
  useEffect(() => {
    console.error("Error occurred");
  }, []);
  
  return (
    <div>
      {error.message}
      <button onClick={() => resolve()}>Try again</button>
    </div>
  )
}