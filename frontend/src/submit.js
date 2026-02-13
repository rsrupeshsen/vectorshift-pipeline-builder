
// submit.js
import { useStore } from "./store";

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const handleSubmit = async () => {
    const pipelineData = {
      nodes: nodes.map((node) => ({
        id: node.id,
        type: node.type,
        position: node.position,
        data: node.data,
      })),
      edges: edges.map((edge) => ({
        id: edge.id,
        source: edge.source,
        target: edge.target,
        sourceHandle: edge.sourceHandle,
        targetHandle: edge.targetHandle,
      })),
    };

    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pipelineData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      alert(
        `Pipeline submitted successfully!\n\nNodes: ${result.num_nodes}\nEdges: ${result.num_edges}\nIs DAG: ${result.is_dag}`
      );
    } catch (error) {
      console.error("Error submitting pipeline:", error);
      alert(
        `Error: ${error.message}\n\nMake sure the backend server is running on http://localhost:8000`
      );
    }
  };

  return (
    <div className="flex justify-center py-10">
      <button
        type="button"
        onClick={handleSubmit}
        className="
          px-10 py-3
          bg-gray-900
          text-white
          rounded-full
          shadow-lg
          hover:bg-black
          hover:shadow-2xl
          active:scale-95
          transition-all
          duration-200
          font-semibold
          tracking-wide
        "
      >
        Submit Pipeline
      </button>
    </div>
  );
};
