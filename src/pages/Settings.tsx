import { useState } from "react";
import { motion } from "framer-motion";
// import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import {
    User,
    Mail,
    Phone,
    MapPin,
    Camera,
    Save,
    Moon,
    Sun,
    Bell,
    Shield,
    Key,
    Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { user } from "./teachers/dashboard";

const Settings = () => {
    //   const { user } = useAuth();
      const { theme, setTheme } = useTheme();

    
    const [isLoading, setIsLoading] = useState(false);

    const handleSave = async () => {
        setIsLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        toast.success("Settings saved successfully!");
        setIsLoading(false);
    };

    const getInitials = (name: string) => {
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <h1 className="text-2xl md:text-3xl font-bold font-display">Settings</h1>
                <p className="text-muted-foreground mt-1">
                    Manage your account and preferences
                </p>
            </motion.div>

            <Tabs defaultValue="profile" className="space-y-6">
                <TabsList className="bg-muted/50">
                    <TabsTrigger value="profile" className="gap-2">
                        <User className="h-4 w-4" /> Profile
                    </TabsTrigger>
                    <TabsTrigger value="appearance" className="gap-2">
                        <Sun className="h-4 w-4" /> Appearance
                    </TabsTrigger>
                    <TabsTrigger value="notifications" className="gap-2">
                        <Bell className="h-4 w-4" /> Notifications
                    </TabsTrigger>
                    <TabsTrigger value="security" className="gap-2">
                        <Shield className="h-4 w-4" /> Security
                    </TabsTrigger>
                </TabsList>

                {/* Profile Tab */}
                <TabsContent value="profile" className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Profile Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Avatar */}
                                <div className="flex items-center gap-6">
                                    <Avatar className="h-24 w-24">
                                        <AvatarImage
                                            src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.name}`}
                                        />
                                        <AvatarFallback className="text-2xl">
                                            {user ? getInitials(user.name) : "U"}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <Button variant="outline" className="gap-2">
                                            <Camera className="h-4 w-4" />
                                            Change Photo
                                        </Button>
                                        <p className="text-xs text-muted-foreground mt-2">
                                            JPG, PNG or GIF. Max size 2MB.
                                        </p>
                                    </div>
                                </div>

                                {/* Form */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="fullName">Full Name</Label>
                                        <Input
                                            id="fullName"
                                            defaultValue={user?.name}
                                            className="mt-1.5"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            defaultValue={user?.email}
                                            className="mt-1.5"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            placeholder="+1 (555) 000-0000"
                                            className="mt-1.5"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="location">Location</Label>
                                        <Input
                                            id="location"
                                            placeholder="City, Country"
                                            className="mt-1.5"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="bio">Bio</Label>
                                    <Textarea
                                        id="bio"
                                        placeholder="Tell us about yourself..."
                                        rows={4}
                                        className="mt-1.5"
                                    />
                                </div>

                                <Button
                                    onClick={handleSave}
                                    disabled={isLoading}
                                    className="bg-gradient-primary hover:opacity-90 gap-2"
                                >
                                    <Save className="h-4 w-4" />
                                    {isLoading ? "Saving..." : "Save Changes"}
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </TabsContent>

                {/* Appearance Tab */}
                <TabsContent value="appearance" className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Appearance</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            {theme === "light" ? (
                                                <Sun className="h-5 w-5 text-primary" />
                                            ) : (
                                                <Moon className="h-5 w-5 text-primary" />
                                            )}
                                        </div>
                                        <div>
                                            <p className="font-medium">Theme</p>
                                            <p className="text-sm text-muted-foreground">
                                                Switch between light and dark mode
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Button
                                            variant={theme === "light" ? "default" : "outline"}
                                            size="sm"
                                            onClick={() => setTheme("light")}
                                            className="gap-2"
                                        >
                                            <Sun className="h-4 w-4" />
                                            Light
                                        </Button>
                                        <Button
                                            variant={theme === "dark" ? "default" : "outline"}
                                            size="sm"
                                            onClick={() => setTheme("dark")}
                                            className="gap-2"
                                        >
                                            <Moon className="h-4 w-4" />
                                            Dark
                                        </Button>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                            <Globe className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-medium">Language</p>
                                            <p className="text-sm text-muted-foreground">
                                                Select your preferred language
                                            </p>
                                        </div>
                                    </div>
                                    <Button variant="outline" size="sm">
                                        English
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </TabsContent>

                {/* Notifications Tab */}
                <TabsContent value="notifications" className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Notification Preferences</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {[
                                    {
                                        title: "Email Notifications",
                                        description: "Receive email updates about your activity",
                                        defaultChecked: true,
                                    },
                                    {
                                        title: "Push Notifications",
                                        description: "Receive push notifications in your browser",
                                        defaultChecked: true,
                                    },
                                    {
                                        title: "Lesson Reminders",
                                        description: "Get reminded before your scheduled lessons",
                                        defaultChecked: true,
                                    },
                                    {
                                        title: "Meeting Alerts",
                                        description: "Notifications for upcoming meetings",
                                        defaultChecked: true,
                                    },
                                    {
                                        title: "Marketing Updates",
                                        description: "News about features and updates",
                                        defaultChecked: false,
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.title}
                                        className="flex items-center justify-between"
                                    >
                                        <div>
                                            <p className="font-medium">{item.title}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {item.description}
                                            </p>
                                        </div>
                                        <Switch defaultChecked={item.defaultChecked} />
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                </TabsContent>

                {/* Security Tab */}
                <TabsContent value="security" className="space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Security Settings</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="font-medium mb-4">Change Password</h3>
                                    <div className="space-y-4 max-w-md">
                                        <div>
                                            <Label htmlFor="currentPassword">Current Password</Label>
                                            <Input
                                                id="currentPassword"
                                                type="password"
                                                className="mt-1.5"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="newPassword">New Password</Label>
                                            <Input
                                                id="newPassword"
                                                type="password"
                                                className="mt-1.5"
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="confirmPassword">
                                                Confirm New Password
                                            </Label>
                                            <Input
                                                id="confirmPassword"
                                                type="password"
                                                className="mt-1.5"
                                            />
                                        </div>
                                        <Button className="gap-2">
                                            <Key className="h-4 w-4" />
                                            Update Password
                                        </Button>
                                    </div>
                                </div>

                                <div className="pt-6 border-t">
                                    <h3 className="font-medium mb-4">Two-Factor Authentication</h3>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm text-muted-foreground">
                                                Add an extra layer of security to your account
                                            </p>
                                        </div>
                                        <Button variant="outline">Enable 2FA</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Settings;