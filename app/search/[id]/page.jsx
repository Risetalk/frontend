'use client'

import Image from "next/image"
import Link from "next/link"
import ContainerCards from "@/components/ContainerCards"
import globe from '../../../public/globe.png'
import window from '../../../public/window.png'
import file from '../../../public/file.png'
import analitics from '../../../public/analitics.png'
import linkedin from '../../../public/linkedin.png'
import github from '../../../public/github.png'
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

export default function BuyCourseDetail() {
    // const router = useRouter()
    //  const idCourse  = router.query.id
    const path = usePathname()
    const idCourse = path.split('/').pop()
    console.log(idCourse)
    const reviews = [
        {
            id: "1",
            author: "Lina",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            stars: "5",
            time: "3",
            comment: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
        },
        {
            id: "2",
            author: "Lina",
            imgAuthor: "https://s3-alpha-sig.figma.com/img/2f32/d3a9/082c2e2832481561feec93a5e5c5e8d6?Expires=1684713600&Signature=fK1-OcQsSO2cR29Qpk0bQcd64E5p32t0HeF9FXpAp-FyMJjJSPWaB4GME-ie7fAy07wbOA5aKYLpB1rgRnzjpHwAp51I2pF2NHe1~N1jbW0Dcm78CqrJSNjptwF1rno1UJ3U479IQ91C7awFUyZSSaVTWJhAXoqlYn5ZixtWn6vw6GQ-JH2stipNoAw7mBb21ZzMHFFSxQfrCT2r1k9BawBuBMvfKZx-eH8RCPgDqav~MuJab58k-Nhea7jgTjtPmdgxev~rkkpprduV30bwfhkQdMDOFsOnEEzA88ExKRFwsmm~57IGezBjmdAdzwYpjpDEdWBmxpiFQK99b6rKYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            stars: "5",
            time: "3",
            comment: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
        }
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

    const education = [
        {
            id: 1,
            title: "FOR INSTRUCTORS",
            p: "TOTC’s school management software helps traditional and online schools manage scheduling,",
            offer: "50"
        },
        {
            id: 1,
            title: "FOR INSTRUCTORS",
            p: "TOTC’s school management software helps traditional and online schools manage scheduling,",
            offer: "50"
        },
        {
            id: 1,
            title: "FOR INSTRUCTORS",
            p: "TOTC’s school management software helps traditional and online schools manage scheduling,",
            offer: "50"
        },
    ]

    return (
        <main className="bg-white">
            <header>
                <Image className="w-[100%] h-[450px] object-cover" src={"https://s3-alpha-sig.figma.com/img/d46b/8d8d/cd4a8bb14061e62f8b1a3811aec52f49?Expires=1684713600&Signature=SQNiB-MukkvU-eMQe5N8Rvarts29uopR5LJYY2E8gXPfJ0e1-w9LJVQCDjWcFR7xzz6uCurNLo5F6yInNLQx5qQdFMoImtP0fwepCWcmeJrUrjWMiUa~r1WljzUY4zqKZ05DAgkYEiwcyRBqT1ixKiG6Q6Exi1EesZ8VjKzpwvufgdNu4-ks7FmK2GE9PkJ4wbTxWJTc7l7ApxQa5wscOoPZUecy35WSywQLNyqhjfPknmbSVq9e3GIAb8EdooRtzBJHOyIZC2~fzloo2NIRLkIEOCX5ZGr4sHt9-3BQBz9e4B72hEHwt23yIMUoJEnD78FB~TS-FisIYEx~wLBsvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"} width={1574} height={1212} alt="img-header" />
            </header>

            <section className="flex pb-[6.25rem]">
                <div className="w-[60%] mt-[5rem] ">
                    <div className="w-[80%] mx-[auto]">
                        <h1 className="font-black text-[4rem] text-[#262F30] mb-[1.25rem]">Title Course</h1>
                        <p className="font-normal text-[1.25rem] leading-[1.8rem] p-[2rem] bg-[#FFF966B8] rounded-[2.6rem]">A React course is designed to teach students or developers how to build modern, interactive web applications using React.js, a popular JavaScript library for building user interfaces. The course typically covers the fundamental concepts and techniques of React, including component-based architecture, state management, routing, and handling user events.
                            In a React course, students usually start by learning the basics of JavaScript and HTML/CSS if they are not already familiar with these languages.  A React course is designed to teach students or developers how to build modern, interactive web applications using React.js, a popular JavaScript library for building user interfaces.
                        </p>
                    </div>
                </div>

                <div className="w-[40%]">

                    <div className="w-[50%] mx-[auto]">
                        <article className="h-[200px]">
                        <Link href={`checkout/${idCourse}`}><h1 className="text-black">Buy now</h1></Link>
                        </article>
                        <article className="flex flex-col gap-y-[1rem] py-[1.6rem] border-y-2 border-[#696984]">
                            <h3 className="font-semibold text-[2rem] leading-[2.6rem] text-[#000000]">Info</h3>
                            <div className="flex items-center gap-x-[0.4rem]">
                                <Image src={globe} alt='globe-ico' width={25} height={25} />
                                <span className="font-semibold text-[1.2rem] leading-[1.25rem] text-[#00000080]">Leguaje</span>
                            </div>
                            <div className="flex items-center gap-x-[0.4rem]">
                                <Image src={window} alt='window-ico' width={25} height={25} />
                                <span className="font-semibold text-[1.2rem] leading-[1.25rem] text-[#00000080]">Date</span>
                            </div>
                            <div className="flex items-center gap-x-[0.4rem]">
                                <Image src={file} alt='file-ico' width={25} height={25} />
                                <span className="font-semibold text-[1.2rem] leading-[1.25rem] text-[#00000080]">Programming</span>
                            </div>
                            <div className="flex items-center gap-x-[0.4rem]">
                                <Image src={analitics} alt='analitics-ico' width={25} height={25} />
                                <span className="font-semibold text-[1.2rem] leading-[1.25rem] text-[#00000080]">lessons</span>
                            </div>
                        </article >
                        
                        <article className="py-[1.6rem]">
                            <h3 className="font-semibold text-[2rem] leading-[2.6rem] text-[#000000]">Find us at</h3>
                            <div className="flex pt-[1.6rem] gap-x-[0.6rem]">
                                <Image src={linkedin} alt="linkedin-ico" width={35} height={35}/>
                                <Image src={github} alt="github-ico" width={35} height={35}/>
                            </div>
                        </article>
                    </div>

                </div>  

            </section>

            <section className="bg-[#22212921] pt-[4rem] pb-[13.313rem]">
                
                    <ContainerCards key={5} title={"Marketing Articles"} link={"See all"} array={recommended} />
                
            </section>

            <section className="text-[black]">
                <article className="flex w-[85%] mx-[auto] py-[11rem] gap-x-[2rem]">
                    <div className="w-[50%]">
                        <h2 className="font-medium text-[2.25rem] leading-[3.6rem] mb-[1.875rem]">Everything you can do in a physical classroom,<strong className="font-medium text-[2.25rem] leading-[3.6rem] text-[#F0713D]">you can do with TOTC</strong></h2>
                        <p className="font-normal text-[1.5rem] leading-[2.7rem] text-[#696984] mb-[1.875rem]">TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                        <Link href={`#`} className="font-normal text-[1.375rem] leading-[2.5rem] text-[#696984] underline ">Learn more</Link>
                    </div>

                    <div className="w-[50%] flex justify-center">
                        <div className="relative">
                            <div className="z-20">
                                <Image src={"https://s3-alpha-sig.figma.com/img/7a80/a7af/42c44b95173f6bb18529bebd58808a65?Expires=1684713600&Signature=kQwqNuKb3M4erJ2c1a8~Hq9alDbdtFRCCgy6zBW4oYB-~JQamYIDRrprlW20oMXwOBFTOCaLgVZKFIGdAAzAU88Ln-u~v09rqOYa2OSkES~EWeBUQFJLy0xwciJtPfRiJ3I0eRYmwmK2OZc7YYg-oIQLwodo3AWhyDZdi0m3-TNZ62AfRKV5h3n~W8EArTa~Z-mJCobgbV4UdPkIwSVAS3C6FEuUxGftPT1aAUBuvig-EoWyyDmOShsr~aUS8unkIVoUEQ85cjotlCFNZGEC~nzXhvFAb6gdPeC6FTmhV7VjYX5cSa0rq8DvZOgyf0UbwKPmc3UyYxjUJ6Pe8-uQKQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4 "} alt="imagen-section" width={600} height={300} />
                            </div>
                            <div className="absolute bg-[#FF986F] h-[180px] w-[180px] rounded-[1.25rem] z-[1] bottom-[-20px] right-[-20px]"></div>
                            <div className="absolute bg-[#000] h-[180px] w-[180px] rounded-[1.25rem] z-[1] top-[-20px] left-[-20px]"></div>
                        </div>
                    </div>

                </article>
            </section>

            <section>

            </section>
        </main>
    )
}