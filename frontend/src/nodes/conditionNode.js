//ConditionNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";

export const ConditionNode = ({ id }) => {
  const [expression, setExpression] = useState("");

  return (
    <BaseNode
      title="Condition"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-input` },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-true`,
          style: { top: "30%" },
        },
        {
          type: "source",
          position: Position.Right,
          id: `${id}-false`,
          style: { top: "70%" },
        },
      ]}
    >
      <input
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        placeholder="x > 10"
        className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition"
      />
    </BaseNode>
  );
};
