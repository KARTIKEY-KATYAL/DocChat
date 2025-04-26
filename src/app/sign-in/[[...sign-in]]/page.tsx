import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div 
      className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <SignIn />
      </div>
    </div>
  );
}
