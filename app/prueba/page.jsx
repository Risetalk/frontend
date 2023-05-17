import TeacherDetail from "@/components/TeacherDetail"
import ContainerOffers from "@/components/ContainerOffers"
import ContainerCreators from "@/components/ContainerCreators-"
import MyContent from "@/components/MyContent"



export default function Prueba (){

    const offers = [
        {
            id: "1",
            title: "Joel Vegas :)",
            description:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor.",
            image: "https://s3-alpha-sig.figma.com/img/a50f/a4ba/d840228ce3559ee0d91cdbbb8f6de157?Expires=1684713600&Signature=iDHS4zvne9yA2~gxCH88McFW-ak4~rCgkEbZLYb-d~ChxbF-HLQll6kqkczeymgKAhbqtKM7gWr1eiphl2XClrg3-vaiUzGipRueQUvK-oTB2etUzasrxesX8aj8oxR0BsJUCofjBrCSdWrh3Nfc2yGcQ~mE0~jejjJGBCTdsJiqw0uGwygRnYDlaCb42jWJSOQsPdpY-V2KSHbceB4O3BBbUvt07z0DwLWEAfWkbaTwNqzTHelDtL0pQqWtT0H9QoL-Hnlae0Ez0bEg7EO9GydvpysLUuNMfueWbzgamDjMCNxBLaI04xUYA6B3IUldf5cgIu48z0-Ozkzr4PAp5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            offer:50,
        },
        {
            id: "2",
            title: "Jesse Mcallums",
            description:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor.",
            image: "https://s3-alpha-sig.figma.com/img/f196/625f/641050b932c9111ac52f05d8d095fe51?Expires=1684713600&Signature=gYwXmjZX1kq5SuGSEbBP~bWn9e4EqFwK9u1K0aJuyI1gbbPkf-lIQVN7mt31EsLxPJivZrf7g8ZuBNQw2WLrpM6paFv9l5Z2uZHfmrOAEYWbeW8wDn6b3ohhYqIQ6TsynR5SMxGoytlfpKg9BUDsNEC0B~TGa8uZTnE2qJxdD8-IBW01~Gea4EeAi-bKhhtFeGS~pfd4MaDCSQB2Lte-uXAs8DT816RAehpvhwwzd5osjzFrVUw4CCeYGJibxHQHmtfKDsrX2o-keT0tgmQFYsrrI-NytxmoAXEBnQ39zU46~2lIMteLMrcMJXuISZ4WXvwIvAntC69akIsfVntJAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            offer:10,
        },
        {
            id: "Miguel Fernandez",
            title: "Lorem ipsum dolor",
            description:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor.",
            image: "https://s3-alpha-sig.figma.com/img/f314/8fce/cf5fbe768394abce19b33e64d5bdc82e?Expires=1684713600&Signature=CS7tUePvfsmQJIs8S04B5ionKOvqmiy3uBgeL57hY3ebj77ZTRluVAsgMaB~J-18ePiv0IRRF1zhzeiaU-MyJdrQPNHPXf-EOhyShR~Dov91KbfojQWAPBJIjokcOmOFCgU35elR7-LURgUHrwn9NXlSMIljT5yioGChzho-UhJien~33yCo2uqW6DbdgrljNCy~p8HwDq6VIwohxR6UKgAvEJJU8XXYeoGoesWXWN0Pm1zub0BJFSontA7uUFssSXWqF5WDe6ZwSaWHZelOY5w01wxPQPUBveZ73E~MlVdQVkMUowCN4FEDXwHU6DpK7dqmlOX~add4gsKHiW8TWg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            offer:50,
        },
        {
            id: "Diego Ibañez",
            title: "Lorem ipsum dolor",
            description:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor.",
            image: "https://s3-alpha-sig.figma.com/img/b167/3966/211b32cf7d6d3113c4d324c45092a27e?Expires=1684713600&Signature=bf5Z~IXz1~p6aHg62eIa7105~ceTJgpUtfArbcG2Q6buAuhQ4ZnbZlPxGaBgK0kn3WFmzrDcKRMqzGTz6SIRW531aqZXzhshuSuRlV3aXsNKBqUc8kvl4NtT4OoBxlvbVjPcd2FH~Q~~EJrAyF1OfIIoM-eBckEXsvx~5EsHm3I9NVH0RSHtKKd7-esYm58cSq~W3XcTgwOg0ojKJ6-oaQP6cjRw6qjFwRtutUBa6OWQmC3KRmNgeYuFWBgs5aZ4e~ksdCxUG1juS9lv7orhHyoK0QVfHCRirOkQ7kVmV1josp4ya00ehIOQWzuUP-hcJKYtR-sDLjfBXyjVGa-1Tg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            offer:50,
        },
        {
            id: "Asistente Anonimo",
            title: "Lorem ipsum dolor",
            description:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor.",
            image: "https://s3-alpha-sig.figma.com/img/993b/7c0c/6e700e4b081b4ffc647e51cbed5ab568?Expires=1684713600&Signature=M15o55zEK-OVRQi4Ta~LJ5uIR-lIRUA5bXJITakSFf111sfYs~HttAwxSMjGFr8tYtw7QrxGrwmCOFeAqisQgSx9fypuDq6MaWO48-BLCWLQZ7RHrp5plHJ4pGISz4IqdLEwGCUmniTdA~Ictjxlj5tREZOQ2AenbD30u3LesxPUTGifHZMJpTwwPUnR57hoBIfojF4EP~t5r~bPECwB1QQaJl-1q9M5jOVwhfsEqaEQTihn5cydna55C8CuPPyMsbTP9Zakway9VNmTj2GbRqJk2YNpj66fkwPdiWUsNbcWDb-EDTLmqa5766QVKBr3BhoQf1Zl5Kxq8GtITWq2xw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            offer:50,
        },
        {
            id: "Chica Anonima",
            title: "Lorem ipsum dolor",
            description:"Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor.",
            image: "https://s3-alpha-sig.figma.com/img/4364/3df7/a0cddfa0ae7c584b93b20c53a064580a?Expires=1684713600&Signature=HU9TGE19EugxMrqDYIby3FXhITXnIKjqaKtSnnUBUdlV-DLoHw3XGfPDFFz6eXMXnPLpHsEROqdmhhJv6RKx1llz4qnd406ptC-PhGRTOeTLb-S3izrP4XALbchyjzA4sJG5LLnuuc9ef5TsfDWu5DqImifHGiOYE9o2pyx3AlkXfMYXPISWL-WFXAwymgiXn1lmtxYmHd5OLfchRZU7NOUlm~-dCOx3QcCzhfcV4QCB-hhqIANRWcG4990pMaDQXoVze4S~12IvXZb4jObdJ22r5YBj9m0j-iqoXyY1e66JKS1IFRyAgq79NJxtyQYU3TP7lkHj2GdycZT5nQU57Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            offer:50,
        },
    ]
    return(
        <div className="pt-[100px] text-black bg-white">
            
            <MyContent/>
        </div>
    )
}