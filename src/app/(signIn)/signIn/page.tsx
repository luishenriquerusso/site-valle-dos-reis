import { auth } from "@/auth";
import { SignIn } from "../../components/signin";
import { Modal } from "@/components/ui/modal";
import { redirect } from "next/navigation";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

export default async function Page(props: Props) {

  const session = await auth();
  if (session?.user) {
    redirect("/")
  }
  
  return (
    <Modal>
      <SignIn 
        error={props.searchParams?.error}
        callbackUrl={props.searchParams?.callbackUrl}
      />
    </Modal>
  );
}