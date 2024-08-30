export default function Loading() {
  return (
    <div className="flex flex-row items-center justify-center gap-4 rounded-md border-1 border-gray-1 p-2">
      <svg
        x="0px"
        y="0px"
        viewBox="0 0 50 50"
        xmlSpace="preserve"
        className="size-10 animate-anim-spin fill-white"
      >
        <path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" />
      </svg>
      <p className="text-6 text-white">Processando...</p>
    </div>
  );
}
