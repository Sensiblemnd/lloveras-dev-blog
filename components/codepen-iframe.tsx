type CodePenIframeProps = {
  title: string
  penUrlKey: string
  height?: number
}

export default function CodePenIframe({ height = 500, title, penUrlKey }: CodePenIframeProps) {
  return (
    <>
      <iframe
        height={height}
        width={"100%"}
        title={title}
        src={`https://codepen.io/Sensiblemnd/embed/preview/${penUrlKey}?default-tab`}
        loading="lazy"
        allowFullScreen={true}
      >
        See the Pen <a href={`https://codepen.io/Sensiblemnd/pen/${penUrlKey}`}>{title}</a>
        by Rob Lloveras (<a href="https://codepen.io/Sensiblemnd">@Sensiblemnd</a>) on
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
    </>
  )
}
