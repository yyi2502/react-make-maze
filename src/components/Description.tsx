import { Box, Container } from "@mui/material";

export default function Description() {
  return (
    <Container>
      <Box mt={5}>
        <p>ボタンを押すたびに新しい迷路が生成されます。</p>
        <p>難易度はスライドで調整可能です。</p>
        <p>印刷してお子さまの運筆練習におすすめです。</p>
      </Box>
    </Container>
  );
}
