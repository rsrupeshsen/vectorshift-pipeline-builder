import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg border-b border-gray-800 py-4">
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-4 ">
          <DraggableNode type="customInput" label="Input" />
          <DraggableNode type="llm" label="LLM" />
          <DraggableNode type="customOutput" label="Output" />
          <DraggableNode type="text" label="Text" />
          <DraggableNode type="api" label="API" />
          <DraggableNode type="math" label="Math" />
          <DraggableNode type="filter" label="Filter" />
          <DraggableNode type="condition" label="Condition" />
          <DraggableNode type="json" label="JSON" />
        </div>
      </div>
    </div>
  );
};
