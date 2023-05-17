import MyCourse from "./MyCourse"

export default function MyContent () {

    const myCourses = [
        {
            id:1,
            title:"titulo",
            category:"Dogs",
            languaje:"spanish",
            img:"https://s3-alpha-sig.figma.com/img/e31d/0ffb/b2af28f73a34be0b95a93537aa9a355b?Expires=1685318400&Signature=FZRBKvIK5FH63iYdAmttm8-eQXS8~iYoUSJeOuvp2HFi~s3SqEnHuz4Q~JObuSb4s5bEDykjgn1gYSz7BW91CrvPzusoRiMU8Zk4d8DoY248JPKLFf-Psnfncz3ENQz9vWrR2TbTnKFap7cMkMQI2t8zUcLLLfa0chjvvk0AUhYmyfwMDYGrfETW3GheH~nQfivJC3nGwfdv7w5z7wJwx1v1ATVTg5AyR6kzkucvphpAy2mhe2PyRyA64QpMGl8IS4LDZwEENzBtwq03QMWY1bZgQd6JtfISfauqTgRATu6Tk1HoN8mYXH7bQs25r6rtm1HIQQBn6yE2mKUrXfBeNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
            id:2,
            title:"titulo",
            category:"Dogs",
            languaje:"spanish",
            img:"https://s3-alpha-sig.figma.com/img/e31d/0ffb/b2af28f73a34be0b95a93537aa9a355b?Expires=1685318400&Signature=FZRBKvIK5FH63iYdAmttm8-eQXS8~iYoUSJeOuvp2HFi~s3SqEnHuz4Q~JObuSb4s5bEDykjgn1gYSz7BW91CrvPzusoRiMU8Zk4d8DoY248JPKLFf-Psnfncz3ENQz9vWrR2TbTnKFap7cMkMQI2t8zUcLLLfa0chjvvk0AUhYmyfwMDYGrfETW3GheH~nQfivJC3nGwfdv7w5z7wJwx1v1ATVTg5AyR6kzkucvphpAy2mhe2PyRyA64QpMGl8IS4LDZwEENzBtwq03QMWY1bZgQd6JtfISfauqTgRATu6Tk1HoN8mYXH7bQs25r6rtm1HIQQBn6yE2mKUrXfBeNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        },
        {
            id:3,
            title:"titulo",
            category:"Dogs",
            languaje:"spanish",
            img:"https://s3-alpha-sig.figma.com/img/e31d/0ffb/b2af28f73a34be0b95a93537aa9a355b?Expires=1685318400&Signature=FZRBKvIK5FH63iYdAmttm8-eQXS8~iYoUSJeOuvp2HFi~s3SqEnHuz4Q~JObuSb4s5bEDykjgn1gYSz7BW91CrvPzusoRiMU8Zk4d8DoY248JPKLFf-Psnfncz3ENQz9vWrR2TbTnKFap7cMkMQI2t8zUcLLLfa0chjvvk0AUhYmyfwMDYGrfETW3GheH~nQfivJC3nGwfdv7w5z7wJwx1v1ATVTg5AyR6kzkucvphpAy2mhe2PyRyA64QpMGl8IS4LDZwEENzBtwq03QMWY1bZgQd6JtfISfauqTgRATu6Tk1HoN8mYXH7bQs25r6rtm1HIQQBn6yE2mKUrXfBeNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
        }
    ]

    return (
        <div className=" w-[50%] mx-[auto]">
            <div className="py-[2.25rem] px-[1.688rem] border-[1px] border-[#BDC5CD] border-b-0">
                <h2 className="font-extrabold text-[2rem] leading-[1.5rem] mb-[0.75rem] ">My content</h2>
                <span className="font-semibold text-[1.2rem] leading-[1.5rem] text-[#687684]">Courses made by you.</span>
            </div>

            <div className="flex justify-between flex-wrap py-[1rem] px-[1.7rem] border-[1px] border-[#BDC5CD]">
                {
                    myCourses.map(course=>{
                        return (
                            <MyCourse key={course.id}/>
                        )
                    })
                }
            </div>

        </div>
    )
}