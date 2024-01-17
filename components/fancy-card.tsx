import { CSSProperties, HTMLAttributes, Ref, forwardRef } from "react"

type Options = {
  padding?: number
  radius?: number
  contentPadding?: number
  outerBackgroundColor?: string
  innerBackgroundColor?: string
  styles?: CSSProperties
}
type Props = {
  options: Options

  children: React.ReactNode
  //  rest of props must be for html div component
  props?: HTMLAttributes<HTMLDivElement>
  // pass in a ref if you want to use it
}
/**
 * FancyCard is a component that takes in props and returns a div with those props
 * @param options - options object
 * @param options.padding - padding of the outer div defaults to 12
 * @param options.radius - radius of the outer div defaults to  25
 * @param options.contentPadding - padding of the inner div defaults to padding * 2
 * @param options.outerBackgroundColor - background color of the outer div defaults to hsl(275, 95%, 60%)
 * @param options.innerBackgroundColor - background color of the inner div defaults to hsl(220, 30%, 85%)
 * @param options.styles - styles for the outer div defaults to {}
 * @param children - children of the inner div
 * @param props - rest of props must be for html div component
 * @param ref - pass in a ref if you want to use it
 * @returns - a div with the props passed in
 */

export const FancyCard = forwardRef(
  (
    {
      options: {
        padding = 12,
        radius = 25,
        contentPadding = padding * 2,
        outerBackgroundColor = "hsl(275, 95%, 60%)",
        innerBackgroundColor = "hsl(220, 30%, 85%)",
        styles = {},
      },
      props,
      children,
    }: Props,
    ref: Ref<HTMLDivElement>
  ) => (
    <div
      {...props}
      ref={ref}
      className="fancy-card"
      style={
        {
          "--padding": `${padding}px`,
          "--radius": `${radius}px`,
          "--outer-background-color": outerBackgroundColor,
          "--inner-background-color": innerBackgroundColor,
          "--content-padding": `${contentPadding}px`,
          ...styles,
        } as CSSProperties
      }
    >
      <div className="fancy-card-content">
        <div className="fancy-card-wrapper">{children}</div>
      </div>
    </div>
  )
)

FancyCard.displayName = "FancyCard"
