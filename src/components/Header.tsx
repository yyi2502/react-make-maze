import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h5">迷路生成アプリ</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
