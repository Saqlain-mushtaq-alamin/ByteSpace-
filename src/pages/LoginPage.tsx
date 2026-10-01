import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "@/components/layout/AuthLayout";
import Input from "@/components/ui/Input";
import Divider from "@/components/ui/Divider";
import SocialButton from "@/components/ui/SocialButton";
import facebookIcon from "@/assets/icons/facebook.png";
import googleIcon from "@/assets/icons/google.png";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (k: keyof typeof form) => (e: ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

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
      <div className="flex flex-col gap-10 lg:min-h-[740px]">
        <div>
          <p className="text-[16px] font-medium leading-[1.6] text-brand">Sign In</p>
          <h1 className="font-poppins text-[38px] font-semibold leading-[1.2] tracking-[-0.44px] text-gray-950 sm:text-[44px]">
            Welcome Back
          </h1>
        </div>

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
          <Input
            label="Password"
            type="password"
            placeholder="********"
            value={form.password}
            onChange={onChange("password")}
            required
            autoComplete="current-password"
          />
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer rounded-full bg-lime px-8 py-3 text-[16px] font-medium leading-[1.2] text-gray-950 transition hover:brightness-95 active:scale-[0.98] disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>

        <Divider label="or" />

        <div className="flex justify-center gap-4">
          <SocialButton icon={facebookIcon} label="Continue with Facebook" onClick={() => alert("Connecting with Facebook...")} />
          <SocialButton icon={googleIcon} label="Continue with Google" onClick={() => alert("Connecting with Google...")} />
        </div>

        <p className="mt-auto flex items-center justify-center gap-1.5 text-center text-[14px] leading-[1.6]">
          <span className="text-gray-500">New user?</span>
          <Link to="/register" className="font-medium text-brand hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
