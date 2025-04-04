import React from "react";

const SpecialOfferCard = ({
    title,
    features,
    price,
    originalPrice,
    discountLabel,
    duration,
    isActive,
    onClick,
}) => {
    return (
        <div
            className={`bg-purple-900 p-6 rounded-lg  text-white relative mb-4 md:mb-0 ${isActive ? "border-2 border-yellow-300" : ""
                }`}
            onClick={onClick}
        >
            <div className="absolute top-2 right-2 px-3 py-1 bg-yellow-300 text-purple-900 text-xs uppercase font-semibold rounded">
                Special Offer
            </div>
            <div className="flex flex-col items-center text-center h-full justify-between">
                <div className="text-3xl font-bold mt-6 mb-2 w-full text-start">
                    {title}
                </div>
                <ul className="text-sm mb-6 list-disc text-start pl-5">
                    {features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <div className="flex justify-between items-center w-full">
                    <div className="text-sm rounded font-bold border border-yellow-300 text-yellow-300 p-2">
                        {duration}
                    </div>
                    <div className="text-4xl font-bold">₹{price}</div>
                </div>
                <div className="flex justify-end w-full mt-1">
                    <div className="text-xs line-through text-gray-400 mr-2">
                        ₹{originalPrice}
                    </div>
                    <div className="text-sm text-yellow-300">{discountLabel}</div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOfferCard;
