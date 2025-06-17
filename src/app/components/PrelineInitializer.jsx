"use client"

import { useEffect } from "react"

export default function PrelineInitializer() {
  useEffect(() => {
    let DropdownClass

    const initDropdowns = () => {
      const dropdowns = document.querySelectorAll('[data-hs-dropdown]')
      dropdowns.forEach(el => {
        if (DropdownClass) new DropdownClass(el)
      })
    }

    // ⬇️ Import hanya di client
    import("@preline/dropdown").then(module => {
      DropdownClass = module.Dropdown
      initDropdowns()

      // Untuk update dinamis
      const observer = new MutationObserver(() => {
        initDropdowns()
      })

      observer.observe(document.body, { childList: true, subtree: true })

      // Cleanup
      return () => observer.disconnect()
    })
  }, [])

  return null
}
