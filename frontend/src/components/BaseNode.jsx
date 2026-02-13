import { Handle } from "reactflow";
import { motion } from "framer-motion";



export const BaseNode = ({ title, handles = [], children, style = {} }) => {
  return (
    <div
      style={style}
      className="
    min-w-[240px]
    p-4
    bg-white
    border border-gray-200
    rounded-2xl
    shadow-lg
    hover:shadow-xl
    hover:-translate-y-1
    transition
    text-sm
    relative
    overflow-hidden
  "
    >
      <div className="absolute left-0 top-0 h-full w-1 bg-blue-500"></div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      ></motion.div>

      {/* Handles */}
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={{
            width: 14,
            height: 14,
            background: "#111827",
            border: "2px solid white",
            borderRadius: "50%",
            cursor: "crosshair",
            ...handle.style,
          }}
        />
      ))}

      {/* Content */}
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
};
