import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <>
    <div className="h-screen">
      hello from my app.
 <LoginLink >
<Button variant="outline">Login</Button>
 </LoginLink>

    </div>

    </>
  );
}
