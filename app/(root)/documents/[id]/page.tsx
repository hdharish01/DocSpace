import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Document(){
    return <div>
        <Header>
            <div className="flex w-fit items-center justify-center gap-2">
                <div className="document-title">share</div>
            </div>
            <SignedOut>
                <SignInButton></SignInButton>
            </SignedOut>
            <SignedIn>
                <UserButton></UserButton>
            </SignedIn>
        </Header>
        <Editor />
    </div>
}