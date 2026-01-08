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
      console.log("Profile:", profile);

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




// ============================================================================
// Google OAuth2 Login Component
// ============================================================================


// import { useEffect } from "react";

// const GOOGLE_CLIENT_ID = "104274152778-kcpt0qeu13254jo5ouq9jr6i6ri05vld.apps.googleusercontent.com";
// const GRAPHQL_ENDPOINT = "http://localhost:8000/api/v3";

// interface GoogleCredentialResponse {
//   credential: string;
// }

// interface LoginResponse {
//   data?: {
//     loginWithGoogle: {
//       accessToken: string;
//       refreshToken: string;
//       expiresIn: number;
//       tokenType: string;
//     };
//   };
//   errors?: any;
// }

// export default function GoogleLogin() {
//   useEffect(() => {
//     if (!window.google) return;

//     window.google.accounts.id.initialize({
//       client_id: GOOGLE_CLIENT_ID,
//       callback: handleGoogleLogin,
//     });

//     window.google.accounts.id.renderButton(
//       document.getElementById("google-login-btn"),
//       {
//         theme: "outline",
//         size: "large",
//         text: "signin_with",
//         shape: "rectangular",
//       }
//     );
//   }, []);

//   const handleGoogleLogin = async (
//     response: GoogleCredentialResponse
//   ) => {
//     const idToken = response.credential;

//     try {
//       const res = await fetch(GRAPHQL_ENDPOINT, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           query: `
//             mutation LoginWithGoogle($idToken: String!) {
//               loginWithGoogle(idToken: $idToken) {
//                 accessToken
//                 refreshToken
//                 expiresIn
//                 tokenType
//                 scope
//               }
//             }
//           `,
//           variables: {
//             idToken,
//           },
//         }),
//       });

//       const data: LoginResponse = await res.json();

//       if (data.errors) {
//         console.error(data.errors);
//         alert("Google login failed");
//         return;
//       }

//       const tokens = data.data?.loginWithGoogle;

//       if (!tokens) {
//         alert("No token received");
//         return;
//       }

//       localStorage.setItem("access_token", tokens.accessToken);
//       localStorage.setItem("refresh_token", tokens.refreshToken);

//       console.log("Login success:", tokens);
//       alert("Login successful 🎉");
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Login with Google</h2>
//       <div id="google-login-btn" />
//     </div>
//   );
// }

// const styles: React.CSSProperties = {
//   height: "100vh",
//   display: "flex",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
// };



// ============================================================================
// End of Google OAuth2 Login Component
// ============================================================================


// // ============================================================================
// // prove of concept for session_based login
// // ============================================================================

// import { useState, useEffect } from "react";

// function getCookie(name: string) {
//   return document.cookie
//     .split("; ")
//     .find(row => row.startsWith(name + "="))
//     ?.split("=")[1];
// }

// export default function LoginPage() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   // 1️⃣ pata CSRF cookie mapema
//   useEffect(() => {
//     fetch("http://localhost:8000/auth/csrf/", {
//       credentials: "include",
//     });
//   }, []);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     const csrfToken = getCookie("csrftoken");

//     const res = await fetch("http://localhost:8000/auth/login/", {
//       method: "POST",
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//         "X-CSRFToken": csrfToken || "",
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     const text = await res.text();
//     console.log("RAW RESPONSE:", text);

//     let data;
//     try {
//       data = JSON.parse(text);
//     } catch {
//       alert("Backend error (not JSON). Check Django logs.");
//       return;
//     }

//     if (data.success) {
//       window.location.href = "/dashboard";
//     } else {
//       alert(data.error || "Login failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-64 mx-auto mt-20">
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         className="border border-gray-300 rounded px-3 py-2"
//       />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="border border-gray-300 rounded px-3 py-2"
//       />

//       <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
//     </form>
//   );
// }