
function Card() {
    return ( 
        <div className="card w-full text-center">
            <div className="card-body bg-gray-200 py-8 rounded-tl-lg rounded-tr-lg">
                <h3 className="text-purple-800 font-bold text-xs">Category</h3>
                <p className="text-black text-1xl">Cybersoft frontend developer</p>
                <p className="text-black text-1xl">
                Dần bước vào khoảng thời gian lãng mạn nhất trong năm với tiết trời dịu nhẹ cùng hương hoa sữa ngọt ngào. 
Tháng 9 này, hãy cùng 360® trở thành chàng trai trưởng thành chỉ với items quen thuộc áo sơ mi cùng quần âu, điểm xuyết thêm phụ kiện như đồng hồ là bạn đã nâng tầm outfit hơn rất nhiều rồi.
                </p>
            </div>
            <div className="card-footer bg-gray-100 justify-between items-center flex rounded-bl-lg rounded-br-lg px-2">
                <p className="mt-2">1 USD</p>
                <button className="rounded-lg bg-purple-500 text-white px-2 py-2 my-2 hover:text-purple-500 hover:bg-gray-300 duration-500">Register</button>
            </div>
        </div>
     );
}

export default Card;