interface props {
  label: string
}
export const Title = (props: props) => {
  return (
    <h1 className="relative py-1 text-xl font-bold after:absolute after:bottom-0 after:left-0 after:h-[6px] after:w-16 after:rounded-md after:bg-secondary after:content-[''] lg:py-2 lg:text-3xl lg:after:w-24">
      {props.label}
    </h1>
  )
}
