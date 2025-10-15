import {useCartStore} from "@/store/cartStore";

const DiscountMarker = () => {
    const {
        hasCard,
        toggleCard
    } = useCartStore();

    return (
        <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
            <span className="font-semibold">У меня есть карта</span>
            <label className="relative inline-flex items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={hasCard}
                    onChange={toggleCard}
                    className="sr-only peer"
                />
                <div
                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full
                    peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px]
                    after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                    peer-checked:bg-[#ff6633]"></div>
            </label>
        </div>
    )
}

export default DiscountMarker;