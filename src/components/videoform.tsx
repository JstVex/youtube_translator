import React from "react"
import { useState } from "react"

type Props = {
    onSubmit: (videoUrl: string) => void
    isProcessing: boolean
}

export default function Videoform ({ onSubmit, isProcessing } : Props) {
    const [url, setUrl] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setUrl('')

    }
    return (
        <>
            {/* <div className="text-lg mt-6 ml-2">
                Video URL
            </div> */}
            <form onSubmit={handleSubmit} className="flex flex-col ml-1">
                <label htmlFor="videoURL" className="text-md mt-6 mb-2">Video URL</label>
                <input type="text" id="videoURL" name="videoURL" required placeholder="https://www.youtube.com/watch?v=" className=" bg-slate-100 h-8 px-2 rounded-md text-gray-600 focus:border focus:border-cyan-400 focus:outline-none" onChange={(e) => setUrl(e.target.value)} value={url} />
                <button disabled={isProcessing} className=" bg-cyan-400 text-white py-1 mt-3 rounded-md">
                    {isProcessing ? 'Processing...' : 'Start processing'}
                </button>
            </form>
        </>
    )
}