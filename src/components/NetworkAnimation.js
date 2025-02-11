import React, { useCallback, useEffect, useRef } from "react";
const NetworkAnimation = ({ parentRef }) => {
  const getNodesCount = () => {
    if (window.innerWidth < 500) {
      return 50;
    } else if (window.innerWidth < 768) {
      return 75;
    }
    return 100;
  };

  const canvasRef = useRef(null);

  // Node creation function
  const createNode = (id, width, height) => {
    const node = {
      id,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: Math.random() * 2 - 1,
      vy: Math.random() * 2 - 1,
    };
    return node;
  };

  // Edge creation function
  const createEdge = (node1, node2) => {
    const edge = { node1, node2 };
    return edge;
  };

  // Node movement function
  const moveNode = (node, width, height) => {
    const movementFactor = 2;
    node.x += node.vx * movementFactor;
    node.y += node.vy * movementFactor;

    if (node.x < 0 || node.x > width) node.vx = -node.vx;
    if (node.y < 0 || node.y > height) node.vy = -node.vy;
  };

  // Draw edge function
  const drawEdge = (ctx, edge) => {
    const dx = edge.node1.x - edge.node2.x;
    const dy = edge.node1.y - edge.node2.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // Check for maximum distance for displaying edge
    const maxDist = 125; // Adjust this value as needed

    if (dist < maxDist) {
      ctx.lineWidth = Math.max(1, 10 / dist);

      ctx.beginPath();
      ctx.moveTo(edge.node1.x, edge.node1.y);
      ctx.lineTo(edge.node2.x, edge.node2.y);
      ctx.stroke();

      ctx.lineWidth = 1; // Reset line width
    }
  };

  // Draw node function
  const drawNode = (ctx, node) => {
    ctx.beginPath();
    ctx.arc(node.x, node.y, 5, 0, 2 * Math.PI);
    ctx.fill();
  };

  // Drawing loop function
  const draw = useCallback((attributes, ctx, width, height) => {
    if (!("nodes" in attributes)) {
      return;
    }
    ctx.clearRect(0, 0, width, height);
    for (let node of attributes.nodes) {
      moveNode(node, width, height);
    }

    for (let edge of attributes.edges) {
      drawEdge(ctx, edge);
    }

    for (let node of attributes.nodes) {
      drawNode(ctx, node);
    }

    requestAnimationFrame(() => draw(attributes, ctx, width, height));
  }, []);

  useEffect(() => {
    let canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const attributes = {
      nodes: [],
      edges: [],
    };
    const nodesCount = getNodesCount();
    const resizeObserver = new ResizeObserver((entries) => {
      ctx.reset();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      delete attributes.nodes;
      delete attributes.edges;
      attributes.nodes = [];
      attributes.edges = [];

      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        canvas.width = width;
        canvas.height = height;

        // Create attributes.nodes
        for (let i = 0; i < nodesCount; i++) {
          attributes.nodes.push(createNode(i, width, height));
        }

        // Create attributes.edges
        for (let i = 0; i < nodesCount; i++) {
          for (let j = i + 1; j < nodesCount; j++) {
            attributes.edges.push(
              createEdge(attributes.nodes[i], attributes.nodes[j])
            );
          }
        }

        draw(attributes, ctx, width, height);
      }
    });

    resizeObserver.observe(parentRef.current);

    // Clean up function
    return () => {
      resizeObserver.disconnect();
    };
  }, [parentRef, draw]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.2,
        zIndex: -1,
      }}
    />
  );
};

export default NetworkAnimation;
