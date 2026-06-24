import { useState } from "react";
import { Package, Network, Headphones } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

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

export default function JourneySection() {
  const { t } = useLanguage();
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes: TimelineNode[] = [
    {
      id: 1,
      label: t.journey_node1_label,
      title: t.journey_node1_title,
      description: t.journey_node1_desc,
      items: t.journey_node1_items,
    },
    {
      id: 2,
      label: t.journey_node2_label,
      title: t.journey_node2_title,
      description: t.journey_node2_desc,
    },
    {
      id: 3,
      label: t.journey_node3_label,
      title: t.journey_node3_title,
      description: t.journey_node3_desc,
      items: t.journey_node3_items,
    },
    {
      id: 4,
      label: t.journey_node4_label,
      title: t.journey_node4_title,
      description: t.journey_node4_desc,
      circles: [
        { label: t.journey_node4_items[0], icon: <Package size={16} /> },
        { label: t.journey_node4_items[1], icon: <Network size={16} /> },
        { label: t.journey_node4_items[2], icon: <Headphones size={16} /> },
      ],
    },
  ];

  return (
    <section className="min-h-screen text-white flex flex-col items-center justify-center px-12 py-20">
      {/* Header */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-black bg-gradient-to-r from-brand-pink to-brand-violet bg-clip-text text-transparent mb-4">
          {t.journey_heading}
        </h2>
        <p className="text-white/60 text-lg">{t.journey_subheading}</p>
      </div>

      {/* Timeline */}
      <div className="relative w-full max-w-5xl">
        {/* Cards row */}
        <div className="relative flex justify-between mb-12 h-64">
          {nodes.map((node) => (
            <div
              key={node.id}
              className={`w-[22%] bg-brand-card border border-brand-purple rounded-xl p-5 transition-all duration-300 flex flex-col justify-between ${
                activeNode === node.id
                  ? "opacity-100 translate-y-0 border-brand-pink shadow-[0_0_20px_rgba(233,30,140,0.3)]"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <div>
                <h3 className="text-brand-pink font-bold text-sm mb-2">
                  {node.title}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed">
                  {node.description}
                </p>
              </div>

              {node.items && (
                <ul className="mt-3 space-y-1">
                  {node.items.map((item) => (
                    <li
                      key={item}
                      className="text-brand-violet text-xs flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand-pink inline-block" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

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
          <div className="absolute bottom-10 left-0 right-4 h-px bg-gradient-to-r from-brand-purple via-brand-pink to-brand-violet" />
          <div
            className="absolute bottom-8.5 right-2 w-0 h-0
            border-t-[6px] border-t-transparent
            border-b-[6px] border-b-transparent
            border-l-[10px] border-l-brand-violet"
          />
          <div className="relative w-[95%] flex justify-between">
            {nodes.map((node) => (
              <div
                key={node.id}
                className="flex flex-col items-center cursor-pointer group"
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 transition-all duration-300 z-10 -mt-[10px] top-5 ${
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
