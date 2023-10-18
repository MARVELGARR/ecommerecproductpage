
export const imageArray = [
    { id:1, src: '/images/image-product-1.jpg', height: 244, width: 544, alt: 'image-product-1' },
    { id:2, src: '/images/image-product-2.jpg', height: 244, width: 544, alt: 'image-product-2' },
    { id:3, src: '/images/image-product-3.jpg', height: 244, width: 544, alt: 'image-product-3' },
    { id:4, src: '/images/image-product-4.jpg', height: 244, width: 544, alt: 'image-product-4' },
]

export const controller = [
    { src:'/images/icon-previous.svg', height: 25, width: 25, alt: 'previous'},
    { src:'/images/icon-next.svg', height: 25, width: 25, alt: 'next'}
]

export const product = [
    { id:"1", count:0, src: "/images/image-product-1.jpg", imageArray:[
        { id:1, src: '/images/image-product-1.jpg', height: 244, width: 544, alt: 'image-product-1' },
        { id:2, src: '/images/image-product-2.jpg', height: 244, width: 544, alt: 'image-product-2' },
        { id:3, src: '/images/image-product-3.jpg', height: 244, width: 544, alt: 'image-product-3' },
        { id:4, src: '/images/image-product-4.jpg', height: 244, width: 544, alt: 'image-product-4' },
    ], images:[
        {id:"1", src: "/images/image-product-1-thumbnail.jpg", alt: "product-1-thumbnail"},
        {id:"2", src: "/images/image-product-2-thumbnail.jpg", alt: "product-2-thumbnail"},
        {id:"3", src: "/images/image-product-3-thumbnail.jpg", alt: "product-3-thumbnail"},
        {id:"4", src: "/images/image-product-4-thumbnail.jpg", alt: "product-4-thumbnail"},
    ], company: "Sneaker Company", title:"Fall Limited Edition Sneakers", description:'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer', price:'$125.00', previousPrice:'$250.00', percentage:"50%" },
    
    
    { id:"2", count:0, src: "/images/image-product-1.jpg", company: "yam Company", title:"Sneakers", description:' companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer', price:'$125.00', previousPrice:'$250.00', percentage:"50%" },
]