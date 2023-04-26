import Prism from "prismjs"
import React, { useEffect } from "react"

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
  async function highlight() {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current as Element)
    }
  }
  useEffect(() => {
    highlight()
  }, [language, source])
  return (
    <pre className={`line-numbers ${prefixCls} ${className || ""} ${langCls}`} {...others}>
      <code className={langCls} ref={codeRef}>
        {source || children}
      </code>
    </pre>
  )
}
