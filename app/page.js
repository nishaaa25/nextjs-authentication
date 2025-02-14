import AuthForm from "@/components/auth-form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <main className="w-full h-full  relative">
        <AuthForm />
      </main>
    </div>
  );
}
