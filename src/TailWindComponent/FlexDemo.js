function FlexDemo() {
    return ( 
        <div className="w-screen h-screen">
            <div className="flex h-1/2 w-full">
                <div className="h-10 w-10 bg-black"></div>
                <div className="h-10 w-10 bg-blue-300"></div>
                <button className="p-5 rounded-2xl bg-red-400">
                    Hello Cybersoft
                </button>
                <button className="shadow-2xl p-5 h-20 w-20 rounded-full sm:bg-red-400 md:bg-green-400">
                    Hello Cybersoft
                </button>
            </div>
        </div>
     );
}

export default FlexDemo;