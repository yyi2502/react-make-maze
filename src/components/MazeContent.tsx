import { useState } from "react";
import MazeSetting from "./MazeSetting";
import MazeCanvas from "./MazeCanvas";
import { Box, Button, Typography } from "@mui/material";

const MazeContent = () => {
  const [level, setLevel] = useState<number>(10);
  const [generateKey, setGenerateKey] = useState<number>(0);

  const handleGenerate = () => {
    setGenerateKey((prev) => prev + 1); // keyを更新して再マウント
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h6" mb={2} mt={5}>
          迷路サイズ（{level}×{level}）
        </Typography>
        <MazeSetting
          level={level}
          setLevel={setLevel}
          onGenerate={handleGenerate}
        />

        {/* 生成されたときだけ Maze を表示 */}
        {generateKey > 0 && (
          <>
            <MazeCanvas key={generateKey} level={level} />

            <Button
              variant="outlined"
              onClick={() => window.print()}
              sx={{ mt: 2 }}
            >
              迷路を印刷する
            </Button>
          </>
        )}
      </Box>
    </>
  );
};

export default MazeContent;
