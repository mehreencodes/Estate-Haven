import { useEffect, useState } from "react";
import { X, Home, User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import "./auth.css";

const errorMessage = (code) => {
  switch (code) {
    case "auth/email-already-in-use":
      return "This email is already registered. Try logging in instead.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/weak-password":
      return "Password must be at least 6 characters.";
    case "auth/invalid-credential":
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "Incorrect email or password.";
    case "auth/too-many-requests":
      return "Too many attempts. Please try again later.";
    case "auth/unauthorized-domain":
      return "This domain is not authorized in Firebase settings.";
    case "auth/operation-not-allowed":
      return "This sign-in method is not enabled in Firebase yet.";
    case "auth/network-request-failed":
      return "Network error. Check your connection.";
    default:
      return "Something went wrong. Please try again.";
  }
};

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
    <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z" />
    <path fill="#FBBC05" d="M10.5 28.7c-.5-1.4-.8-3-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.4 0 20.1 0 24s.9 7.6 2.6 10.8l7.9-6.1z" />
    <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.8 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
  </svg>
);

export default function AuthModal() {
  const { modalOpen, closeAuth, mode, setMode, signup, login, loginWithGoogle } =
    useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const isSignup = mode === "signup";

  useEffect(() => {
    if (!modalOpen) {
      setName("");
      setEmail("");
      setPassword("");
      setShowPw(false);
      setError("");
      setBusy(false);
    }
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => e.key === "Escape" && closeAuth();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [modalOpen, closeAuth]);

  if (!modalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      if (isSignup) await signup(name.trim(), email.trim(), password);
      else await login(email.trim(), password);
      closeAuth();
    } catch (err) {
      setError(errorMessage(err.code));
    } finally {
      setBusy(false);
    }
  };

  const handleGoogle = async () => {
    setError("");
    setBusy(true);
    try {
      await loginWithGoogle();
      closeAuth();
    } catch (err) {
      if (
        err.code !== "auth/popup-closed-by-user" &&
        err.code !== "auth/cancelled-popup-request"
      ) {
        setError(errorMessage(err.code));
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="auth-overlay" onClick={closeAuth}>
      <div
        role="dialog"
        aria-modal="true"
        className="auth-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={closeAuth} aria-label="Close" className="auth-close">
          <X size={18} />
        </button>

        <div className="auth-logo">
          <Home size={21} color="#fff" strokeWidth={2.2} />
        </div>

        <h2 className="auth-title">
          {isSignup ? "Create your account" : "Welcome back"}
        </h2>
        <p className="auth-sub">
          {isSignup
            ? "Save favorites and book tours faster."
            : "Log in to continue to Estate Haven."}
        </p>

        <button
          type="button"
          onClick={handleGoogle}
          disabled={busy}
          className="auth-google"
        >
          <GoogleIcon />
          Continue with Google
        </button>

        <div className="auth-divider">or</div>

        <form onSubmit={handleSubmit} className="auth-form">
          {isSignup && (
            <div className="auth-field">
              <User size={17} className="auth-field-icon" />
              <input
                type="text"
                placeholder="Full name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="auth-input"
              />
            </div>
          )}

          <div className="auth-field">
            <Mail size={17} className="auth-field-icon" />
            <input
              type="email"
              placeholder="Email address"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="auth-input"
            />
          </div>

          <div className="auth-field">
            <Lock size={17} className="auth-field-icon" />
            <input
              type={showPw ? "text" : "password"}
              placeholder="Password (min 6 characters)"
              autoComplete={isSignup ? "new-password" : "current-password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              className="auth-input auth-input--pw"
            />
            <button
              type="button"
              className="auth-eye"
              onClick={() => setShowPw((s) => !s)}
              aria-label={showPw ? "Hide password" : "Show password"}
            >
              {showPw ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && <p className="auth-error">{error}</p>}

          <button type="submit" disabled={busy} className="auth-submit">
            {busy ? "Please wait..." : isSignup ? "Create Account" : "Log In"}
          </button>
        </form>

        <p className="auth-switch">
          {isSignup ? "Already have an account? " : "New to Estate Haven? "}
          <button
            type="button"
            onClick={() => {
              setError("");
              setMode(isSignup ? "login" : "signup");
            }}
          >
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </div>
  );
}