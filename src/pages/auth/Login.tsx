import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthService } from "@/api/auth/auth.service";
import { useAuthStore } from "@/store/auth.store";
import { User } from "@/api/auth/user.service";
import { usePermissionStore } from "@/store/permission.store"

export default function Login() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const perm = usePermissionStore((s)=>s.setPermissions)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 1️⃣ Login
      const res = await AuthService.loginWithOAuth2(email, password);

      if (!res.access_token) throw new Error("No access token received");

      // 2️⃣ Store user + token in Zustand store
      login({
        user: res.user ?? { id: "temp", name: email, email },
        token: res.access_token,
      });

      // 3️⃣ Hit GraphQL MyProfile
      const profile = await User.MyProfile(); // token already in headers
      console.log("Profile:", profile.data[0].role.permissions[0].permissionCode);

      perm(profile.data[0].role.permissions[0].permissionCode)

      // 4️⃣ Navigate to dashboard
      navigate("/dashboard", { replace: true });
    } catch (err: any) {
      console.error(err);
      setError(err?.response?.data?.detail || "Login failed. Check credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md rounded-2xl bg-card shadow-xl p-8">
        
        {/* Logo / Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground">
            YAMS Login
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Sign in to continue
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-4 rounded-lg bg-destructive/10 text-destructive px-4 py-2 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-border bg-background px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-primary text-primary-foreground py-2 font-medium hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} YAMS
        </div>
      </div>
    </div>
  );
}
