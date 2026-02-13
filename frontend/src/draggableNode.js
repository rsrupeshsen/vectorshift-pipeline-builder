// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      draggable
      className="px-7 py-4 
  bg-gray-800
  text-white
  rounded-2xl
  hover:bg-gray-700
  hover:scale-105
  active:scale-95
  transition-all
  duration-200
  cursor-grab
  active:cursor-grabbing
  text-base
  font-semibold
  tracking-wide
  shadow-md"
    >
      {label}
    </div>
  );
};
