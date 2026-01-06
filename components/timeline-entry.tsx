"use client"

import type { ReactNode } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

interface TimelineEntryProps {
  period: string
  children: ReactNode
  isEraStart?: boolean
  isFirst?: boolean
}

export function TimelineEntry({ period, children, isEraStart, isFirst }: TimelineEntryProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>(0.15)

  const spacingClass = isFirst ? "" : isEraStart ? "mt-20 md:mt-24" : "mt-10 md:mt-12"

  return (
    <article ref={ref} className={`timeline-entry relative ${spacingClass} ${isVisible ? "visible" : ""}`}>
      <div className="absolute -left-6 top-[5px] w-1.5 h-px bg-muted-foreground/30" aria-hidden="true" />
      <time className="block text-base font-mono tracking-wide text-muted-foreground/40 mb-2 uppercase">
        {period}
      </time>
      <p className="text-foreground/80 leading-[1.75] text-med [&_a]:text-accent [&_a]:no-underline [&_a]:border-b [&_a]:border-accent/25 [&_a]:hover:border-accent/60 [&_a]:transition-colors [&_a]:duration-150">
        {children}
      </p>
    </article>
  )
}
