export default function Skill({ el }) {
  return (
    <div className="w-full mb-4 sm:mb-6">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm sm:text-base lg:text-lg font-medium text-zinc-700 capitalize">
          {el.skill}
        </h3>
        <span className="text-xs sm:text-sm text-zinc-500 font-medium">
          {el.width}
        </span>
      </div>
      <div className="w-full bg-zinc-200 rounded-full h-2 sm:h-3">
        <div
          className="h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: el.width,
            backgroundColor: el.color,
          }}
        ></div>
      </div>
    </div>
  );
}
