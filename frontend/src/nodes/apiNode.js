//apiNOdes.js

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";

export const APINode = ({ id }) => {
  const [endpoint, setEndpoint] = useState("");

  return (
    <BaseNode
      title="API"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-input` },
        { type: "source", position: Position.Right, id: `${id}-response` },
      ]}
    >
      <input
        value={endpoint}
        onChange={(e) => setEndpoint(e.target.value)}
        placeholder="https://api.example.com"
        className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition"
      />
    </BaseNode>
  );
};
