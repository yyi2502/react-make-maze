import { type FC } from "react";
import { Box, Button, Slider } from "@mui/material";

type MazeSettingProps = {
  level: number;
  setLevel: (val: number) => void;
  onGenerate: () => void;
};

const MazeSetting: FC<MazeSettingProps> = ({ level, setLevel, onGenerate }) => {
  /**
   * スライダーの値を変更
   */
  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    setLevel(newValue as number);
  };

  return (
    <>
      <Box sx={{ width: 300 }}>
        <Slider
          aria-label="mazeLevel"
          valueLabelDisplay="auto"
          shiftStep={1}
          step={1}
          marks
          min={5}
          max={50}
          onChange={handleSliderChange}
          value={level}
        />
      </Box>
      <Button variant="contained" onClick={onGenerate}>
        迷路を生成
      </Button>
    </>
  );
};
export default MazeSetting;
