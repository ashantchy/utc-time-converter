import Time from "./Time"

const Utc = () => {
  return (
    <div className="relative max-w-4xl mx-auto text-center max-h-full ">
        <h1 className="text-5xl text-blue-500 pt-52 font-light">UTC Time Zone Converter</h1>
        <Time />
    </div>
  )
}

export default Utc