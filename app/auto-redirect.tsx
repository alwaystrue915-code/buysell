"use client";

import { useEffect } from "react";

type AutoRedirectProps = {
  href: string;
  delay: number;
};

export default function AutoRedirect({ href, delay }: AutoRedirectProps) {
  useEffect(() => {
    const redirectTimer = window.setTimeout(() => {
      window.location.assign(href);
    }, delay);

    return () => window.clearTimeout(redirectTimer);
  }, [delay, href]);

  return null;
}
