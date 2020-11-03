import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <IconButton>
          <Avatar />
        </IconButton>
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          {/* <IconButton> */}
          <SearchOutlinedIcon />
          {/* </IconButton> */}
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        <SidebarChat />

        <SidebarChat />

        <SidebarChat />

        <SidebarChat />

        <SidebarChat />

        <SidebarChat />

        <SidebarChat />

        <SidebarChat />
      </div>
    </div>
  );
}
