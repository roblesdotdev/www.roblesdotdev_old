import clsx from 'clsx'
import type { ReactNode } from 'react'
import { createElement } from 'react'

// Ensure use valid headings
const headingTypes = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
}

const fontSize = {
  h1: 'leading-snug text-3xl md:text-4xl lg:text-5xl',
  h2: 'leading-snug text-2xl md:text-3xl',
  h3: 'text-2xl font-medium md:text-3xl',
  h4: 'text-xl font-medium md:text-2xl',
  h5: 'text-lg font-medium md:text-xl',
  h6: 'text-lg font-medium uppercase',
}

type HeadingProps = {
  as?: keyof typeof headingTypes
  className?: string
  id?: string
} & {
  children: ReactNode
}

function Heading({ as = 'h1', children, ...props }: HeadingProps) {
  const font = fontSize[as as keyof typeof fontSize]
  const cls = clsx('font-bold', font)
  return createElement(as, {
    className: cls,
    ...props,
    children,
  })
}

type HProps = {
  children: ReactNode
  className?: string
}

function H1(props: HProps) {
  return <Heading as="h1" {...props} />
}

function H2(props: HProps) {
  return <Heading as="h2" {...props} />
}

function H3(props: HProps) {
  return <Heading as="h3" {...props} />
}
function H4(props: HProps) {
  return <Heading as="h4" {...props} />
}

function H5(props: HProps) {
  return <Heading as="h5" {...props} />
}

function H6(props: HProps) {
  return <Heading as="h6" {...props} />
}

export { H1, H2, H3, H4, H5, H6 }
