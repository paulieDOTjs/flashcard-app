import React from "react";

export function parseCodeQ(str: string) {
  if (!str.includes("START_CODE")) return str;

  return (
    <>
      {str.substring(0, str.indexOf("START_CODE"))}
      <pre>
        {str.substring(str.indexOf("START_CODE") + 10, str.indexOf("END_CODE"))}
      </pre>
      {str.substring(str.indexOf("END_CODE") + 8)}
    </>
  );
}
