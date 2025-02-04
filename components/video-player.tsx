export function VideoPlayer() {
  return (
    <div className="relative rounded-xl overflow-hidden h-full">
      <div className="absolute inset-0 rounded-xl border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.2)] backdrop-blur-sm z-10 pointer-events-none" />
      {/* TODO: Replace with actual video file when upload is possible */}
      <video className="w-full h-full rounded-[inherit] object-cover" controls preload="auto">
        <source src="https://example.com/placeholder-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

