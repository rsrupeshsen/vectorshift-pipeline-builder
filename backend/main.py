from fastapi import FastAPI, Body
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
async def parse_pipeline(data: dict = Body(...)):
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])

    num_nodes = len(nodes)
    num_edges = len(edges)

    # Build adjacency list
    graph = {node["id"]: [] for node in nodes}
    for edge in edges:
        source = edge["source"]
        target = edge["target"]
        if source in graph:
            graph[source].append(target)

    # Cycle detection (DFS)
    visited = set()
    recursion_stack = set()

    def dfs(node):
        if node in recursion_stack:
            return False
        if node in visited:
            return True

        visited.add(node)
        recursion_stack.add(node)

        for neighbor in graph.get(node, []):
            if not dfs(neighbor):
                return False

        recursion_stack.remove(node)
        return True

    is_dag = all(dfs(node) for node in graph)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
