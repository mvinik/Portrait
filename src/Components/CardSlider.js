function CardSlider() {
    return (
        <>
            <section className="flex flex-row">
                <div className="w-2/12  flex items-center">

                    <div className="text-right">
                        <button className="p-1 mr-5 border border-gray-100 rounded shadow-lg hover:bg-gray-200 transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                    </button></div>

                </div>
                <div className="w-full h-96 border border-gray-300 shadow-lg rounded">
                    Slider
                </div>
                <div className="w-2/12 flex items-center">
                    <div className="text-center">
                        <button className="p-1 ml-5 border border-gray-100 rounded shadow-lg hover:bg-gray-200 transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </button></div>
                </div>



            </section></>
    )
}
export default CardSlider;