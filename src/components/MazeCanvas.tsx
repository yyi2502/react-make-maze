import { useEffect, useRef, type FC } from "react";
import { generateMaze, type Cell } from "../utils/generateMaze";

type MazeCanvasProps = {
  key: number;
  level: number;
};

const MazeCanvas: FC<MazeCanvasProps> = ({ key, level }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cellSize = 20;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const cols = level;
    const rows = level;
    const dpr = window.devicePixelRatio || 1; // デバイスピクセル比
    const width = cols * cellSize;
    const height = rows * cellSize;

    canvas.style.width = `${width}px`; // スタイル上の幅
    canvas.style.height = `${height}px`; // スタイル上の高さ
    canvas.width = width * dpr; // 実ピクセル数
    canvas.height = height * dpr;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(dpr, dpr); // スケーリングを合わせる

    const grid: Cell[][] = generateMaze(cols, rows);

    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;

    for (const row of grid) {
      for (const cell of row) {
        const x = cell.x * cellSize;
        const y = cell.y * cellSize;

        if (cell.walls.top) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x + cellSize, y);
          ctx.stroke();
        }
        if (cell.walls.right) {
          ctx.beginPath();
          ctx.moveTo(x + cellSize, y);
          ctx.lineTo(x + cellSize, y + cellSize);
          ctx.stroke();
        }
        if (cell.walls.bottom) {
          ctx.beginPath();
          ctx.moveTo(x + cellSize, y + cellSize);
          ctx.lineTo(x, y + cellSize);
          ctx.stroke();
        }
        if (cell.walls.left) {
          ctx.beginPath();
          ctx.moveTo(x, y + cellSize);
          ctx.lineTo(x, y);
          ctx.stroke();
        }
      }
    }

    /**
     * スタート位置（左上）
     */
    ctx.fillStyle = "green";
    ctx.font = `${cellSize * 0.2}px sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("スタート", cellSize / 2, cellSize / 2);

    /**
     * ゴール位置（右下）
     */
    ctx.fillStyle = "red";
    ctx.fillText("ゴール", width - cellSize / 2, height - cellSize / 2);
  }, [key]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", margin: "20px auto 0" }}
    />
  );
};

export default MazeCanvas;
