import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'
interface PageHeadingProps extends HTMLAttributes<HTMLDivElement> {}

export const PageHeading = ({
  className,
  children,
  ...props
}: PageHeadingProps) => {
  return (
    <div className={cn(className)} {...props}>
      <div className="my-4">
        <h2 className="text-3xl py-3 font-bold">{children}</h2>
      </div>
    </div>
  )
}
