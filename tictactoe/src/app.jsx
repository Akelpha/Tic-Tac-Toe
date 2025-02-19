export default function Board() {
    return(
        <>
        <div className="flex flex-row w-full">
            <button className=" justify-center items-center w-16 h-16 bg-white border border-black text-4xl font-bold">
                1</button>
                <button className="flex flex-row justify-center items-center w-16 h-16 bg-white border border-black text-4xl font-bold">
                2</button>
                <button className="flex flex-row justify-center items-center w-16 h-16 bg-white border border-black text-4xl font-bold">
                3</button>
        </div>
        <div className="flex flex-row w-full">
            <button className="flex flex-row justify-center items-center w-16 h-16 bg-white border border-black text-4xl font-bold">
                4</button>
                <button className="flex flex-row justify-center items-center w-16 h-16 bg-white border border-black text-4xl font-bold">
                5</button>
                <button className="flex flex-row justify-center items-center w-16 h-16 bg-white border border-black text-4xl font-bold">
                6</button>
        </div>
        <div className="flex flex-row w-full">
            <button className="flex flex-row justify-center items-center w-16 h-16 bg-white border border-black text-4xl font-bold">
                7</button>
                <button className="flex flex-row justify-center items-center w-16 h-16 bg-white border border-black text-4xl font-bold">
                8</button>
                <button className="flex flex-row justify-center items-center w-16 h-16 bg-white border border-black text-4xl font-bold">
                9</button>
        </div>
        </>
    )
}