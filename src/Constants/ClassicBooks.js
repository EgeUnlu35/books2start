const classic_books = 
    [{id:1 , 
    name:"Crime and Punishment",
    author:"Fraudor Dostoyevsky",
    release:1964,
    score:4.6,
    summary:"In Fyodor Dostoevsky's Crime and Punishment, the streets of St. Petersburg serve as the backdrop for a gripping tale of morality and consequence. Raskolnikov, a destitute student, grapples with the moral implications of his decision to commit murder. As guilt and paranoia consume him, he embarks on a harrowing journey of redemption and self-discovery in this timeless exploration of the human psyche.",
    image:"https://cdn.kobo.com/book-images/b1c96137-0ddf-4ee4-8f46-73bdfa9b8621/1200/1200/False/crime-and-punishment-by-fyodor-dostoevsky-1.jpg"
    },
    {id:2 ,
    name:"The Count of Monte Cristo" ,
    author:"Alexandre Dumas" ,
    release:1945,
    score:4.0,
    summary: "In Alexandre Dumas' The Count of Monte Cristo, a tale of betrayal and redemption unfolds in the heart of 19th-century France. Imprisoned unjustly, Edmond Dantès emerges as the mysterious Count of Monte Cristo, wielding wealth and cunning to seek revenge on those who wronged him. As Dantès navigates a world of deceit and intrigue, the novel explores themes of justice, forgiveness, and the enduring power of the human spirit.", 
    image:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611834134l/7126.jpg"
},{id:3 ,
    name:"Brave New World" ,
    author:"Aldous Huxley" ,
    release:1932,
    score:3.99,
    summary: "In Aldous Huxley's Brave New World, a futuristic society is meticulously engineered for stability, happiness, and conformity. Set in a world where technology and conditioning dictate every aspect of human life, protagonist Bernard Marx begins to question the rigid social order. As he navigates a world devoid of individuality and emotional depth, Huxley's dystopian vision serves as a cautionary tale about the dangers of sacrificing freedom and humanity for the sake of efficiency and control.", 
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1575509280i/5129.jpg"
},{id:4 ,
    name:"To Kill a Mockingbird" ,
    author:"Harper Lee" ,
    release:1960,
    score:4.26,
    summary: "In Harper Lee's To Kill a Mockingbird, the sleepy town of Maycomb, Alabama sets the stage for a gripping exploration of racial injustice and moral integrity. Through the eyes of young Scout Finch, readers witness the trial of Tom Robinson, a black man falsely accused of assaulting a white woman. As Scout, her brother Jem, and their father Atticus confront bigotry and prejudice, they learn valuable lessons about empathy, courage, and the complexities of human nature.", 
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg"
},{id:5 ,
    name:"Pride and Prejudice" ,
    author:"Jane Austen" ,
    release:1900,
    score:4.29,
    summary: "In Jane Austen's Pride and Prejudice, love and societal expectations collide in the elegant world of 19th-century England. Through the spirited Elizabeth Bennet and the enigmatic Mr. Darcy, readers embark on a journey of wit, romance, and social commentary. Set against a backdrop of country estates and intricate social customs, this timeless classic explores the complexities of love, pride, and the enduring power of first impressions.", 
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg"
},{id:6 ,
    name:"The Great Gatsby" ,
    author:"F. Scott Fitzgerald" ,
    release:1925,
    score:3.93,
    summary: "This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted gin was the national drink and sex the national obsession, it is an exquisitely crafted tale of America in the 1920s.", 
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1490528560i/4671.jpg"
},{id:7 ,
    name:"1984" ,
    author:"George Orwell" ,
    release:1949,
    score:4.19,
    summary: "In George Orwell's dystopian masterpiece 1984, a bleak and oppressive future society is meticulously crafted. Set in a totalitarian regime where surveillance and thought control are pervasive, protagonist Winston Smith rebels against the oppressive Party. As Winston navigates a world devoid of privacy and truth, Orwell's chilling depiction serves as a stark warning against the dangers of authoritarianism and the erosion of individual freedom.", 
    image:"https://m.media-amazon.com/images/I/714PlG5+DXL._SY342_.jpg"
},{id:8 ,
    name:"Lord of the Flies" ,
    author:"William Golding" ,
    release:1954,
    score:3.69,
    summary: "In William Golding's Lord of the Flies, a group of young boys finds themselves stranded on a deserted island without adult supervision. As they struggle to establish order and survive, their primal instincts begin to surface, leading to a descent into savagery and chaos. Through this gripping tale of innocence lost, Golding explores themes of human nature, civilization, and the darkness that lurks within us all.", 
    image:"https://m.media-amazon.com/images/I/81Gn65uv+YL._AC_UF1000,1000_QL80_DpWeblab_.jpg"
},{id:9 ,
    name:"A Tale of Two Cities" ,
    author:"Charles Dickens" ,
    release:1859,
    score:3.87,
    summary: "In Charles Dickens' A Tale of Two Cities, the turbulent backdrop of the French Revolution serves as the canvas for a sweeping narrative of love, sacrifice, and redemption. Set amidst the strife between Paris and London, the lives of disparate characters intertwine in a tale of honor, betrayal, and the pursuit of justice. Through vivid prose and intricate plotting, Dickens masterfully depicts the tumultuous era while exploring timeless themes of resurrection and the enduring power of love.", 
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1344922523i/1953.jpg"
},{id:10 ,
    name:"War and Peace" ,
    author:"Leo Tolstoy" ,
    release:1868,
    score:4.16,
    summary: "In Leo Tolstoy's epic masterpiece War and Peace, the grand tapestry of 19th-century Russia unfolds against the backdrop of the Napoleonic Wars. Through the lives of a diverse cast of characters, including aristocrats, soldiers, and peasants, Tolstoy explores themes of love, war, and the search for meaning in a chaotic world. Spanning over a thousand pages, this monumental novel is hailed as one of the greatest literary achievements in history, offering profound insights into the human condition and the sweep of history.", 
    image:"https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1413215930i/656.jpg"
}
]

const ex={id:0 ,
    name:"" ,
    author:"" ,
    release:1900,
    score:4.0,
    summary: "", 
    image:""
}


export default classic_books