

const Slide = ({ image, name, comment_text, text3 }) => {
  return (
    <div className="bg-white p-10">
      <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
        What clients saying
      </h1>
      <div className="flex justify-center mx-auto mt-6">
        <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
        <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <img className="object-cover rounded-full w-24 h-24" src={image} alt="" />

        <div className="mt-4 text-center">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">{name}</h1>
        </div>

        <div className="w-[700px] mt-4 mb-16 text-center">
          <h1 className="font-semibold text-gray-800 dark:text-white">"{comment_text}"</h1>
        </div>

      </div>

    </div>
  )
}

export default Slide
