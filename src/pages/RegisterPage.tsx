import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "@/components/layout/AuthLayout";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";
import SocialButton from "@/components/ui/SocialButton";
import facebookIcon from "@/assets/icons/facebook.svg";
import googleIcon from "@/assets/icons/google.svg";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", agreed: false });
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
      heroTitle="Sign up and come in"
      heroText="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
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
          <span className="rounded-full bg-lime/30 px-3 py-1 font-semibold text-gray-950 text-xs">
            Free Membership
          </span>
        </div>

        {/* Title Group */}
        <div>
          <p className="text-[18px] font-medium leading-[1.6] text-brand">Create an Account</p>
          <h1 className="font-poppins text-[38px] font-semibold leading-[1.2] tracking-[-0.44px] text-gray-950 sm:text-[44px]">
            Welcome to ByteSpace
          </h1>
        </div>

        {/* Register Form */}
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          <Input
            label="Full Name"
            placeholder="Jamie Davis"
            value={form.name}
            onChange={onChange("name")}
            required
            autoComplete="name"
          />

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
            placeholder="At least 8 characters"
            value={form.password}
            onChange={onChange("password")}
            required
            minLength={8}
            autoComplete="new-password"
          />

          <div className="flex items-start gap-2 pt-1 text-[13px] leading-tight text-gray-600">
            <input
              type="checkbox"
              id="agreed"
              checked={form.agreed}
              onChange={onChange("agreed")}
              required
              className="mt-0.5 rounded border-gray-300 text-brand focus:ring-brand accent-brand size-4 cursor-pointer"
            />
            <label htmlFor="agreed" className="cursor-pointer select-none">
              I agree to ByteSpace's{" "}
              <a href="#terms" className="text-brand underline">Terms of Service</a> and{" "}
              <a href="#privacy" className="text-brand underline">Privacy Policy</a>.
            </label>
          </div>

          <div className="flex justify-end pt-2">
            <Button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-10 py-3.5 bg-lime hover:bg-lime/90 text-gray-950 font-bold text-[18px] rounded-pill shadow-md transition hover:scale-102 cursor-pointer"
            >
              {loading ? "Creating Account..." : "Continue"}
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
          <span className="text-gray-500">Already have an account?</span>
          <Link to="/login" className="font-semibold text-brand hover:underline">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
