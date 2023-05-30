import Reviews from "./Reviews"
export default function ContainerReviews(){

    const reviews = [{
        name:"nahuel",
        img_profile:"Img",
        review:"Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem"
    },
    {
        name:"joel",
        img_profile:"Img",
        review:"Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem"
    },
    {
        name:"jesse",
        img_profile:"Img",
        review:"Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem"
    },
]
    return (
        <div className="mt-[2rem]">
            <h3 className="font-semibold text-[1.4rem]">Reviews</h3>
            <div className="pl-[1rem] flex flex-col gap-y-[2rem] mt-[1rem]">
            {reviews.map((rew, index)=>{
                return (
                    <Reviews
                    key={index}
                    name={rew.name}
                    img_profile={rew.img_profile}
                    review={rew.review}
                    />
                )
            })}
            </div>
        </div>
    )
}