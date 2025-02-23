import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import { FaPaperPlane } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function ChatBox({ socket }) {
  const [open, setOpen] = useState(false);
  const [sentMessages, setSentMessages] = useState([]);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [input, setInput] = useState("");

  const { user } = useSelector((state) => state.auth); // Get user from Redux

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const sendMessage = () => {
    if (!input.trim() || !user) return; // Prevent sending empty messages or if user is not logged in

    const message = {
      input,
      sender: user.username, // Include sender name
      sent: true,
      id: Date.now(),
    };

    socket.emit("Sent_message", message);
    setSentMessages([...sentMessages, message]);
    setInput("");
  };

  useEffect(() => {
    socket.on("Show_message", (data) => {
      setReceivedMessages((prevMessages) => [
        ...prevMessages,
        { ...data, sent: false },
      ]);
    });

    return () => {
      socket.off("Show_message");
    };
  }, [socket]);

  let allMessages = [...sentMessages, ...receivedMessages].sort(
    (a, b) => a.id - b.id
  );

  return (
    <div>
      <Button variant="contained" onClick={toggleDrawer(true)}>
        Chat with Seller
      </Button>

      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{
            width: "100%",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            p: 2,
            backgroundColor: "#f5f5f5",
          }}
        >
          {/* Chat Messages */}
          <Box
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 1,
              p: 1,
            }}
          >
            {allMessages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  backgroundColor: msg.sent ? "green" : "lightgrey",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "12px",
                  width: "max-content",
                  alignSelf: msg.sent ? "flex-end" : "flex-start",
                }}
              >
                <strong>{msg.sender}: </strong> {msg.input}
              </Box>
            ))}
          </Box>

          {/* Input Field */}
          <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <IconButton onClick={sendMessage} sx={{ ml: 1 }}>
              <FaPaperPlane />
            </IconButton>
          </Box>
        </Box>
      </SwipeableDrawer>
    </div>
  );
}
