import { createRef, useRef, useCallback, useEffect, type ReactNode } from "react"
import { cn } from "./../../lib/utils"

interface ImageItem extends String {}

interface ImageMouseTrailProps {
  items: ImageItem[]
  children?: ReactNode
  className?: string
  imgClass?: string
  distance?: number
  maxNumberOfImages?: number
  fadeAnimation?: boolean
}

export default function ImageCursorTrail({
  items,
  children,
  className,
  maxNumberOfImages = 5,
  imgClass = "w-40 h-48",
  distance = 20,
  fadeAnimation = false,
}: ImageMouseTrailProps) {
  const containerRef = useRef<HTMLElement>(null)
  const refs = useRef(items.map(() => createRef<HTMLImageElement>()))
  const currentZIndexRef = useRef(1)
  const globalIndexRef = useRef(0)
  const lastRef = useRef({ x: 0, y: 0 })

  const activate = useCallback((image: HTMLImageElement, x: number, y: number) => {
    const containerRect = containerRef.current?.getBoundingClientRect()
    if (!containerRect) return

    const scrollX = window.pageXOffset || document.documentElement.scrollLeft
    const scrollY = window.pageYOffset || document.documentElement.scrollTop

    const relativeX = x + scrollX - containerRect.left
    const relativeY = y + scrollY - containerRect.top
    
    image.style.left = `${relativeX}px`
    image.style.top = `${relativeY}px`

    if (currentZIndexRef.current > 40) {
      currentZIndexRef.current = 1
    }
    image.style.zIndex = String(currentZIndexRef.current)
    currentZIndexRef.current++

    image.dataset.status = "active"
    if (fadeAnimation) {
      setTimeout(() => {
        image.dataset.status = "inactive"
      }, 1500)
    }
    lastRef.current = { x, y }
  }, [fadeAnimation])

  const distanceFromLast = useCallback((x: number, y: number) => {
    return Math.hypot(x - lastRef.current.x, y - lastRef.current.y)
  }, [])

  const deactivate = useCallback((image: HTMLImageElement | null) => {
    if (image) {
      image.dataset.status = "inactive"
    }
  }, [])

  const handleOnMove = useCallback((e: MouseEvent | Touch) => {
    if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / distance) {
      const lead = refs.current[globalIndexRef.current % refs.current.length].current
      const tail = refs.current[(globalIndexRef.current - maxNumberOfImages) % refs.current.length]?.current
      
      if (lead) activate(lead, e.clientX, e.clientY)
      if (tail) deactivate(tail)
      globalIndexRef.current++
    }
  }, [activate, deactivate, distanceFromLast, distance, maxNumberOfImages])

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => handleOnMove(e)
    const onTouchMove = (e: TouchEvent) => handleOnMove(e.touches[0])

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('touchmove', onTouchMove)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('touchmove', onTouchMove)
    }
  }, [handleOnMove])

  return (
    <section
      ref={containerRef}
      className={cn(
        "relative grid h-[600px] w-full place-content-center overflow-hidden rounded-lg",
        className
      )}
    >
      {items.map((item, index) => (
        <img
          key={`trail-${index}`}
          crossOrigin="anonymous"
          className={cn(
            "opacity:0 data-[status='active']:ease-out-expo absolute -translate-x-[50%] -translate-y-[50%] scale-0 rounded-3xl object-cover transition-transform duration-300 data-[status='active']:scale-100 data-[status='active']:opacity-100 data-[status='active']:duration-500",
            imgClass
          )}
          data-index={index}
          data-status="inactive"
          src={item as string}
          alt={`Trail image ${index}`}
          ref={refs.current[index]}
        />
      ))}
      {children}
        </section>
      )
    }