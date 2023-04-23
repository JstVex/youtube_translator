import { useState } from 'react'
import Videoform from '@/components/videoform.tsx'
import Tabs from '@/components/tabs.tsx';

export default function Home() {
  const [isProcessing, setProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState("progress");

  const handleStartProcessing = async (videoUrl: string) => {
   
  }

  return (
   <main className="h-screen w-[70vw] mx-auto flex flex-col  py-10">
    <div className="text-5xl font-bold">
      Youtube transcription & Spanish translation
    </div>
    <Videoform isProcessing={isProcessing} onSubmit={handleStartProcessing}/>
    <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>
    
   </main>
  )
}
