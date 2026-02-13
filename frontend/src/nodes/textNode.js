//textNodes.js

import { useState, useEffect } from "react";
import { Position } from "reactflow";
import { BaseNode } from "../components/BaseNode";

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState([]);

  useEffect(() => {
    const regex = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;
    const matches = [...text.matchAll(regex)].map((match) => match[1]);
    const uniqueVars = [...new Set(matches)];
    setVariables(uniqueVars);
  }, [text]);

  return (
    <BaseNode
      title="Text"
      handles={[
        ...variables.map((variable) => ({
          type: "target",
          position: Position.Left,
          id: `${id}-${variable}`,
        })),
        {
          type: "source",
          position: Position.Right,
          id: `${id}-output`,
        },
      ]}
    >
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
        className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition"
      />
    </BaseNode>
  );
};
