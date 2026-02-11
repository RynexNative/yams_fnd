import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  MessageSquare,
  Send,
  Paperclip,
  MoreVertical,
  Star,
  Trash2,
  Archive,
  Users,
  User,
  Bell,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const conversations = [
  {
    id: 1,
    name: "Grade 8A Parents",
    type: "group",
    lastMessage: "Meeting scheduled for next Friday",
    time: "10:30 AM",
    unread: 3,
    avatar: "",
  },
  {
    id: 2,
    name: "Mrs. Johnson",
    type: "direct",
    lastMessage: "Thank you for the update on Alice's progress",
    time: "Yesterday",
    unread: 0,
    avatar: "",
  },
  {
    id: 3,
    name: "Staff Announcements",
    type: "announcement",
    lastMessage: "New curriculum guidelines available",
    time: "Yesterday",
    unread: 1,
    avatar: "",
  },
  {
    id: 4,
    name: "Mr. Smith",
    type: "direct",
    lastMessage: "Can we discuss Bob's attendance?",
    time: "2 days ago",
    unread: 0,
    avatar: "",
  },
  {
    id: 5,
    name: "Department Heads",
    type: "group",
    lastMessage: "Budget meeting tomorrow at 2 PM",
    time: "3 days ago",
    unread: 0,
    avatar: "",
  },
];

const messages = [
  {
    id: 1,
    sender: "Mrs. Johnson",
    content:
      "Hello! I wanted to check on Alice's progress in mathematics this term.",
    time: "10:15 AM",
    isMe: false,
  },
  {
    id: 2,
    sender: "You",
    content:
      "Hi Mrs. Johnson! Alice has been doing very well. She's shown significant improvement in algebra and is now one of the top performers in the class.",
    time: "10:20 AM",
    isMe: true,
  },
  {
    id: 3,
    sender: "Mrs. Johnson",
    content:
      "That's wonderful to hear! She's been practicing a lot at home. Is there any area she could improve on?",
    time: "10:25 AM",
    isMe: false,
  },
  {
    id: 4,
    sender: "You",
    content:
      "Her geometry could use some more practice. I'd recommend focusing on angle relationships and proofs. I can send some extra worksheets for practice.",
    time: "10:28 AM",
    isMe: true,
  },
  {
    id: 5,
    sender: "Mrs. Johnson",
    content: "Thank you for the update on Alice's progress",
    time: "10:30 AM",
    isMe: false,
  },
  {
    id: 6,
    sender: "Mrs. Johnson",
    content:
      "Hello! I wanted to check on Alice's progress in mathematics this term.",
    time: "10:15 AM",
    isMe: false,
  },
  {
    id: 7,
    sender: "You",
    content:
      "Hi Mrs. Johnson! Alice has been doing very well. She's shown significant improvement in algebra and is now one of the top performers in the class.",
    time: "10:20 AM",
    isMe: true,
  },
  {
    id: 8,
    sender: "Mrs. Johnson",
    content:
      "That's wonderful to hear! She's been practicing a lot at home. Is there any area she could improve on?",
    time: "10:25 AM",
    isMe: false,
  },
  {
    id: 9,
    sender: "You",
    content:
      "Her geometry could use some more practice. I'd recommend focusing on angle relationships and proofs. I can send some extra worksheets for practice.",
    time: "10:28 AM",
    isMe: true,
  },
  {
    id: 10,
    sender: "Mrs. Johnson",
    content: "Thank you for the update on Alice's progress",
    time: "10:30 AM",
    isMe: false,
  },
];

