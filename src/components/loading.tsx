import { Commet } from "react-loading-indicators";

export function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-navy-deep z-50">
      <div className="flex flex-col items-center gap-6">
        {/* Commet spinner with project theme colors */}
        <Commet color={["#d4af37", "#faf8f6", "#2d3d5c", "#c9a961"]} />
        <div className="text-center">
          <p className="text-sm font-medium text-gold">Close With Confidence</p>
          <p className="text-xs text-warm-white/60 mt-1">Loading...</p>
        </div>
      </div>
    </div>
  );
}
