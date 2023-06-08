import React from "react"
import Mobile from "../components/Mobile"
import Laptop from "../components/Laptop"

export default function Home() {
  const [width, setWidth] = React.useState(0);
  React.useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div>
      {width > 700 ?
        <Laptop /> :
        <Mobile />}
    </div>
  )
}
