'use client'

import React, { useRef, useState, useEffect } from 'react'

export interface DockItem {
  id?: string
  icon: React.ReactNode
  label: string
  onClick?: () => void
  active?: boolean
}

export interface DockProps {
  items: DockItem[]
  distance?: number
  maxScale?: number
  className?: string
}

export default function Dock({
  items,
  distance = 160,
  maxScale = 1.12,
  className = '',
}: DockProps) {
  const [mouseX, setMouseX] = useState<number | null>(null)
  const dockRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMouseX(e.clientX)
  }

  const handleMouseLeave = () => {
    setMouseX(null)
  }

  return (
    <div
      ref={dockRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`dock-panel ${className}`}
      role="toolbar"
      aria-label="Domain focus dock"
    >
      {items.map((item, index) => (
        <DockPillItem
          key={item.id ?? index}
          item={item}
          mouseX={mouseX}
          maxScale={maxScale}
          distance={distance}
        />
      ))}
    </div>
  )
}

function DockPillItem({
  item,
  mouseX,
  maxScale,
  distance,
}: {
  item: DockItem
  mouseX: number | null
  maxScale: number
  distance: number
}) {
  const itemRef = useRef<HTMLButtonElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    if (mouseX === null || !itemRef.current) {
      setScale(1)
      return
    }

    const rect = itemRef.current.getBoundingClientRect()
    const itemCenter = rect.left + rect.width / 2
    const dist = Math.abs(mouseX - itemCenter)

    if (dist < distance) {
      const factor = Math.cos((dist / distance) * (Math.PI / 2))
      const targetScale = 1 + (maxScale - 1) * factor
      setScale(targetScale)
    } else {
      setScale(1)
    }
  }, [mouseX, maxScale, distance])

  return (
    <button
      ref={itemRef}
      type="button"
      className={`filter-chip dock-pill ${item.active ? 'is-active' : ''}`}
      style={{
        transform: `scale(${scale})`,
        transition: mouseX === null ? 'transform 0.25s cubic-bezier(0.2, 0, 0, 1), background 0.2s, color 0.2s' : 'transform 0.08s ease-out, background 0.2s, color 0.2s',
        transformOrigin: 'bottom center',
      }}
      onClick={item.onClick}
      aria-label={item.label}
      aria-pressed={item.active}
    >
      <span className="filter-chip-icon">{item.icon}</span>
      <span className="dock-pill-label">{item.label}</span>
    </button>
  )
}
