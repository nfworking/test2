import React from "react";

export default function Home() {
  const nodes = [
    { name: "AWS", detail: "Origin Server", icon: "☁️" },
    { name: "Cloudflare", detail: "DDoS Protection", icon: "🛡️" },
    { name: "Meshscale Edge", detail: "Routing & Cache", icon: "⚡" },
    { name: "You", detail: "Client Device", icon: "💻" },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-black text-white font-sans selection:bg-zinc-800">
      {/* Background Subtle Gradient Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />

      {/* Main Container */}
      <main className="relative z-10 flex flex-1 w-full max-w-4xl flex-col items-center justify-center px-6 py-16 text-center">
        
        {/* Status Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-400 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          Secure Connection Established
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Connecting to Destination
        </h1>
        <p className="mt-3 text-sm text-zinc-400 max-w-md">
          Verifying security policies and routing your request through our edge network.
        </p>

        {/* Connection Flow Visualizer */}
        <div className="mt-12 w-full max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-950/80 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 relative">
            
            {nodes.map((node, index) => (
              <div key={node.name} className="relative flex flex-col items-center">
                {/* Connecting Line (Desktop) */}
                {index < nodes.length - 1 && (
                  <div className="hidden sm:block absolute top-6 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-700 z-0">
                    <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-pulse" />
                  </div>
                )}

                {/* Node Box */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-xl shadow-inner transition-all hover:border-zinc-700 hover:scale-105">
                  {node.icon}
                </div>

                {/* Node Text */}
                <div className="mt-4 flex flex-col items-center">
                  <span className="text-sm font-semibold text-zinc-200">
                    {node.name}
                  </span>
                  <span className="mt-0.5 text-[11px] text-zinc-500 font-mono">
                    {node.detail}
                  </span>
                </div>

                {/* Connecting Line (Mobile) */}
                {index < nodes.length - 1 && (
                  <div className="sm:hidden my-4 h-6 w-[2px] bg-zinc-800" />
                )}
              </div>
            ))}

          </div>
        </div>

        {/* Technical Details Footer inside Main */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left border-t border-zinc-900 pt-8 w-full max-w-2xl text-xs font-mono text-zinc-500">
          <div>
            <span className="block text-zinc-600 uppercase tracking-wider text-[10px]">Ray ID</span>
            <span className="text-zinc-400">8d92f1a09b32c8e1</span>
          </div>
          <div>
            <span className="block text-zinc-600 uppercase tracking-wider text-[10px]">Latency</span>
            <span className="text-emerald-400">14 ms</span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="block text-zinc-600 uppercase tracking-wider text-[10px]">Security Check</span>
            <span className="text-zinc-400">Passed (TLS 1.3)</span>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 text-center text-xs text-zinc-600 border-t border-zinc-900/50 w-full">
        Protected by <span className="text-zinc-400 font-medium">Meshscale Edge</span> & <span className="text-zinc-400 font-medium">Cloudflare</span>
      </footer>
    </div>
  );
}
