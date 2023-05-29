import React, { useState, useEffect } from 'react';
import FoldingSquare from './FoldingSquare'; // Adjust the import path as necessary
import ShrinkingSquare from './ShrinkingSquare';

const createGrid = (rows, columns) => {
  let grid = [];
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < columns; j++) {
      row.push([false, 'up']); // Initial state of each cube is "not folded"
    }
    grid.push(row);
  }
  return grid;
}

const Grid = () => {
  const rows = 50; // adjust as per your need
  const columns = 100; // adjust as per your need
  const [grid, setGrid] = useState(createGrid(rows, columns));

  useEffect(() => {
    const centerX = Math.floor(rows / 2);
    const centerY = Math.floor(columns / 2);
    foldFromCenter(centerX, centerY, 'up');
  }, []);

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const foldFromCenter = async (x, y, direction) => {
    if (x < 0 || y < 0 || x >= rows || y >= columns) return;
    if (grid[x][y][0]) return;
    let newGrid = [...grid];
    newGrid[x][y] = [true, direction];
    setGrid(newGrid);
    await sleep(1); // adjust delay as per your need

    foldFromCenter(x + 1, y, 'right');
    foldFromCenter(x - 1, y, 'right');
    foldFromCenter(x, y + 1, 'up');
    foldFromCenter(x, y - 1, 'down');
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {grid.map((row, i) => row.map(([isFolded, direction], j) =>
        <ShrinkingSquare key={`${i}-${j}`}fold={isFolded} />
      ))}
    </div>
  );
};

export default Grid;
