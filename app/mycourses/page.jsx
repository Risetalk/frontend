'use client'

import Link from "next/link"
import Image from "next/image"
import ContainerCards from "@/components/ContainerCards"
import Navigation from "../../components/NavBar";
import { useSelector } from "react-redux";
import ContainerMyCourses from "@/components/ContainerMyCourses";
import Categories from "@/components/Categories";

export default function MyCoursesPage() {

    const courses = useSelector(state => state.courses)


   

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
                
                <ContainerMyCourses/>

                <Categories/>

                <section className="bg-[#22212921] pt-[6.063rem] pb-[13.313rem]">
                    <div >
                        <ContainerCards key={1} title={"Recommended for you"} link={"See all"} array={recommended} />
                    </div>
                </section>

                <section className="pt-[6.063rem] pb-[6rem]">
                    <div >
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
                    <div >
                        <ContainerCards key={3} title={"The course in personal development"} link={"See all"} array={recommended} />
                    </div>
                </section>

                <section className="bg-[#22212921] pt-[4rem] pb-[13.313rem]">
                    <div >
                        <ContainerCards key={4} title={"Student are viewing"} link={"See all"} array={recommended} />
                    </div>
                </section>

            </main>
        
    )
}