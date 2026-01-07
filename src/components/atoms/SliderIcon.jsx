import Image from "next/image"

const SliderIcon = ({paginationType}) => {
  return (
    <Image
      src={`/icons/${paginationType === "fraction" ? "right" : "right-large"}.svg`}
      alt="right"
      width={`${paginationType === "fraction" ? "15" : "21"}`}
      height={`${paginationType === "fraction" ? "15" : "21"}`}
    />
  )
}

export default SliderIcon