"use client";
import { Box, MenuItem, Typography, Grid } from "@mui/material";
import RootLayout from "./layout";
import { useState } from "react";
import MenuUserInfo from "./components/MenuUserInfo";
import PlaylistTag from "./components/PlaylistTag";
import PlayListItem from "./components/PlayListItem";
export default function Home() {
  const drawerWidth = 240;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const playlistArray = [
    {
      title: "Chill Mix",
      id: 1,
      image: "/Album Cover (1).png",
      artist: "Julia Wolf, Khalid, ayokay and more",
    },
    {
      title: "Pop Mix",
      id: 2,
      image: "/Album Cover (2).png",
      artist: "Hey Violet, VÉRITÉ, Timeflies and more",
    },
    {
      title: "Daily Mix 1",
      id: 3,
      image: "/Album Cover (3).png",
      artist: "WizKid, Asake, Tiwa Savage and more",
    },
    {
      title: "Daily Mix 5",
      id: 4,
      image: "/Album Cover (4).png",
      artist: "Joywave, The xx, The Neighbourhood and...",
    },
    {
      title: "Folk & Acoustic Mix",
      id: 5,
      image: "/Album Cover (5).png",
      artist: "Ayra Starr, Lil Kesh, Ed Sheeran and more",
    },
    {
      title: "Daily Mix 4",
      id: 6,
      image: "/Album Cover.png",
      artist: "Canyon City, Crooked Still, Gregory Alan...",
    },
  ];
  const playlistItemArray = [
    {
      title: "Chill Mix",
      id: 1,
      image: "/Album Cover (1).png",
      artist: "Julia Wolf, Khalid, ayokay and more",
    },
    {
      title: "Pop Mix",
      id: 2,
      image: "/Album Cover (2).png",
      artist: "Hey Violet, VÉRITÉ, Timeflies and more",
    },
    {
      title: "Daily Mix 1",
      id: 3,
      image: "/Album Cover (3).png",
      artist: "WizKid, Asake, Tiwa Savage and more",
    },
    {
      title: "Daily Mix 5",
      id: 4,
      image: "/Album Cover (4).png",
      artist: "Joywave, The xx, The Neighbourhood and...",
    },
    {
      title: "Folk & Acoustic Mix",
      id: 5,
      image: "/Album Cover (5).png",
      artist: "Ayra Starr, Lil Kesh, Ed Sheeran and more",
    },
  ];
  const renderPlaylistTag = (playlist: typeof playlistArray) => (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {playlist.map((tag, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
          <MenuItem sx={{ p: 0 }}>
            <PlaylistTag image={tag.image} title={tag.title} id={tag.id} />
          </MenuItem>
        </Grid>
      ))}
    </Grid>
  );
  const renderPlayListItem = (playlist: typeof playlistItemArray) => (
    <Grid
      container
      spacing={{ xs: 2, md: 2 }}
      columns={{ xs: 4, sm: 8, md: 15 }}
    >
      {playlist.map((item, index) => (
        <Grid item xs={2} sm={4} md={3} key={index}>
          <MenuItem sx={{ p: 0 }}>
            <PlayListItem
              image={item.image}
              title={item.title}
              artist={item.artist}
              id={item.id}
            />
          </MenuItem>
        </Grid>
      ))}
    </Grid>
  );
  return (
    <RootLayout isDrawer={true}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundImage: `url(/Linear.png)`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top top",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <MenuUserInfo />
          </Box>
          <Box>
            <Box py={3}>
              <Typography variant="h3">Good afternoon</Typography>
            </Box>
            {renderPlaylistTag(playlistArray)}
          </Box>
          <Box>
            <Box py={4}>
              <Typography variant="caption">Your top mixes</Typography>
            </Box>
            {renderPlayListItem(playlistItemArray)}{" "}
          </Box>
          <Box>
            <Box py={3}>
              <Typography variant="caption">Made for you</Typography>
            </Box>
            {renderPlayListItem(playlistItemArray)}
          </Box>
          <Box>
            <Box py={3}>
              <Typography variant="caption">Recently played</Typography>
            </Box>
            {renderPlayListItem(playlistItemArray)}
          </Box>
          <Box>
            <Box py={3}>
              <Typography variant="caption">Jump back in</Typography>
            </Box>
            {renderPlayListItem(playlistItemArray)}
          </Box>
          <Box>
            <Box py={3}>
              <Typography variant="caption">Uniquely yours</Typography>
            </Box>
            {renderPlayListItem(playlistItemArray)}
          </Box>
          <Box>
            <Box py={3}>
              <Typography variant="caption">Just the hits</Typography>
            </Box>
            {renderPlayListItem(playlistItemArray)}
          </Box>
        </Box>
      </Box>
    </RootLayout>
  );
}
