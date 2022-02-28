import imagenes from './components/imagenes'

const products = [

    {
        id:1,
        name:"Nintendo Switch",
        productType: "Nintendo Switch - Consola Estándard",
        price:235.89,
        rating:4,
        image:imagenes.nintendoSwitch,
        description:"La nueva Switch añade dos horas más de batería en comparación al modelo antiguo, para pasar de entre 3 y 6 horas de duración, a entre 4 y 9 horas. Nintendo Switch se transforma para adaptarse a tu situación y te permite jugar a los títulos que quieras aunque no tengas mucho tiempo.Es una nueva era en la que no tienes que adaptar tu vida a los videojuegos: ahora es la consola la que se adapta a tu vida."
        

    },

    {
        id:2,
        name:"Apple MacBook",
        productType: "Apple MacBook Air 13.3 M1 8GB/256GB SSD",
        price:1004.23,
        rating:5,
        image:imagenes.macbook,
        description:"El chip M1 de Apple redefine el portátil más fino y ligero. La CPU es hasta 3,5 veces más potente. Los gráficos, hasta cinco veces más rápidos."
    },

    {
        id:3,
        name:"PlayStation 5",
        productType: "Consola Sony PS5 - PlayStation 5 Edición Digital",
        price:376.30,
        rating:4,
        image:imagenes.play5,
        description:"Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos."
    },

    {
        id:4,
        name:"Portátil MSI Gaming",
        productType: "Portátil MSI Gaming GL62 6QD-483XFR 15",
        price:609.00,
        rating:4,
        image:imagenes.msi,
        description:"MSI GAMING GL62 6QD-483XFR 15 Core i5 2,3 GHz - HDD 1 TB - 8GB - NVIDIA GeForce GTX 950M Back Market trabaja con reacondicionadores profesionales que se encargan de revisar que cada producto está en perfectas condiciones y funcionando al 100% del taller en el que se revisa y repara. Podemos estar tranquilos, todos los productos vendidos en Back Market vienen con 30 días de devolución y 2 años de garantía."
    }

]

export default products