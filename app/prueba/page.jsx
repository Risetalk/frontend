import TeacherDetail from "@/components/TeacherDetail"
import ContainerOffers from "@/components/ContainerOffers"



export default function Prueba (){

    const offers = [
        {
            id: "1",
            title: "Lorem ipsum dolor",
            description:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            image: "https://s3-alpha-sig.figma.com/img/5abc/f770/24978c219bf2223fc9e32ec5fae8375f?Expires=1684713600&Signature=nDfFfKLVE0FyAjAZs~Fd8p~0-2UscFLAkJHKAzgqqmlO-2pmufwLh5EZtKT6qbcVS1K14FZZUBVFSTeboZPO6Q1puNQgyC7kMfBBJpGlAevkdWmMdvahShe5Etw5pATRD2HyBt-3H-purpQB895OlNzsHYGuXJzIZJc0MeJHp1JluxYciH7h1f52QnFcVg60RrV6pVnGde0FtbNDd247eH7iyB9gaACyvTIB1tJzLmtC~Mh8zHSENOQDWEy81hQzWZEbO40kK2Tjtjm0Z~Gywb2N1xYs~04LxiRBATylzbBxhJ6ZY7bTBBl7cg1PlUuZhoMfWhZdB6O4TK-80VAXeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            offer:50,
        },
        {
            id: "2",
            title: "Lorem ipsum dolor",
            description:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            image: "https://s3-alpha-sig.figma.com/img/5abc/f770/24978c219bf2223fc9e32ec5fae8375f?Expires=1684713600&Signature=nDfFfKLVE0FyAjAZs~Fd8p~0-2UscFLAkJHKAzgqqmlO-2pmufwLh5EZtKT6qbcVS1K14FZZUBVFSTeboZPO6Q1puNQgyC7kMfBBJpGlAevkdWmMdvahShe5Etw5pATRD2HyBt-3H-purpQB895OlNzsHYGuXJzIZJc0MeJHp1JluxYciH7h1f52QnFcVg60RrV6pVnGde0FtbNDd247eH7iyB9gaACyvTIB1tJzLmtC~Mh8zHSENOQDWEy81hQzWZEbO40kK2Tjtjm0Z~Gywb2N1xYs~04LxiRBATylzbBxhJ6ZY7bTBBl7cg1PlUuZhoMfWhZdB6O4TK-80VAXeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            offer:10,
        },
        {
            id: "3",
            title: "Lorem ipsum dolor",
            description:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
            image: "https://s3-alpha-sig.figma.com/img/5abc/f770/24978c219bf2223fc9e32ec5fae8375f?Expires=1684713600&Signature=nDfFfKLVE0FyAjAZs~Fd8p~0-2UscFLAkJHKAzgqqmlO-2pmufwLh5EZtKT6qbcVS1K14FZZUBVFSTeboZPO6Q1puNQgyC7kMfBBJpGlAevkdWmMdvahShe5Etw5pATRD2HyBt-3H-purpQB895OlNzsHYGuXJzIZJc0MeJHp1JluxYciH7h1f52QnFcVg60RrV6pVnGde0FtbNDd247eH7iyB9gaACyvTIB1tJzLmtC~Mh8zHSENOQDWEy81hQzWZEbO40kK2Tjtjm0Z~Gywb2N1xYs~04LxiRBATylzbBxhJ6ZY7bTBBl7cg1PlUuZhoMfWhZdB6O4TK-80VAXeg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            offer:50,
        },
    ]
    return(
        <div className="pt-[100px]">
            <ContainerOffers array={offers}/>

        </div>
    )
}