import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";

export default function Document(){
    return <div>
        <Header>
            <p className="text-white">Test</p>
        </Header>
        <Editor />
    </div>
}