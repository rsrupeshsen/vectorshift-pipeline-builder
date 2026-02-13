//MathNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";

export const MathNode = ({ id }) => {
  const [operation, setOperation] = useState("add");

  return (
    <BaseNode
      title="Math"
      handles={[
        {
          type: "target",
          position: Position.Left,
          id: `${id}-a`,
          style: { top: "30%" },
        },
        {
          type: "target",
          position: Position.Left,
          id: `${id}-b`,
          style: { top: "70%" },
        },
        { type: "source", position: Position.Right, id: `${id}-result` },
      ]}
    >
      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition"
      >
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
    </BaseNode>
  );
};