const Messages = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedConversation, setSelectedConversation] = useState(
    conversations[1]
  );
  const [newMessage, setNewMessage] = useState("");

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getConversationIcon = (type: string) => {
    switch (type) {
      case "group":
        return <Users className="h-4 w-4" />;
      case "announcement":
        return <Bell className="h-4 w-4" />;
      default:
        return <User className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6 p-[1em]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold font-display">
            Messages
          </h1>
          <p className="text-muted-foreground mt-1">
            Communicate with parents, students, and staff
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 gap-2">
          <Plus className="h-4 w-4" />
          New Message
        </Button>
      </motion.div>

      {/* Messages Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="overflow-hidden ">
          <div className="grid grid-cols-1 md:grid-cols-3 h-[580px]">
            {/* Conversations List */}
            <div className="border-r border-border">
              <div className="p-4 border-b border-border">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <div className="px-4 pt-2">
                  <TabsList className="w-full">
                    <TabsTrigger value="all" className="flex-1">
                      All
                    </TabsTrigger>
                    <TabsTrigger value="unread" className="flex-1">
                      Unread
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="all" className="mt-0">
                  <ScrollArea className="h-[580px]">
                    <div className="p-2">
                      {filteredConversations.map((conv) => (
                        <button
                          key={conv.id}
                          onClick={() => setSelectedConversation(conv)}
                          className={`w-full p-3 rounded-lg flex items-start gap-3 transition-colors ${
                            selectedConversation?.id === conv.id
                              ? "bg-primary/10"
                              : "hover:bg-muted"
                          }`}
                        >
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={conv.avatar} />
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {getConversationIcon(conv.type)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0 text-left">
                            <div className="flex items-center justify-between">
                              <p className="font-medium truncate">{conv.name}</p>
                              <span className="text-xs text-muted-foreground">
                                {conv.time}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground truncate mt-0.5">
                              {conv.lastMessage}
                            </p>
                          </div>
                          {conv.unread > 0 && (
                            <Badge className="bg-primary text-primary-foreground shrink-0">
                              {conv.unread}
                            </Badge>
                          )}
                        </button>
                      ))}
                    </div>
                  </ScrollArea>
                </TabsContent>

                <TabsContent value="unread" className="mt-0">
                  <ScrollArea className="h-[580px]">
                    <div className="p-2">
                      {filteredConversations
                        .filter((c) => c.unread > 0)
                        .map((conv) => (
                          <button
                            key={conv.id}
                            onClick={() => setSelectedConversation(conv)}
                            className={`w-full p-3 rounded-lg flex items-start gap-3 transition-colors ${
                              selectedConversation?.id === conv.id
                                ? "bg-primary/10"
                                : "hover:bg-muted"
                            }`}
                          >
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={conv.avatar} />
                              <AvatarFallback className="bg-primary/10 text-primary">
                                {getConversationIcon(conv.type)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0 text-left">
                              <div className="flex items-center justify-between">
                                <p className="font-medium truncate">
                                  {conv.name}
                                </p>
                                <span className="text-xs text-muted-foreground">
                                  {conv.time}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground truncate mt-0.5">
                                {conv.lastMessage}
                              </p>
                            </div>
                            <Badge className="bg-primary text-primary-foreground shrink-0">
                              {conv.unread}
                            </Badge>
                          </button>
                        ))}
                    </div>
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </div>

            {/* Chat Area */}
            <div className="col-span-2 flex flex-col h-[580px]">
              {/* Chat Header */}
              <div className="p-4 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {getConversationIcon(selectedConversation?.type || "direct")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{selectedConversation?.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {selectedConversation?.type === "group"
                        ? "Group Chat"
                        : selectedConversation?.type === "announcement"
                        ? "Announcement Channel"
                        : "Direct Message"}
                    </p>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem className="gap-2">
                      <Star className="h-4 w-4" /> Star Conversation
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2">
                      <Archive className="h-4 w-4" /> Archive
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2 text-destructive">
                      <Trash2 className="h-4 w-4" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4 h-[10px]">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.isMe ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                          message.isMe
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        {!message.isMe && (
                          <p className="text-xs font-medium mb-1">
                            {message.sender}
                          </p>
                        )}
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.isMe
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground"
                          }`}
                        >
                          {message.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Message Input */}
              <div className="p-4 border-t border-border">
                <div className="flex items-end gap-2">
                  <Button variant="ghost" size="icon" className="shrink-0">
                    <Paperclip className="h-5 w-5" />
                  </Button>
                  <Textarea
                    placeholder="Type a message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="min-h-[44px] max-h-[120px] resize-none"
                    rows={1}
                  />
                  <Button
                    size="icon"
                    className="bg-gradient-primary shrink-0"
                    disabled={!newMessage.trim()}
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Messages;
