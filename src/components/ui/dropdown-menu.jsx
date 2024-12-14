import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"

const DropdownMenu = DropdownMenuPrimitive.Root
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger
const DropdownMenuItem = DropdownMenuPrimitive.Item
const DropdownMenuContent = React.forwardRef(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Content ref={ref} {...props} style={{ border: '2px solid gray', width: '90px', borderRadius: 10 }} />
))
DropdownMenuContent.displayName = "DropdownMenuContent"

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
}
