import Card from "./Card";

function BaiTapChiaLayout() {
    return ( 
        <div className="w-full">
            <div className="text-center text-4xl text-green-500">Welcome to the Cybersoft frontend with tailwind</div>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <Card/>
                </div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
     );
}

export default BaiTapChiaLayout;