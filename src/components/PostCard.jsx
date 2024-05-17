import { memo } from "react";

function PostCard({ image, avatar, firstName, lastName, id, writeup, key }) {
    return (
        <div className="mt-4 h-fit border-2 border-gray-200 p-2 shadow-lg lg:mt-0 lg:h-fit" key={key}>
            <div className="mt-2 text-xl text-gray-600 lg:mt-0 lg:text-base ">{id}</div>
            <div className="flex space-x-1">
                <div className="mt-2 text-xl font-bold lg:mt-0 lg:text-base">{firstName}</div>
                <div className="mt-2 text-xl font-bold lg:mt-0 lg:text-base">{lastName}</div>
            </div>
            <div className="h-1/2">
                <div className="mb-4 mt-2 text-xl font-bold lg:mb-4 lg:mt-0 lg:text-base">{writeup}</div>
            </div>
            <div className="aspect-square h-1/2">
                <img className="h-full w-full object-cover" src={image} />
            </div>
            <img className="h-1/4 w-1/4 object-cover" src={avatar} />
        </div>
    );
}
export default memo(PostCard);
