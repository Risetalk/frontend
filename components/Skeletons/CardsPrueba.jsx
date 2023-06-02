
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function CardsPrueba() {
    const cardData = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },

    ];



    return (
        <div className="justify-between my-[2rem] w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3rem] p-4 mx-[auto] pb-[2rem]">
            {
                cardData.map((row, rowIndex) => (
                    <div key={rowIndex} className="border border-gray-300 mb-4 h-[300px]">
                        <div className='h-[50%]'><Skeleton className=" animate-pulse transition-colors duration-300" height={150} /></div>
                        <div className='flex flex-col justify-around py-[1rem] pl-[0.6rem]'>
                            <h2><Skeleton className=" animate-pulse transition-colors duration-300" width={150} height={25} /></h2>
                            <h2><Skeleton className=" animate-pulse transition-colors duration-300" width={140} height={20} /></h2>
                            <h2><Skeleton className=" animate-pulse transition-colors duration-300" width={70} /></h2>
                            <h2><Skeleton className=" animate-pulse transition-colors duration-300" width={70} /></h2>
                            <h2><Skeleton className=" animate-pulse transition-colors duration-300" width={70} /></h2>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

