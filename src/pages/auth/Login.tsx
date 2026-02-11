// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthService } from "@/api/auth/auth.service";
// import { useAuthStore } from "@/store/auth.store";
// import { User } from "@/api/auth/user.service";
// import { usePermissionStore } from "@/store/permission.store";
// import { PERMISSIONS, PermissionCode, PermissionKey } from "@/dto/permission.contract";

// export default function Login() {
//   const navigate = useNavigate();
//   const login = useAuthStore((s) => s.login);

//   // Hapa tunatumia setPermissionsFromBackend kutoka store
//   const setPermissions = usePermissionStore((s) => s.setPermissionsFromBackend);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       // 1️⃣ Login API
//       const res = await AuthService.loginWithOAuth2(email, password);

//       if (!res.access_token) throw new Error("No access token received");

//       login({
//         user: res.user ?? { id: "temp", name: email, email },
//         token: res.access_token,
//         account_type: null,
//       });

//       // 2️⃣ Hit GraphQL MyProfile (token already in headers)
//       const profile = await User.MyProfile();
//       console.log("Profile:", profile);

//       // 3️⃣ Store user in AuthStore
//       login({
//         user: profile?.data,
//         token: res.access_token,
//         account_type: profile?.data[0].accountType ?? null,
//       });

//       // 4️⃣ Extract permissions from backend
//       const backendPermissions: PermissionCode[] =
//         profile.data[0].role?.permissions?.map(
//           (p: { permissionCode: PermissionCode }) => p.permissionCode
//         ) ?? [];

//       // 6️⃣ Set permissions in store
//       setPermissions(backendPermissions);

//       // 7️⃣ Navigate to dashboard
//       navigate("/t/dashboard", { replace: true });
//     } catch (err: any) {
//       console.error(err);
//       setError(err?.response?.data?.detail || "Login failed. Check credentials.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background">
//       <div className="w-full max-w-md rounded-2xl bg-card shadow-xl p-8">

//         {/* Logo / Title */}
//         <div className="text-center mb-8">
//           <h1 className="text-2xl font-bold text-foreground">
//             YAMS Login
//           </h1>
//           <p className="text-muted-foreground text-sm mt-1">
//             Sign in to continue
//           </p>
//         </div>

//         {/* Error */}
//         {error && (
//           <div className="mb-4 rounded-lg bg-destructive/10 text-destructive px-4 py-2 text-sm">
//             {error}
//           </div>
//         )}

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               required
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="you@example.com"
//               className="w-full rounded-lg border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="••••••••"
//               className="w-full rounded-lg border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full rounded-lg bg-primary text-primary-foreground py-2 font-medium hover:opacity-90 transition disabled:opacity-50"
//           >
//             {loading ? "Signing in..." : "Login"}
//           </button>
//         </form>

//         {/* Footer */}
//         <div className="mt-6 text-center text-sm text-muted-foreground">
//           © {new Date().getFullYear()} YAMS
//         </div>
//       </div>
//     </div>
//   );
// }



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Eye, EyeOff, ArrowLeft, Loader2 } from "lucide-react";
// import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = true
    if (success) {
      toast.success("Welcome back!");
      navigate("/t/dashboard");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>

            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-lg">
                <GraduationCap className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold font-display">Welcome back</h1>
                <p className="text-sm text-muted-foreground">
                  Sign in to your YAMS account
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="email">Email or Username</Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="Enter your email or username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-2 h-12"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative mt-2">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-12 pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                {/* {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "Sign In"
                )} */}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-primary hover:underline"
              >
                Create account
              </Link>
            </p>

            {/* Demo Credentials */}
            <div className="mt-8 p-4 rounded-xl bg-muted/50 border border-border">
              <p className="text-xs font-medium text-muted-foreground mb-2">
                Demo Credentials
              </p>
              <div className="space-y-1 text-xs">
                <p>
                  <span className="text-muted-foreground">Teacher:</span>{" "}
                  casa1@casa.com / casa
                </p>
                <p>
                  <span className="text-muted-foreground">Admin:</span>{" "}
                  casa2@casa.com / casa
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:flex lg:flex-1 relative bg-gradient-primary">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative flex flex-col items-center justify-center w-full p-12 text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center">
              <GraduationCap className="h-12 w-12" />
            </div>
            <h2 className="text-3xl font-bold font-display mb-4">
              Youth Academic
              <br />
              Management System
            </h2>
            <p className="text-lg opacity-90 max-w-md">
              Empowering educators with modern tools to manage, teach, and
              inspire the next generation.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Login;
