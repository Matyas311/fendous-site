import { useState } from "react";

interface CircleItem {
  label: string;
  icon: React.ReactNode;
}

interface TimelineNode {
  id: number;
  label: string;
  title: string;
  description: string;
  items?: string[];
  circles?: CircleItem[];
}

interface JourneySectionProps {
  heading: string;
  subheading: string;
  nodes: TimelineNode[];
}

export default function JourneySection({
  heading,
  subheading,
  nodes,
}: JourneySectionProps) {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <section className="h-[vh80] text-white flex flex-col items-center justify-center px-12 py-20">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black bg-gradient-to-r from-brand-pink to-brand-violet bg-clip-text text-transparent mb-4">
          {heading}
        </h2>
        <p className="text-white/60 text-lg">{subheading}</p>
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-5xl">
        {/* Cards row */}
        <div className="relative flex justify-between mb-2 h-[150]">
          {nodes.map((node) => (
            <div
              key={node.id}
              className={`w-[35%] bg-brand-card border border-brand-purple rounded-xl p-5 transition-all duration-300 flex flex-col justify-between ${
                activeNode === node.id
                  ? "opacity-100 translate-y-0 border-brand-pink shadow-[0_0_20px_rgba(233,30,140,0.3)]"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <div>
                <h3 className="text-brand-pink font-bold text-[25px] mb-2">
                  {node.title}
                </h3>
                <p className="text-white/60 text-[15px] leading-relaxed">
                  {node.description}
                </p>
              </div>

              {/* Regular list items */}
              {node.items && (
                <ul className="mt-3 space-y-1">
                  {node.items.map((item) => (
                    <li
                      key={item}
                      className="text-brand-violet text-[15px] flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-pink inline-block" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Overlapping circles */}
              {node.circles && (
                <div className="flex items-center justify-center mt-3 -space-x-3">
                  {node.circles.map((circle, i) => (
                    <div
                      key={circle.label}
                      className="w-16 h-16 rounded-full border-2 border-brand-pink flex flex-col items-center justify-center"
                      style={{ zIndex: i + 1 }}
                    >
                      <div className="text-white w-5 h-5">{circle.icon}</div>
                      <span className="text-[8px] text-white/70 tracking-wide uppercase mt-1">
                        {circle.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Line + nodes */}
        <div className="relative flex items-center">
          {/* Line */}
          <div className="absolute left-0 right-4 h-px bg-gradient-to-r from-brand-purple via-brand-pink to-brand-violet" />

          {/* Arrow head */}
          <div
            className="absolute right-0 w-0 h-0
            border-t-[6px] border-t-transparent
            border-b-[6px] border-b-transparent
            border-l-[10px] border-l-brand-violet right-2"
          />

          {/* Nodes */}
          <div className="relative w-[95%] flex justify-between top-5">
            {nodes.map((node) => (
              <div
                key={node.id}
                className="flex flex-col items-center cursor-pointer group"
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 transition-all duration-300 z-10 -mt-[10px] ${
                    activeNode === node.id
                      ? "bg-brand-pink border-brand-pink scale-150 shadow-[0_0_12px_rgba(233,30,140,0.8)]"
                      : "bg-brand-dark border-brand-purple group-hover:border-brand-pink"
                  }`}
                />
                <span className="mt-4 text-xs text-white/50 tracking-widest uppercase text-center group-hover:text-brand-pink transition-colors duration-300">
                  {node.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
