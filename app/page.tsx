import React from "react";

export default function Home() {
  const nodes = [
    {
      id: "aws",
      name: "AWS",
      type: "Origin Server",
      location: "us-east-1",
      status: "Healthy",
    },
    {
      id: "cloudflare",
      name: "Cloudflare",
      type: "WAF & DDoS",
      location: "Global Edge",
      status: "Protected",
    },
    {
      id: "meshscale",
      name: "Meshscale Edge",
      type: "Smart Proxy",
      location: "SYD-01",
      status: "Optimized",
    },
    {
      id: "client",
      name: "You",
      type: "Client Browser",
      location: "Verified",
      status: "Connected",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-black text-white font-sans selection:bg-zinc-800 antialiased">
      {/* Background Subtle Mesh Grid & Radial Glow */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Top Header */}
      <header className="relative z-10 flex w-full max-w-6xl items-center justify-between px-6 py-6 text-xs text-zinc-500 font-mono border-b border-zinc-900/60">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-zinc-300 font-medium">MESHSCALE SECURITY GATEWAY</span>
        </div>
        <div>HTTP/3 • TLS 1.3</div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 flex flex-1 w-full max-w-5xl flex-col items-center justify-center px-6 py-12 text-center">
        
        {/* Status Pills */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1 text-xs font-mono text-zinc-400 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Checking connection integrity...
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white max-w-2xl">
          Establishing Secure Route
        </h1>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-lg font-light">
          Your request is passing through modern edge security layers before reaching the destination server.
        </p>

        {/* Pipeline Diagram Box */}
        <div className="mt-14 w-full rounded-2xl border border-zinc-800/80 bg-black p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-4 relative z-10">
            
            {nodes.map((node, index) => (
              <div key={node.id} className="relative flex flex-col items-center">
                
                {/* Horizontal Connecting Laser Line (Desktop) */}
                {index < nodes.length - 1 && (
                  <div className="hidden sm:block absolute top-7 left-[55%] w-[90%] h-[1px] bg-zinc-800 z-0 overflow-hidden">
                    <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-[shimmer_2s_infinite]" />
                  </div>
                )}

                {/* Vertical Connecting Line (Mobile) */}
                {index < nodes.length - 1 && (
                  <div className="sm:hidden my-4 h-8 w-[1px] bg-zinc-800 relative overflow-hidden">
                    <div className="w-full h-1/2 bg-gradient-to-b from-transparent via-emerald-400 to-transparent animate-[shimmerMobile_2s_infinite]" />
                  </div>
                )}

                {/* Node Box */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950 text-zinc-300 shadow-lg group hover:border-zinc-700 hover:text-white transition-all duration-300">
                  {/* Subtle Node Glowing Outer Ring */}
                  <div className="absolute inset-0 rounded-xl bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* SVG Icons tailored for each node */}
                  {node.id === "aws" && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                    </svg>
                  )}
                  {node.id === "cloudflare" && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  )}
                  {node.id === "meshscale" && (
                    <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  )}
                  {node.id === "client" && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0v11.25s0 0 0 0M3 5.25v11.25s0 0 0 0" />
                    </svg>
                  )}
                </div>

                {/* Node Labels */}
                <div className="mt-4 flex flex-col items-center">
                  <span className="text-sm font-medium text-zinc-200 tracking-tight">
                    {node.name}
                  </span>
                  <span className="mt-1 text-xs text-zinc-500 font-mono">
                    {node.type}
                  </span>
                  <span className="mt-0.5 text-[10px] text-zinc-600 font-mono">
                    {node.location}
                  </span>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Minimal Metrics Dashboard */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full text-left font-mono text-xs">
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/50 p-4">
            <span className="block text-zinc-600 text-[10px] uppercase tracking-wider">Ray ID</span>
            <span className="mt-1 block text-zinc-300">8d92f1a09b32c8e1</span>
          </div>
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/50 p-4">
            <span className="block text-zinc-600 text-[10px] uppercase tracking-wider">Latency</span>
            <span className="mt-1 block text-emerald-400">12ms</span>
          </div>
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/50 p-4">
            <span className="block text-zinc-600 text-[10px] uppercase tracking-wider">IP Address</span>
            <span className="mt-1 block text-zinc-300">192.0.2.14</span>
          </div>
          <div className="rounded-xl border border-zinc-900 bg-zinc-950/50 p-4">
            <span className="block text-zinc-600 text-[10px] uppercase tracking-wider">Security</span>
            <span className="mt-1 block text-zinc-300">WAF Active</span>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 flex w-full max-w-6xl items-center justify-between px-6 py-6 text-[11px] text-zinc-600 font-mono border-t border-zinc-900/60">
        <div>
          Powered by <span className="text-zinc-400">Meshscale Architecture</span>
        </div>
        <div>
          Status: <span className="text-emerald-500">100% Operational</span>
        </div>
      </footer>
    </div>
  );
}
