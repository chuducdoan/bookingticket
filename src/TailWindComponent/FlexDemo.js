function FlexDemo() {
    return ( 
        <div className="w-screen h-screen bg-purple-400">
            <div className="flex h-1/2 w-full bg-green-400">
                <div className="h-10 w-10 bg-black"></div>
                <div className="h-10 w-10 bg-blue-300"></div>
                <div className="h-10 w-10 bg-red-400"></div>
            </div>
        </div>
     );
}

export default FlexDemo;