import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function UserNav() {
  return (
    <div className="flex items-center space-x-4">
      <Avatar>
        <AvatarImage src="/avatars/01.png" alt="@shadcn" />
        <AvatarFallback>SC</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium leading-none">Olivia Martin</p>
        <p className="text-sm text-muted-foreground">olivia.martin@email.com</p>
      </div>
      <Button variant="ghost" className="h-8 w-8 p-0">
        <span className="sr-only">Open menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </Button>
    </div>
  )
}