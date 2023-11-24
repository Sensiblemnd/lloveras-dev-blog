import { CSSProperties } from "react"

type Props = {
  padding: string
  radius: string
  outerBackgroundColor: string
  innerBackgroundColor: string
}
export const FancyCard = ({
  padding = "10px",
  radius = "7px",
  outerBackgroundColor = "hsl(275, 95%, 60%)",
  innerBackgroundColor = "hsl(220, 30%, 85%)",
}: Props) => {
  return (
    <div
      className="fancy-card"
      style={
        {
          "--padding": padding,
          "--radius": radius,
          "--outer-background-color": outerBackgroundColor,
          "--inner-background-color": innerBackgroundColor,
        } as CSSProperties
      }
    >
      <div className="fancy-card-content">
        qwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe
        rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe
        rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe
        rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe
        rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe
        rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe
        rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe
        rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe
        rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe
        rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe
        rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe
        rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe
        rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe
        rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe
        rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe
        rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe
        rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe
        rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe
        rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe
        rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe
        rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe
        rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe
        rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe
        rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe
        rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe
        rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe
        rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe
        rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe
        rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe
        rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe
        rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe
        rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe
        rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe
        rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe rqwerqwe rqwe
        rqwerqwe rqwe rqwerqwe rqwe r
      </div>
    </div>
  )
}
