/*
autoriaus
    nuotrauka
    vardas
    pavarde
parasymo laikas
turinys
    tekstas
    nuotrauku sarasas
    fonas
*/
/*
Teksto apimtys:
- mazai: 1-60
- vidutiniskai: 61-300
- daug: 301-10000
*/



const posts = [
    // {
    //     author: {
    //         photo: jpg',
    //         name: '',
    //         lastname: '',
    //         link: ''
    //     },
    //     postTimestamp: 1595402689570,     // miliseconds nuo 1970-01-01 00:00:00
    //     content: {
    //         text: '',
    //         photos: [],
    //         background: ''
    //     }
    // },
    {
        author: {
            photo: 'chuck-norris.jpg',
            name: 'Chuck',
            lastname: 'Norris',
            link: 'chuck-norris'
        },
        postTimestamp: 1596210283527,             // miliseconds nuo 1970-01-01 00:00:00
        content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, accusamus? Fuga debitis temporibus soluta iusto, commodi impedit consectetur maiores cupiditate eveniet repudiandae, asperiores laborum esse voluptatum itaque!'
        }
    },
    {
        author: {
            photo: 'algimantas-cekuolis.jpg',
            name: 'Algimantas',
            lastname: 'Čekuolis',
            link: 'algimantas-cekuolis'
        },
        postTimestamp: 1596210232432,             // miliseconds nuo 1970-01-01 00:00:00
        content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente nemo architecto. Alias, error ipsa? Fugiat sit eum amet excepturi voluptatem, pariatur tempore iure? Suscipit illo unde quaerat sequi aperiam, exercitationem modi mollitia accusamus minima ea cumque eum sed voluptates tenetur dolor eos totam distinctio quisquam sit.'
        }
    },
    {
        author: {
            photo: 'algimantas-cekuolis.jpg',
            name: 'Algimantas',
            lastname: 'Čekuolis',
            link: 'algimantas-cekuolis'
        },
        postTimestamp: 1596209805222,             // miliseconds nuo 1970-01-01 00:00:00
        content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente nemo architecto. Alias, error ipsa? Fugiat sit eum amet excepturi voluptatem, pariatur tempore iure? Suscipit illo unde quaerat sequi aperiam, exercitationem modi mollitia accusamus minima ea cumque eum sed voluptates tenetur dolor eos totam distinctio quisquam sit. Quis blanditiis alias asperiores aliquid error facere odio, quae ea officia, minima libero necessitatibus in soluta omnis architecto fugiat, quos odit iste? Deserunt magni animi veniam iure id reprehenderit at ducimus, possimus nihil debitis molestiae? Rerum perspiciatis ad aut tenetur corporis iure repellendus! Fugit incidunt, nam laudantium porro maxime rem, deserunt enim nemo officia, cumque quos officiis tempore obcaecati eveniet non cum est at nihil quas similique atque? Beatae optio, reiciendis dolore vitae, vel assumenda quam aut ratione velit consectetur quidem harum cumque eligendi fuga? Perspiciatis doloremque fugit optio laudantium officia. Nesciunt minima ab non, amet provident saepe ipsam necessitatibus, magnam voluptas voluptate facilis harum. Quidem dolores inventore doloremque accusamus, ipsum omnis animi voluptatem, dignissimos architecto ab sapiente? A cumque nihil atque, rem dolor cum voluptatum amet voluptatibus minus ipsum sed ad laboriosam neque nam labore optio quis facilis voluptate nesciunt pariatur. Eligendi, delectus tenetur fugit amet ipsum doloremque voluptatum provident soluta earum nemo voluptate neque ut dolore, iste fugiat. Reprehenderit suscipit tempora in doloribus dolorem eaque fugiat ad, molestias pariatur tenetur minima, alias odio unde voluptatibus non saepe blanditiis nobis magnam deserunt vitae. Eveniet harum dignissimos officiis quaerat pariatur atque cupiditate delectus corrupti quibusdam voluptatem minus nisi molestiae non eos a at optio nostrum, tempora consequatur recusandae doloribus? Impedit iure odit non repellendus autem perspiciatis, quaerat molestias. Amet explicabo aut, reprehenderit adipisci nam hic consequatur dolor quibusdam ipsa natus exercitationem quis beatae provident cumque perferendis possimus corporis molestiae! Amet impedit rerum consectetur rem enim quasi ipsa tempora sapiente assumenda porro illo modi adipisci voluptatum inventore placeat, consequatur laudantium dicta aperiam ad! Culpa velit, minima deleniti architecto aliquid inventore ex. Ab enim perferendis atque eos laudantium harum illum ratione. Exercitationem deserunt corporis tenetur totam, id ad tempore, rerum laudantium dolores recusandae, vitae voluptate eum dolore veritatis quasi sint soluta unde possimus. Quibusdam minus, inventore reiciendis, perspiciatis ipsum ad nisi ex quos id aliquam enim magnam rem doloribus voluptas iste. Quas quibusdam sunt libero suscipit rerum eaque culpa, a nesciunt ipsa fugit, qui enim, exercitationem eius quidem nam quod voluptatibus odit quasi velit adipisci excepturi. Provident in perspiciatis quidem ducimus cum dolorum nesciunt dolor odit vitae. Voluptatem, saepe sunt laborum optio magnam corporis similique voluptatum, provident est commodi sint, magni dolore quam consequuntur quidem mollitia sequi eveniet facere tenetur pariatur. Sunt voluptas natus dolores ducimus ipsam ut a eos maiores veniam modi. Fuga quod exercitationem debitis et, nam rerum quis voluptatem velit ducimus nisi veniam provident a enim beatae laborum error pariatur fugiat quae voluptatum ea itaque nihil perferendis? Assumenda aliquam ab doloribus rem totam. Sequi fuga perspiciatis, similique reprehenderit omnis laboriosam. Expedita praesentium dicta nemo cumque modi aperiam ad, architecto, mollitia necessitatibus ipsa aspernatur rerum fugit magni. Earum eos tempore molestias distinctio nostrum quo voluptatibus optio? Earum quidem explicabo nam sapiente corporis cupiditate ipsam? Ab ducimus, ipsa asperiores provident, odio tenetur nisi eum magni numquam pariatur in. Pariatur molestias necessitatibus atque! Itaque, quam labore. Provident ipsam repellendus voluptatibus. Unde dolor possimus iusto sequi fugiat atque ducimus libero earum vero nostrum, sapiente architecto voluptates ea deleniti! Quam quis est at corporis nesciunt error et deleniti temporibus iste eligendi cum voluptas, voluptate velit libero totam explicabo qui nobis praesentium, unde alias aperiam dignissimos. Voluptatum quam delectus facere veritatis ex aperiam vel impedit beatae unde ut, magnam at quis harum vero officiis tempora voluptatibus esse accusamus dolorum? Laborum perspiciatis animi quaerat inventore ratione. Sint repudiandae debitis explicabo esse voluptates quas earum incidunt aperiam corrupti repellendus aliquid distinctio rem eum dignissimos quia laborum assumenda, corporis ab molestiae. Expedita laboriosam vero enim ut dolor voluptatum delectus praesentium, voluptas accusantium perferendis non placeat laudantium labore est repellendus commodi. Illum quibusdam quam doloribus ipsum, inventore molestias suscipit. Hic, id eaque. Quasi voluptates placeat labore possimus totam. Eum quasi nobis, reprehenderit incidunt laborum labore eaque odit in veritatis voluptate, perspiciatis maxime reiciendis aut ex, mollitia ipsa optio officia saepe non velit culpa! In quisquam aspernatur, optio ipsa enim fuga aperiam harum minus laudantium. Hic explicabo itaque expedita voluptate officiis eaque quam quae eius ut, eveniet ad laboriosam aliquid dignissimos? Quibusdam quos maiores dolorum vel laudantium, sapiente necessitatibus ratione perspiciatis, non sunt est deleniti aspernatur aperiam reprehenderit? Ipsum earum quia tempora culpa sit aliquid, expedita atque consequuntur in iure molestias consectetur impedit velit sint possimus quos assumenda cum suscipit facere autem repellat architecto, quas nobis. Ratione labore in beatae dignissimos, consequuntur quasi quae! Illo pariatur autem illum sit earum.'
        }
    },
    {
        author: {
            photo: 'harley-quinn.jpg',
            name: 'Harley',
            lastname: 'Quinn',
            link: 'harley-quinn'
        },
        postTimestamp: 1596208805222,             // miliseconds nuo 1970-01-01 00:00:00
        content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            background: 'orange'
        }
    },
    {
        author: {
            photo: 'jackie-chan.jpg',
            name: 'Jackie',
            lastname: 'Chan',
            link: 'jackie-chan'
        },
        postTimestamp: 1596198805222,             // miliseconds nuo 1970-01-01 00:00:00
        content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente nemo architecto. Alias, error ipsa?',
            photos: [
                'photo1.jpg'
            ]
        }
    },
    {
        author: {
            photo: 'bruce-lee.jpg',
            name: 'Bruce',
            lastname: 'Lee',
            link: 'bruce-lee'
        },
        postTimestamp: 1596098805222,             // miliseconds nuo 1970-01-01 00:00:00
        content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente nemo architecto. Alias, error ipsa?',
            photos: [
                'photo1.jpg',
                'photo2.jpg'
            ]
        }
    },
    {
        author: {
            photo: 'bruce-willis.jpg',
            name: 'Bruce',
            lastname: 'Willis',
            link: 'bruce-willis'
        },
        postTimestamp: 1595098805222,             // miliseconds nuo 1970-01-01 00:00:00
        content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente nemo architecto. Alias, error ipsa?',
            photos: [
                'photo1.jpg',
                'photo2.jpg',
                'photo3.jpg'
            ]
        }
    },
    {
        author: {
            photo: 'ip-man.jpg',
            name: 'Ip',
            lastname: 'Man',
            link: 'ip-man'
        },
        postTimestamp: 1594300487052,             // miliseconds nuo 1970-01-01 00:00:00
        content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente nemo architecto. Alias, error ipsa?',
            photos: [
                'photo1.jpg',
                'photo2.jpg',
                'photo3.jpg',
                'photo4.jpg'
            ]
        }
    },
    {
        author: {
            photo: 'optimus-prime.png',
            name: 'Optimus',
            lastname: 'Prime',
            link: 'optimus-prime'
        },
        postTimestamp: 1584300487052,             // miliseconds nuo 1970-01-01 00:00:00
        content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente nemo architecto. Alias, error ipsa?',
            photos: [
                'photo1.jpg',
                'photo2.jpg',
                'photo3.jpg',
                'photo4.jpg',
                'photo5.jpg',
                'photo6.jpg',
                'photo7.jpg'
            ]
        }
    },
    {
        author: {
            photo: 'homer-simpson.jpg',
            name: 'Homer',
            lastname: 'Simpson',
            link: 'homer-simpson'
        },
        postTimestamp: 1585402689570,             // miliseconds nuo 1970-01-01 00:00:00
        content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
        }
    },
    {
        author: {
            photo: 'wonder-woman.jpg',
            name: 'Wonder',
            lastname: 'Woman',
            link: 'wonder-woman'
        },
        postTimestamp: 1495402689570,             // miliseconds nuo 1970-01-01 00:00:00
        content: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
            background: 'red'
        }
    },
    {
        author: {
            photo: 'wonder-woman.jpg',
            name: 'Wonder',
            lastname: 'Woman',
            link: 'wonder-woman'
        },
        postTimestamp: 1495402689570,             // miliseconds nuo 1970-01-01 00:00:00
        content: {
            text: 'Lorem ipsum',
            background: 'orange'
        }
    }
];

export default posts;