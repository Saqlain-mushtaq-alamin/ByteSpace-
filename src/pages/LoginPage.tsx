import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "@/components/layout/AuthLayout";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import SocialButton from "@/components/ui/SocialButton";
import facebookIcon from "@/assets/icons/facebook.svg";
import googleIcon from "@/assets/icons/google.svg";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const [loading, setLoading] = useState(false);

  const onChange = (k: keyof typeof form) => (e: ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 600);
  };

  return (
    <AuthLayout
      heroTitle="Sign in with ease"
      heroText="Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge."
    >
      <div className="flex flex-col gap-8 w-full max-w-[453px] mx-auto">
        {/* Navigation & Header inside Card */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 text-[14px]">
          <Link
            to="/"
            className="flex items-center gap-1.5 font-medium text-gray-500 transition hover:text-brand"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Home
          </Link>
          <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-brand text-xs">
            ByteSpace ID
          </span>
        </div>

        {/* Title Group */}
        <div>
          <p className="text-[18px] font-medium leading-[1.6] text-brand">Sign In</p>
          <h1 className="font-poppins text-[38px] font-semibold leading-[1.2] tracking-[-0.44px] text-gray-950 sm:text-[44px]">
            Welcome Back
          </h1>
        </div>

        {/* Login Form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <Input
            label="Email"
            type="email"
            placeholder="designer@example.com"
            value={form.email}
            onChange={onChange("email")}
            required
            autoComplete="email"
          />

          <div className="flex flex-col gap-1.5">
            <Input
              label="Password"
              type="password"
              placeholder="********"
              value={form.password}
              onChange={onChange("password")}
              required
              autoComplete="current-password"
            />
            <div className="flex items-center justify-between text-[14px] pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-gray-600 select-none">
                <input
                  type="checkbox"
                  checked={form.remember}
                  onChange={onChange("remember")}
                  className="rounded border-gray-300 text-brand focus:ring-brand accent-brand size-4 cursor-pointer"
                />
                Remember me
              </label>
              <a
                href="#forgot"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Password reset instructions will be sent to your email.");
                }}
                className="font-medium text-brand hover:underline"
              >
                Forgot password?
              </a>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-10 py-3.5 bg-lime hover:bg-lime/90 text-gray-950 font-bold text-[18px] rounded-pill shadow-md transition hover:scale-102 cursor-pointer"
            >
              {loading ? "Signing In..." : "Sign In"}
            </Button>
          </div>
        </form>

        {/* Divider */}
        <Divider label="or" />

        {/* Social Authentication */}
        <div className="flex justify-center gap-4">
          <SocialButton
            icon={facebookIcon}
            label="Continue with Facebook"
            onClick={() => alert("Connecting with Facebook...")}
          />
          <SocialButton
            icon={googleIcon}
            label="Continue with Google"
            onClick={() => alert("Connecting with Google...")}
          />
        </div>

        {/* Footer Link */}
        <p className="flex items-center justify-center gap-1.5 text-center text-[16px] leading-[1.6]">
          <span className="text-gray-500">New user?</span>
          <Link to="/register" className="font-semibold text-brand hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
