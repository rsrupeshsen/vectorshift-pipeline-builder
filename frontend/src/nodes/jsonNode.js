//JSONNode.js

import { useState } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";

export const JSONNode = ({ id }) => {
  const [key, setKey] = useState("");

  return (
    <BaseNode
      title="JSON"
      handles={[
        { type: "target", position: Position.Left, id: `${id}-input` },
        { type: "source", position: Position.Right, id: `${id}-value` },
      ]}
    >
      <input
        value={key}
        onChange={(e) => setKey(e.target.value)}
        placeholder="json.key"
        className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition"
      />
    </BaseNode>
  );
};
