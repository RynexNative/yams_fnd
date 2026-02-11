import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Video,
  Calendar,
  Clock,
  Users,
  MapPin,
  MoreVertical,
  Edit,
  Trash2,
  Eye,
  Link,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const meetings = [
  {
    id: 1,
    title: "Parent-Teacher Conference",
    type: "Conference",
    date: "2024-03-01",
    time: "10:00 AM - 12:00 PM",
    location: "Main Hall",
    isVirtual: false,
    attendees: 45,
    status: "upcoming",
    description: "Quarterly progress discussion with parents",
  },
  {
    id: 2,
    title: "Staff Meeting",
    type: "Staff",
    date: "2024-02-28",
    time: "3:00 PM - 4:30 PM",
    location: "Conference Room A",
    isVirtual: true,
    meetingLink: "https://meet.example.com/staff",
    attendees: 25,
    status: "upcoming",
    description: "Weekly staff coordination meeting",
  },
  {
    id: 3,
    title: "Department Heads Sync",
    type: "Department",
    date: "2024-02-27",
    time: "2:00 PM - 3:00 PM",
    location: "Virtual",
    isVirtual: true,
    meetingLink: "https://meet.example.com/dept",
    attendees: 8,
    status: "completed",
    description: "Monthly department heads coordination",
  },
  {
    id: 4,
    title: "Student Council Meeting",
    type: "Student",
    date: "2024-02-26",
    time: "1:00 PM - 2:00 PM",
    location: "Student Center",
    isVirtual: false,
    attendees: 15,
    status: "completed",
    description: "Monthly student council discussion",
  },
];

const stats = [
  { title: "This Week", value: "5", subtitle: "meetings" },
  { title: "Upcoming", value: "12", subtitle: "scheduled" },
  { title: "Attendees", value: "280", subtitle: "expected" },
  { title: "Completion", value: "94%", subtitle: "rate" },
];

const Meetings = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const filteredMeetings = meetings.filter((meeting) => {
    const matchesSearch = meeting.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "upcoming" && meeting.status === "upcoming") ||
      (activeTab === "completed" && meeting.status === "completed");
    return matchesSearch && matchesTab;
  });

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
            Meetings
          </h1>
          <p className="text-muted-foreground mt-1">
            Schedule and manage meetings with staff, parents, and students
          </p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90 gap-2">
          <Plus className="h-4 w-4" />
          Schedule Meeting
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-4 text-center">
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <p className="text-3xl font-bold font-display mt-1">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.subtitle}</p>
            </CardContent>
          </Card>
        ))}
      </motion.div>

      {/* Tabs and Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col sm:flex-row sm:items-center gap-4"
      >
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
          <TabsList>
            <TabsTrigger value="all">All Meetings</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="relative max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search meetings..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
      </motion.div>

      {/* Meetings Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {filteredMeetings.map((meeting) => (
          <Card key={meeting.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                      meeting.isVirtual ? "bg-info/10" : "bg-primary/10"
                    }`}
                  >
                    {meeting.isVirtual ? (
                      <Video className="h-6 w-6 text-info" />
                    ) : (
                      <MapPin className="h-6 w-6 text-primary" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-lg">{meeting.title}</h3>
                      <Badge variant="outline">{meeting.type}</Badge>
                      {meeting.isVirtual && (
                        <Badge className="bg-info/10 text-info">Virtual</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {meeting.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {meeting.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {meeting.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {meeting.attendees} attendees
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-3">
                      {meeting.isVirtual ? (
                        <div className="flex items-center gap-1 text-sm">
                          <Link className="h-4 w-4 text-info" />
                          <span className="text-info">Virtual Meeting</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-sm">
                          <MapPin className="h-4 w-4" />
                          <span>{meeting.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <Badge
                    className={
                      meeting.status === "upcoming"
                        ? "bg-info/10 text-info"
                        : "bg-success/10 text-success"
                    }
                  >
                    {meeting.status === "upcoming" ? (
                      <AlertCircle className="h-3 w-3 mr-1" />
                    ) : (
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                    )}
                    {meeting.status}
                  </Badge>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem className="gap-2">
                        <Eye className="h-4 w-4" /> View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2">
                        <Edit className="h-4 w-4" /> Edit
                      </DropdownMenuItem>
                      {meeting.isVirtual && (
                        <DropdownMenuItem className="gap-2">
                          <Link className="h-4 w-4" /> Copy Link
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="gap-2 text-destructive">
                        <Trash2 className="h-4 w-4" /> Cancel
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </div>
  );
};

export default Meetings;
