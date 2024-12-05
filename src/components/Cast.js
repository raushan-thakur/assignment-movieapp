import React from "react";
import { IMG_CDN } from "../utils/constants";

const Cast = ({ data, loading }) => {
    return (
        <div className="p-10">
            <h2 className="text-xl text-white mb-6">Top Cast</h2>
            {loading ? (
                <div className="text-white">Loading...</div>
            ) : (
                <div className="flex gap-5 overflow-x-auto -mx-5 px-5 md:mx-0 md:px-0 scrollbar-thin scrollbar-thumb-gray-500">
                    {data?.map((item) => {
                        const imgUrl = item.profile_path
                            ? IMG_CDN + item.profile_path
                            : "https://via.placeholder.com/175"; 
                        return (
                            <div
                                key={item.id}
                                className="text-center text-white min-w-[125px] md:min-w-[175px]"
                            >
                                <div className="w-[125px] h-[125px] md:w-[175px] md:h-[175px] rounded-full bg-slate-200 overflow-hidden mb-4 md:mb-6">
                                    <img
                                        src={imgUrl}
                                        alt={item.name || "Cast Member"}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-sm md:text-lg font-semibold leading-5 md:leading-6">
                                    {item.name || "Unknown"}
                                </div>
                                <div className="text-sm md:text-base leading-5 md:leading-6 opacity-50">
                                    {item.character || "Unknown Role"}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Cast;
