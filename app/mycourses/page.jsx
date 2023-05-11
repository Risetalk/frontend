import Link from "next/link"
import Image from "next/image"
import ContainerCards from "@/components/ContainerCards"
import Navigation from "../../components/NavBar";


export default function MyCoursesPage() {

    const nextLesson = [
        {
            id: "1",
            title: "AWS Certified Solutions Architect",
            author: "lina",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            imgLesson: "https://s3-alpha-sig.figma.com/img/5abc/f770/24978c219bf2223fc9e32ec5fae8375f?Expires=1684713600&Signature=nDfFfKLVE0FyAjAZs~Fd8p~0-2UscFLAkJHKAzgqqmlO-2pmufwLh5EZtKT6qbcVS1K14FZZUBVFSTeboZPO6Q1puNQgyC7kMfBBJpGlAevkdWmMdvahShe5Etw5pATRD2HyBt-3H-purpQB895OlNzsHYGuXJzIZJc0MeJHp1JluxYciH7h1f52QnFcVg60RrV6pVnGde0FtbNDd247eH7iyB9gaACyvTIB1tJzLmtC~Mh8zHSENOQDWEy81hQzWZEbO40kK2Tjtjm0Z~Gywb2N1xYs~04LxiRBATylzbBxhJ6ZY7bTBBl7cg1PlUuZhoMfWhZdB6O4TK-80VAXeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            id: "2",
            title: "AWS Certified Solutions Architect",
            author: "lina",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            imgLesson: "https://s3-alpha-sig.figma.com/img/5abc/f770/24978c219bf2223fc9e32ec5fae8375f?Expires=1684713600&Signature=nDfFfKLVE0FyAjAZs~Fd8p~0-2UscFLAkJHKAzgqqmlO-2pmufwLh5EZtKT6qbcVS1K14FZZUBVFSTeboZPO6Q1puNQgyC7kMfBBJpGlAevkdWmMdvahShe5Etw5pATRD2HyBt-3H-purpQB895OlNzsHYGuXJzIZJc0MeJHp1JluxYciH7h1f52QnFcVg60RrV6pVnGde0FtbNDd247eH7iyB9gaACyvTIB1tJzLmtC~Mh8zHSENOQDWEy81hQzWZEbO40kK2Tjtjm0Z~Gywb2N1xYs~04LxiRBATylzbBxhJ6ZY7bTBBl7cg1PlUuZhoMfWhZdB6O4TK-80VAXeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            id: "2",
            title: "AWS Certified Solutions Architect",
            author: "lina",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            imgLesson: "https://s3-alpha-sig.figma.com/img/5abc/f770/24978c219bf2223fc9e32ec5fae8375f?Expires=1684713600&Signature=nDfFfKLVE0FyAjAZs~Fd8p~0-2UscFLAkJHKAzgqqmlO-2pmufwLh5EZtKT6qbcVS1K14FZZUBVFSTeboZPO6Q1puNQgyC7kMfBBJpGlAevkdWmMdvahShe5Etw5pATRD2HyBt-3H-purpQB895OlNzsHYGuXJzIZJc0MeJHp1JluxYciH7h1f52QnFcVg60RrV6pVnGde0FtbNDd247eH7iyB9gaACyvTIB1tJzLmtC~Mh8zHSENOQDWEy81hQzWZEbO40kK2Tjtjm0Z~Gywb2N1xYs~04LxiRBATylzbBxhJ6ZY7bTBBl7cg1PlUuZhoMfWhZdB6O4TK-80VAXeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
    ]

    const category = [
        {
            id: "1",
            title: "Desing",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
        },
        {
            id: "2",
            title: "Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        },
        {
            id: "3",
            title: "Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        },
        {
            id: "4",
            title: "Business",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        },
        {
            id: "5",
            title: "Marketing",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        },
        {
            id: "6",
            title: "Photography",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        },
        {
            id: "7",
            title: "Acting",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        },
        {
            id: "8",
            title: "Business",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod"
        },
    ]

    const recommended = [
        {
            id: "1",
            title: "AWS Certified solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            tema: "Desing",
            duration: "3",
            author: "Lina",
            price: "100",
            offer: "80",
            img: "https://s3-alpha-sig.figma.com/img/59e9/1cde/877aacb096082025aaa7528e15f2789e?Expires=1684713600&Signature=K--3edUWPwgZeMYX0xqupY~RBHdmyZ7DAypqD~YmBRyEFIwAYHSgmFqZndnZsH60Xz89cX-ToQW~Ym6d7d2pfWwRE4YatIC3NOBljLr7iIkclBmNiz3MGqcgjUcTf7-mzgiCsX1LoFD0P2v9fn9pQfYyMePfMrRFgBu3vq7aj49SXOwMWG8wDNBtJEMCZUBU5QkJz0A17ddAzFB4dOv-DxOj7wx0UxOXfeI8hYWXXnWON7QaKsgvvd3sxnFzpQDH4dCvBzq8Yj-ZkWDH31lSNK0A4DUds9Ek6DLtdBHom3itatOQyjLAGSsRPLOwfLa9cvAi8avmxO9OYXQlXMsWsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            id: "2",
            title: "AWS Certified solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            tema: "Desing",
            duration: "3",
            author: "Lina",
            price: "100",
            offer: "80",
            img: "https://s3-alpha-sig.figma.com/img/59e9/1cde/877aacb096082025aaa7528e15f2789e?Expires=1684713600&Signature=K--3edUWPwgZeMYX0xqupY~RBHdmyZ7DAypqD~YmBRyEFIwAYHSgmFqZndnZsH60Xz89cX-ToQW~Ym6d7d2pfWwRE4YatIC3NOBljLr7iIkclBmNiz3MGqcgjUcTf7-mzgiCsX1LoFD0P2v9fn9pQfYyMePfMrRFgBu3vq7aj49SXOwMWG8wDNBtJEMCZUBU5QkJz0A17ddAzFB4dOv-DxOj7wx0UxOXfeI8hYWXXnWON7QaKsgvvd3sxnFzpQDH4dCvBzq8Yj-ZkWDH31lSNK0A4DUds9Ek6DLtdBHom3itatOQyjLAGSsRPLOwfLa9cvAi8avmxO9OYXQlXMsWsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            id: "3",
            title: "AWS Certified solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            tema: "Desing",
            duration: "3",
            author: "Lina",
            price: "100",
            offer: "80",
            img: "https://s3-alpha-sig.figma.com/img/59e9/1cde/877aacb096082025aaa7528e15f2789e?Expires=1684713600&Signature=K--3edUWPwgZeMYX0xqupY~RBHdmyZ7DAypqD~YmBRyEFIwAYHSgmFqZndnZsH60Xz89cX-ToQW~Ym6d7d2pfWwRE4YatIC3NOBljLr7iIkclBmNiz3MGqcgjUcTf7-mzgiCsX1LoFD0P2v9fn9pQfYyMePfMrRFgBu3vq7aj49SXOwMWG8wDNBtJEMCZUBU5QkJz0A17ddAzFB4dOv-DxOj7wx0UxOXfeI8hYWXXnWON7QaKsgvvd3sxnFzpQDH4dCvBzq8Yj-ZkWDH31lSNK0A4DUds9Ek6DLtdBHom3itatOQyjLAGSsRPLOwfLa9cvAi8avmxO9OYXQlXMsWsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
        {
            id: "4",
            title: "AWS Certified solutions Architect",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            tema: "Desing",
            duration: "3",
            author: "Lina",
            price: "100",
            offer: "80",
            img: "https://s3-alpha-sig.figma.com/img/59e9/1cde/877aacb096082025aaa7528e15f2789e?Expires=1684713600&Signature=K--3edUWPwgZeMYX0xqupY~RBHdmyZ7DAypqD~YmBRyEFIwAYHSgmFqZndnZsH60Xz89cX-ToQW~Ym6d7d2pfWwRE4YatIC3NOBljLr7iIkclBmNiz3MGqcgjUcTf7-mzgiCsX1LoFD0P2v9fn9pQfYyMePfMrRFgBu3vq7aj49SXOwMWG8wDNBtJEMCZUBU5QkJz0A17ddAzFB4dOv-DxOj7wx0UxOXfeI8hYWXXnWON7QaKsgvvd3sxnFzpQDH4dCvBzq8Yj-ZkWDH31lSNK0A4DUds9Ek6DLtdBHom3itatOQyjLAGSsRPLOwfLa9cvAi8avmxO9OYXQlXMsWsw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        },
    ]

    return (
     
            
            <main className="bg-white">
                <section className="bg-[#22212920]  pb-[5.625rem] pt-[3.125rem]">
                    <header className="flex justify-between flex-wrap w-[87%] mx-[auto]">
                        <div className="flex justify-between w-[100%] items-center mb-[3.125rem]">
                            <h2 className="inline font-bold text-[1.85rem] leading-[3.375rem] text-[#252641]">Welcome back, ready for your next lesson?</h2>
                            <Link href={`#`} className="font-bold text-[1.1rem] leading-[1.875rem] text-black">View history</Link>
                        </div>
                        <div className="flex justify-between w-[100%]">
                            {
                                nextLesson.map(lesson => {
                                    return (
                                        <article className="w-[32%] bg-white px-[1.313rem] pt-[1.188rem] text-[black] rounded-[1.25rem] h-fit" key={lesson.id}>
                                            <Image className="w-[100%] h-[210px] object-cover rounded-[1.25rem]" src={lesson.imgLesson} alt={lesson.title} width={400} height={400} />
                                            <h3 className="font-medium text-[1.25rem] leading-[2.7rem] mt-[0.75rem] mb-[0.55rem]">{lesson.title}</h3>
                                            <div className="flex items-center  mb-[1.563rem] ">
                                                <Image className="inline  bg-slate-500 h-[35px] w-[35px] object-cover object-top rounded-full" src={lesson.imgAuthor} alt={lesson.author} width={500} height={100} />
                                                <span className="font-medium text-[1.2rem] leading-[1.688rem] ml-[0.938rem]">{lesson.author}</span>
                                            </div>
                                            <div className="h-[8px] border-2 bg-[#D9D9D9]">
                                                <div className="h-[100%] bg-[#222129] w-[80%]"></div>
                                            </div>
                                            <span className="block font-semibold text-[0.7rem] leading-[1.313rem] text-[#00000080] w-[100%] text-end py-[0.75rem]">Lesson 5 of 7</span>
                                        </article>
                                    )
                                })
                            }
                        </div>
                    </header>
                </section>

                <section className="text-[black] pt-[3.7rem] pb-[6.25rem]">
                    <div className="w-[87%] m-[auto]">
                        <h2 className="font-semibold text-[#252641] text-[1.85rem] leading-[3.375rem] mb-[3rem]">Choice favourite course from top category</h2>
                        <div className="flex flex-wrap justify-between gap-[3.6rem]">
                            {
                                category.map(cat => {
                                    return (
                                        <article className="w-[21%] flex flex-col items-center p-[1.875rem] px-[2rem] pb-[3.688rem] rounded-[1.25rem] shadow-2xl" key={cat.id}>
                                            <div className="bg-[#662C2E4D] w-[30%] h-[65px]"></div>
                                            <h3 className="font-semibold text-[1.6rem] leading-[2.813rem] mt-[1rem] mb-[1.4rem]">{cat.title}</h3>
                                            <p className="font-normal text-[0.98rem] leading-[1.688rem] text-[#696984] text-center">{cat.description}</p>
                                        </article>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>

                <section className="bg-[#22212921] pt-[6.063rem] pb-[13.313rem]">
                    <div className="w-[87%]  m-[auto]">
                        <ContainerCards key={1} title={"Recommended for you"} link={"See all"} array={recommended} />
                    </div>
                </section>

                <section className="pt-[6.063rem] pb-[6rem]">
                    <div className="w-[87%]  m-[auto]">
                        <ContainerCards key={2} title={"Get choice of your course"} link={"See all"} array={recommended} />
                    </div>
                </section>

                <section className="w-[90%] mx-[auto]">
                    <div className="bg-[#222129] text-center pb-[5.188rem] mx-[auto] rounded-[2.313rem]">
                        <h2 className="font-semibold text-[2rem] leading-[3.375rem] pt-[4.375rem]">Online coaching lessons for remote learning.</h2>
                        <p className="font-normal text-[1.25rem] leading-[2.7rem] pt-[1.875rem] pb-[4.563rem] w-[70%] mx-[auto]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        <Link className="font-bold text-4 leading-[1.5rem] bg-[#F0713D] pt-[1rem] px-[2.5rem] pb-[1rem] rounded-[0.75rem] " href={`#`}>Start learning now</Link>
                    </div>
                </section>

                <section className="pt-[6.063rem] pb-[6rem]">
                    <div className="w-[87%]  m-[auto]">
                        <ContainerCards key={3} title={"The course in personal development"} link={"See all"} array={recommended} />
                    </div>
                </section>

                <section className="bg-[#22212921] pt-[4rem] pb-[13.313rem]">
                    <div className="w-[87%]  m-[auto]">
                        <ContainerCards key={4} title={"Student are viewing"} link={"See all"} array={recommended} />
                    </div>
                </section>

            </main>
        
    )
}