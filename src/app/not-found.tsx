import Link from "next/link";
import Button from "./_components/ui/Button";

export default function NotFound() {
  return (
    <div className="hero-header-pad">
      <div className="wrapper wrapper-pad flex min-h-screen flex-col items-center justify-center gap-6">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
