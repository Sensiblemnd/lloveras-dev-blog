import Prism from "prismjs"
import React, { useCallback, useEffect } from "react"

export interface ReactPrismjsProps {
  prefixCls?: string
  language?: string
  source?: string
  className?: string
  children?: React.ReactNode
}

export const ReactPrismjs = (props: ReactPrismjsProps = {}) => {
  const codeRef = React.createRef<HTMLPreElement>()
  const { prefixCls, className, language, source, children, ...others } = props
  const langCls = language ? `language-${language}` : ""

  const highlight = useCallback(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current as Element)
    }
  }, [codeRef])

  useEffect(() => {
    highlight()
  }, [highlight])

  return (
    <pre className={`line-numbers ${prefixCls} ${className || ""} ${langCls}`} {...others}>
      <code className={langCls} ref={codeRef}>
        {source || children}
      </code>
    </pre>
  )
}
