export default function App() {
  return (
    <div className="w-screen h-screen bg-black relative px-20 py-20">
      <div className="flex flex-col h-full justify-between">
        <h1 className="text-[#FFBDBD] font-sans text-[288px] font-bold leading-[240px]">
          SPLINE KEYBOARD
        </h1>
        <p className="w-96 text-white text-4xl font-medium">
          This is a simple 3D keyboard website made using spline and framer.
        </p>
      </div>
      <iframe
        title="spline-keyboard"
        className="absolute top-0 right-0 z-10"
        src="https://my.spline.design/hoverinteractioncopy-7647e54c25afdcbf11af6bf41a6c0a5a/"
        frameBorder="0"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}
