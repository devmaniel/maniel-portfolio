import { useLayoutEffect, useRef } from "react"
import type React from "react"
import { useInView } from "motion/react"
import { annotate } from "rough-notation"
import { type RoughAnnotation, type RoughPadding } from "rough-notation/lib/model"

type AnnotationAction =
  | "highlight"
  | "underline"
  | "box"
  | "circle"
  | "strike-through"
  | "crossed-off"
  | "bracket"

interface HighlighterProps {
  children: React.ReactNode
  action?: AnnotationAction
  color?: string
  strokeWidth?: number
  animationDuration?: number
  iterations?: number
  padding?: RoughPadding
  multiline?: boolean
  isView?: boolean
}

export function Highlighter({
  children,
  action = "highlight",
  color = "#ffd1dc",
  strokeWidth = 1.5,
  animationDuration = 600,
  iterations = 2,
  padding = 2,
  multiline = true,
  isView = false,
}: HighlighterProps) {
  const elementRef = useRef<HTMLSpanElement>(null)

  const isInView = useInView(elementRef, {
    once: true,
    margin: "-10%",
  })

  // If isView is false, always show. If isView is true, wait for inView
  const shouldShow = !isView || isInView

  useLayoutEffect(() => {
    const element = elementRef.current
    let annotation: RoughAnnotation | null = null

    if (shouldShow && element) {
      const annotationConfig = {
        type: action,
        color,
        strokeWidth,
        animationDuration,
        iterations,
        padding,
        multiline,
      }

      annotation = annotate(element, annotationConfig)
      annotation.show()
    }

    // The annotated span is inline (so it wraps with the sentence), and a
    // ResizeObserver can't see inline boxes. Watch the paragraph instead and
    // redraw (without animation) when its layout changes.
    const block = element?.parentElement?.parentElement
    let isFirstCallback = true
    const observer = new ResizeObserver(() => {
      if (isFirstCallback) {
        isFirstCallback = false
        return
      }
      if (annotation?.isShowing()) annotation.show()
    })
    if (annotation && block) observer.observe(block)

    return () => {
      observer.disconnect()
      annotation?.remove()
    }
  }, [
    shouldShow,
    action,
    color,
    strokeWidth,
    animationDuration,
    iterations,
    padding,
    multiline,
  ])

  // rough-notation inserts its SVG as a sibling of the annotated element. The outer
  // span keeps that SVG anchored to the text (so it moves with it on zoom/reflow) and,
  // as its own stacking context, lets the SVG sit behind the text.
  // Multiline marks (highlight, underline) stay inline so they wrap with the sentence;
  // single-shape marks (circle, box) wrap the phrase as one block so the shape
  // surrounds just the phrase instead of every line it touches.
  const display = multiline ? "" : "inline-block whitespace-normal"
  return (
    <span className={`relative isolate [&>.rough-annotation]:-z-10 ${display}`}>
      <span ref={elementRef} className={`relative bg-transparent ${display}`}>
        {children}
      </span>
    </span>
  )
}
