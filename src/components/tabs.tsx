type Props = {
    activeTab: String
    setActiveTab: any
}

export default function Tabs({activeTab, setActiveTab} : Props) {

    const handleProgressTabClick = () => {
        setActiveTab("progress");
    };

    const handleResultTabClick = () => {
        setActiveTab("result");
     };
    
    return (
        <div className="flex flex-col mt-10 min-h-0 w-100">
            <div className="flex-shrink-0 flex">
                <div className={`bg-white border-b border-b-gray-300 h-10 flex-1 flex items-center justify-center text-lg text-gray-800 select-none hover:text-cyan-500 ${activeTab === 'progress'? 'text-cyan-500 border-b-cyan-500 border-b-[1.5px]': 'text-gray-800'}`} onClick={handleProgressTabClick}>
                    Progress
                </div>
                <div className={`bg-white h-10 border-b border-b-gray-300 flex-1 flex items-center justify-center text-lg text-gray-800 select-none hover:text-cyan-400 ${activeTab === 'result'? 'text-cyan-500 border-b-cyan-500 border-b-[1.5px]': 'text-gray-800'}`} onClick={handleResultTabClick}>
                    Result
                </div>
            </div>

            <div className="flex flex-col min-h-0 flex-grow-1 pt-1 bg-white outline-none">
                {activeTab === 'progress' ? "progress content goes here" : "result content goes here"}
            </div>

        </div>
    )
}