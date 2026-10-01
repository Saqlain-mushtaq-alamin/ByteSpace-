import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "@/components/layout/AuthLayout";
import Input from "@/components/ui/Input";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
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
      heroTitle="Sign up and come in"
      heroText="The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost."
    >
      <div className="flex flex-col gap-8 sm:gap-10 lg:min-h-[668px]">
        <div>
          <p className="text-[16px] font-medium leading-[1.6] text-brand">Create an Account</p>
          <h1 className="font-poppins text-[32px] font-semibold leading-[1.2] tracking-[-0.44px] text-gray-950 sm:text-[44px]">
            Welcome to <br /> ByteSpace
          </h1>
        </div>

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
            placeholder="********"
            value={form.password}
            onChange={onChange("password")}
            required
            minLength={8}
            autoComplete="new-password"
          />
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer rounded-full bg-lime px-8 py-3 text-[16px] font-medium leading-[1.2] text-gray-950 transition hover:brightness-95 active:scale-[0.98] disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Continue"}
            </button>
          </div>
        </form>

        <p className="mt-auto flex items-center justify-center gap-1.5 text-center text-[14px] leading-[1.6]">
          <span className="text-gray-500">Already have an account?</span>
          <Link to="/login" className="font-medium text-brand hover:underline">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
