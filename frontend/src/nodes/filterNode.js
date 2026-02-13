//FilterNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";

export const FilterNode = ({ id }) => {
  const [condition, setCondition] = useState("");

  return (
    <BaseNode
      title="Filter"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-input` },
        { type: "source", position: Position.Right, id: `${id}-output` },
      ]}
    >
      <input
        value={condition}
        onChange={(e) => setCondition(e.target.value)}
        placeholder="e.g. age > 18"
        className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition"
      />
    </BaseNode>
  );
};
