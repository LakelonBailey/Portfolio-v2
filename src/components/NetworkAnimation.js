import React, { useEffect, useRef } from 'react';
const NetworkAnimation = ({ parentRef }) => {
    const getNodesCount = () => {
        if (window.innerWidth < 500) {
            return 50;
        }
        else if (window.innerWidth < 768) {
            return 75;
        }
        return 100;
    }

  const canvasRef = useRef(null);
  const nodes = [];
  const edges = [];
  const nodesCount = getNodesCount();

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
    node.x += node.vx;
    node.y += node.vy;

    if (node.x < 0 || node.x > width) node.vx = -node.vx;
    if (node.y < 0 || node.y > height) node.vy = -node.vy;
  };

    // Draw edge function
    const drawEdge = (ctx, edge) => {
        const dx = edge.node1.x - edge.node2.x;
        const dy = edge.node1.y - edge.node2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Check for maximum distance for displaying edge
        const maxDist = 75; // Adjust this value as needed

        if(dist < maxDist){
        ctx.lineWidth = Math.max(.5, 5 / dist);

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
    ctx.arc(node.x, node.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  };

  // Drawing loop function
  const draw = (ctx, width, height) => {
    ctx.clearRect(0, 0, width, height);

    for (let node of nodes) {
      moveNode(node, width, height);
    }

    for (let edge of edges) {
      drawEdge(ctx, edge);
    }

    for (let node of nodes) {
      drawNode(ctx, node);
    }

    requestAnimationFrame(() => draw(ctx, width, height));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const {width, height} = entry.contentRect;
        canvas.width = width;
        canvas.height = height;

        // Create nodes
        for (let i = 0; i < nodesCount; i++) {
          nodes.push(createNode(i, width, height));
        }

        // Create edges
        for (let i = 0; i < nodesCount; i++) {
          for (let j = i + 1; j < nodesCount; j++) {
            edges.push(createEdge(nodes[i], nodes[j]));
          }
        }

        draw(ctx, width, height);
      }
    });

    resizeObserver.observe(parentRef.current);

    // Clean up function
    return () => {
      resizeObserver.disconnect();
    };
  }, [parentRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: .20,
        zIndex: -1
      }}
    />
  );
};

export default NetworkAnimation;
