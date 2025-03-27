"use client";
import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  Link,
} from "@mui/material";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // 呼叫後端 API
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "grey.100",
        p: 3,
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            align="center"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            黃文亮 (Matt Huang)
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            前端開發工程師
          </Typography>

          {/* 顯示來自後端的訊息 */}
          <Typography
            variant="body1"
            align="center"
            color="textPrimary"
            sx={{ mt: 2 }}
          >
            {message}
          </Typography>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              關於我
            </Typography>
            <Typography variant="body1" color="textSecondary">
              這裡可以放一段簡短的自我介紹。
            </Typography>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              技能
            </Typography>
            <List>
              <ListItem>Next.js</ListItem>
              <ListItem>React</ListItem>
              <ListItem>Tailwind CSS</ListItem>
            </List>
          </Box>

          <Box sx={{ mt: 4 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              聯絡方式
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Email: your.email@example.com
            </Typography>
            <Typography variant="body1" color="textSecondary">
              GitHub:{" "}
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener"
                color="primary"
              >
                yourusername
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}