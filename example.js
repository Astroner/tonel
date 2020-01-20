module.exports = {
    "id": 2,
    "data": {
        "er": {
            "title": "engagement rate",
            "values": [
                {
                    "lt": 0.18,
                    "gte": 0.1,
                    "label": "10-18",
                    "value": 1450,
                    "active": false
                },
                {
                    "lt": 0.1,
                    "gte": 0.07,
                    "label": "7-10",
                    "value": 4580,
                    "active": false
                },
                {
                    "lt": 0.07,
                    "gte": 0.03,
                    "label": "3-7",
                    "value": 7894,
                    "active": false
                },
                {
                    "lt": 0.03,
                    "gte": 0.01,
                    "label": "1-3",
                    "value": 15490,
                    "active": true
                },
                {
                    "lt": 0.01,
                    "gte": 0,
                    "label": "0-1",
                    "value": 54650,
                    "active": false
                }
            ],
            "onEmpty": {
                "label": "no er",
                "subLabel": "no er details"
            },
            "mainValue": 0.01
        },
        "cities": {
            "title": "location city",
            "values": [],
            "onEmpty": {
                "label": "no location city",
                "subLabel": "no location city details"
            },
            "visible": false
        },
        "follows": {
            "title": "followers",
            "dataSet": [],
            "onEmpty": {
                "label": "no follows",
                "subLabel": "no follows details"
            },
            "mainValue": 704401
        },
        "chaining": {
            "title": "lookalikes",
            "values": [
                /*{
                    "url": "https://storage.googleapis.com/yolomedia/avatars/poltavskihh.jpg",
                    "label": "poltavskihh",
                    "subLabel": "Poltavskih"
                },
                {
                    "url": "https://storage.googleapis.com/yolomedia/avatars/_buzova_video.jpg",
                    "label": "_buzova_video",
                    "subLabel": "Угарное видео с Бузовой💣"
                },
                {
                    "url": "https://storage.googleapis.com/yolomedia/avatars/dipineco.ru.jpg",
                    "label": "dipineco.ru",
                    "subLabel": "Детские экотовары"
                },
                {
                    "url": "https://storage.googleapis.com/yolomedia/avatars/tomfarr_rus.jpg",
                    "label": "tomfarr_rus",
                    "subLabel": "TOM FARR | ОДЕЖДА"
                },
                {
                    "url": "https://storage.googleapis.com/yolomedia/avatars/buztrue.jpg",
                    "label": "buztrue",
                    "subLabel": "🆕ВСЯ ПРАВДА ОБ ОЛЬГЕ БУЗОВОЙ"
                },
                {
                    "url": "https://storage.googleapis.com/yolomedia/avatars/aliana_talent.jpg",
                    "label": "aliana_talent",
                    "subLabel": "Aliana Ustinenko"
                },
                {
                    "url": "https://storage.googleapis.com/yolomedia/avatars/tv_domashniy.jpg",
                    "label": "tv_domashniy",
                    "subLabel": "Dомашний"
                },
                {
                    "url": "https://storage.googleapis.com/yolomedia/avatars/tv_dom2.jpg",
                    "label": "tv_dom2",
                    "subLabel": "ДОМ 2 ❤️ NEWS"
                },
                {
                    "url": "https://storage.googleapis.com/yolomedia/avatars/dom2_newspletni.jpg",
                    "label": "dom2_newspletni",
                    "subLabel": "ДОМ2 ТНТ ПОСТРОЙ СВОЮ ЛЮБОВЬ❤️"
                },
                {
                    "url": "https://storage.googleapis.com/yolomedia/avatars/buna.beauty.bar.jpg",
                    "label": "buna.beauty.bar",
                    "subLabel": "BUNA Beauty Bar"
                }*/
            ],
            "onEmpty": {
                "label": "no lookalikes",
                "subLabel": "no lookalikes details"
            }
        },
        "erSpread": {
            "title": "er spread",
            "values": [
                {
                    "url": "https://www.instagram.com/p/B3adT0pISAv",
                    "label": "2019-10-09 21:10:17",
                    "value": [
                        {
                            "color": "#6172FF",
                            "label": "comments",
                            "value": 31
                        },
                        {
                            "color": "#FFDA54",
                            "label": "likes",
                            "value": 4660
                        }
                    ]
                },
                {
                    "url": "https://www.instagram.com/p/B3W2spWojt0",
                    "label": "2019-10-08 12:10:03",
                    "value": [
                        {
                            "color": "#6172FF",
                            "label": "comments",
                            "value": 32
                        },
                        {
                            "color": "#FFDA54",
                            "label": "likes",
                            "value": 812
                        }
                    ]
                },
                {
                    "url": "https://www.instagram.com/p/B2HVg5qlwdl",
                    "label": "2019-09-07 15:09:12",
                    "value": [
                        {
                            "color": "#6172FF",
                            "label": "comments",
                            "value": 581
                        },
                        {
                            "color": "#FFDA54",
                            "label": "likes",
                            "value": 6008
                        }
                    ]
                },
                {
                    "url": "https://www.instagram.com/p/B2EGjEDl1kx",
                    "label": "2019-09-06 09:09:57",
                    "value": [
                        {
                            "color": "#6172FF",
                            "label": "comments",
                            "value": 35
                        },
                        {
                            "color": "#FFDA54",
                            "label": "likes",
                            "value": 2385
                        }
                    ]
                },
                {
                    "url": "https://www.instagram.com/p/B1Ze8hlllMt",
                    "label": "2019-08-20 19:08:03",
                    "value": [
                        {
                            "color": "#6172FF",
                            "label": "comments",
                            "value": 82
                        },
                        {
                            "color": "#FFDA54",
                            "label": "likes",
                            "value": 2724
                        }
                    ]
                },
                {
                    "url": "https://www.instagram.com/p/B1Ze8hlllMt",
                    "label": "2019-08-20 19:08:03",
                    "value": [
                        {
                            "color": "#6172FF",
                            "label": "comments",
                            "value": 258
                        },
                        {
                            "color": "#FFDA54",
                            "label": "likes",
                            "value": 3196
                        }
                    ]
                },
                {
                    "url": "https://www.instagram.com/p/B1V9f1UFgvJ",
                    "label": "2019-08-19 11:08:11",
                    "value": [
                        {
                            "color": "#6172FF",
                            "label": "comments",
                            "value": 86
                        },
                        {
                            "color": "#FFDA54",
                            "label": "likes",
                            "value": 4814
                        }
                    ]
                },
                {
                    "url": "https://www.instagram.com/p/B1V9f1UFgvJ",
                    "label": "2019-08-19 11:08:11",
                    "value": [
                        {
                            "color": "#6172FF",
                            "label": "comments",
                            "value": 93
                        },
                        {
                            "color": "#FFDA54",
                            "label": "likes",
                            "value": 5380
                        }
                    ]
                },
                {
                    "url": "https://www.instagram.com/p/B1OU5VaFvKf",
                    "label": "2019-08-16 11:08:24",
                    "value": [
                        {
                            "color": "#6172FF",
                            "label": "comments",
                            "value": 141
                        },
                        {
                            "color": "#FFDA54",
                            "label": "likes",
                            "value": 3284
                        }
                    ]
                },
                {
                    "url": "https://www.instagram.com/p/B1OU5VaFvKf",
                    "label": "2019-08-16 11:08:24",
                    "value": [
                        {
                            "color": "#6172FF",
                            "label": "comments",
                            "value": 146
                        },
                        {
                            "color": "#FFDA54",
                            "label": "likes",
                            "value": 3674
                        }
                    ]
                }
            ],
            "onEmpty": {
                "label": "no er spread",
                "subLabel": "no er spread details"
            }
        },
        "mainInfo": {
            "avatar": "https://storage.googleapis.com/yolomedia/avatars/olgabuzova_design.jpg",
            "fullName": "Olga Buzova Design",
            "username": "olgabuzova_design",
            "isVerified": false
        },
        "topPosts": {
            "popular": {
                "title": "posts",
                "values": [
                    {
                        "code": "B1GpndHlnIe",
                        "text": "Новые укорочённые толстовки с капюшоном 💋🤗 можно нанести любой ох наших брендовых принтов 🔥🔥🔥\n.\n@buzova86 .\nРазмер: XS / S / M / L / ХL / ХХL \nРазмеры: 40/42/44/46/48/50/52/54/56\nТкань: 100% хлопок .\nЦена: 4500р \nДоставка по Москве и МО.\nДоставка курьером по всему миру 🌎🌏🌍\nДля заказа Вы можете воспользоваться whats app : 📞 +7-963-711-81-22 и принимаем заказы в Direct  Оптовое сотрудничество: olga.buzova.2015@bk.ru 📩 или тел : +7-922-670-61-73 .\n⚜️. Пункт самовывоза: м. Павелецкая. Ул. Зацепа, дом 21 @shtab_number1 🛍 #людиневерили #olgabuzova_design #МалоПоловин #NotEnoughForMe #онанебоится #ясоздаютренды #ясоздаюисторию #малополовин #подзвукипоцелуев",
                        "likes": 798,
                        "views": 0,
                        "comments": 12,
                        "postDate": "2019-08-13 12:08:14"
                    },
                    {
                        "code": "B3W2spWojt0",
                        "text": "Бестселлер 🔥🔥🔥🔥🔥🔥🔥#губы 💋💋💋💋💋💋💋💋💋\n.\n@buzova86 .\nРазмер: XS / S / M / L / ХL / ХХL \nРазмеры: 40/42/44/46/48/50/52/54/56\nТкань: 100% хлопок .\nЦена: 3000 т р \nДоставка по Москве и МО.\nДоставка курьером по всему миру 🌎🌏🌍\nДля заказа Вы можете воспользоваться whats app : 📞 +7-963-711-81-22 и принимаем заказы в Direct  Оптовое сотрудничество: olga.buzova.2015@bk.ru 📩 или тел : +7-922-670-61-73 .\n⚜️. Пункт самовывоза: м. Павелецкая. Ул. Зацепа, дом 21 @shtab_number1 🛍 #людиневерили #olgabuzova_design #МалоПоловин #NotEnoughForMe #онанебоится #ясоздаютренды #ясоздаюисторию #малополовин #подзвукипоцелуев",
                        "likes": 812,
                        "views": 6219,
                        "comments": 32,
                        "postDate": "2019-10-08 12:10:03"
                    },
                    {
                        "code": "B1GpndHlnIe",
                        "text": "Новые укорочённые толстовки с капюшоном 💋🤗 можно нанести любой ох наших брендовых принтов 🔥🔥🔥\n.\n@buzova86 .\nРазмер: XS / S / M / L / ХL / ХХL \nРазмеры: 40/42/44/46/48/50/52/54/56\nТкань: 100% хлопок .\nЦена: 4500р \nДоставка по Москве и МО.\nДоставка курьером по всему миру 🌎🌏🌍\nДля заказа Вы можете воспользоваться whats app : 📞 +7-963-711-81-22 и принимаем заказы в Direct  Оптовое сотрудничество: olga.buzova.2015@bk.ru 📩 или тел : +7-922-670-61-73 .\n⚜️. Пункт самовывоза: м. Павелецкая. Ул. Зацепа, дом 21 @shtab_number1 🛍 #людиневерили #olgabuzova_design #МалоПоловин #NotEnoughForMe #онанебоится #ясоздаютренды #ясоздаюисторию #малополовин #подзвукипоцелуев",
                        "likes": 1030,
                        "views": 0,
                        "comments": 17,
                        "postDate": "2019-08-13 12:08:14"
                    }
                ],
                "onEmpty": {
                    "label": "no popular posts",
                    "subLabel": "no popular posts details"
                }
            },
            "promotion": {
                "title": "posts",
                "values": [
                    {
                        "code": "B1GpndHlnIe",
                        "text": "Новые укорочённые толстовки с капюшоном 💋🤗 можно нанести любой ох наших брендовых принтов 🔥🔥🔥\n.\n@buzova86 .\nРазмер: XS / S / M / L / ХL / ХХL \nРазмеры: 40/42/44/46/48/50/52/54/56\nТкань: 100% хлопок .\nЦена: 4500р \nДоставка по Москве и МО.\nДоставка курьером по всему миру 🌎🌏🌍\nДля заказа Вы можете воспользоваться whats app : 📞 +7-963-711-81-22 и принимаем заказы в Direct  Оптовое сотрудничество: olga.buzova.2015@bk.ru 📩 или тел : +7-922-670-61-73 .\n⚜️. Пункт самовывоза: м. Павелецкая. Ул. Зацепа, дом 21 @shtab_number1 🛍 #людиневерили #olgabuzova_design #МалоПоловин #NotEnoughForMe #онанебоится #ясоздаютренды #ясоздаюисторию #малополовин #подзвукипоцелуев",
                        "likes": 798,
                        "views": 0,
                        "comments": 12,
                        "postDate": "2019-08-13 12:08:14"
                    },
                    {
                        "code": "B3W2spWojt0",
                        "text": "Бестселлер 🔥🔥🔥🔥🔥🔥🔥#губы 💋💋💋💋💋💋💋💋💋\n.\n@buzova86 .\nРазмер: XS / S / M / L / ХL / ХХL \nРазмеры: 40/42/44/46/48/50/52/54/56\nТкань: 100% хлопок .\nЦена: 3000 т р \nДоставка по Москве и МО.\nДоставка курьером по всему миру 🌎🌏🌍\nДля заказа Вы можете воспользоваться whats app : 📞 +7-963-711-81-22 и принимаем заказы в Direct  Оптовое сотрудничество: olga.buzova.2015@bk.ru 📩 или тел : +7-922-670-61-73 .\n⚜️. Пункт самовывоза: м. Павелецкая. Ул. Зацепа, дом 21 @shtab_number1 🛍 #людиневерили #olgabuzova_design #МалоПоловин #NotEnoughForMe #онанебоится #ясоздаютренды #ясоздаюисторию #малополовин #подзвукипоцелуев",
                        "likes": 812,
                        "views": 6219,
                        "comments": 32,
                        "postDate": "2019-10-08 12:10:03"
                    },
                    {
                        "code": "B1GpndHlnIe",
                        "text": "Новые укорочённые толстовки с капюшоном 💋🤗 можно нанести любой ох наших брендовых принтов 🔥🔥🔥\n.\n@buzova86 .\nРазмер: XS / S / M / L / ХL / ХХL \nРазмеры: 40/42/44/46/48/50/52/54/56\nТкань: 100% хлопок .\nЦена: 4500р \nДоставка по Москве и МО.\nДоставка курьером по всему миру 🌎🌏🌍\nДля заказа Вы можете воспользоваться whats app : 📞 +7-963-711-81-22 и принимаем заказы в Direct  Оптовое сотрудничество: olga.buzova.2015@bk.ru 📩 или тел : +7-922-670-61-73 .\n⚜️. Пункт самовывоза: м. Павелецкая. Ул. Зацепа, дом 21 @shtab_number1 🛍 #людиневерили #olgabuzova_design #МалоПоловин #NotEnoughForMe #онанебоится #ясоздаютренды #ясоздаюисторию #малополовин #подзвукипоцелуев",
                        "likes": 1030,
                        "views": 0,
                        "comments": 17,
                        "postDate": "2019-08-13 12:08:14"
                    }
                ],
                "onEmpty": {
                    "label": "no promotion posts",
                    "subLabel": "no promotion posts details"
                }
            }
        },
        "userTags": {
            "title": "popular user tags",
            "values": [
                /*{
                    "url": "https://storage.googleapis.com/yolomedia/avatars/smolovfedor_10.jpg",
                    "label": "smolovfedor_10",
                    "subLabel": "Fedor Smolov"
                },
                {
                    "url": "https://storage.googleapis.com/yolomedia/avatars/olgabuzova_design.jpg",
                    "label": "olgabuzova_design",
                    "subLabel": "Olga Buzova Design"
                },
                {
                    "url": "https://storage.googleapis.com/yolomedia/avatars/olgabuzova_design.jpg",
                    "label": "olgabuzova_design",
                    "subLabel": "Olga Buzova Design"
                }*/
            ],
            "onEmpty": {
                "label": "no user tags",
                "subLabel": "no user tags details"
            }
        },
        "countries": {
            "title": "location country",
            "values": [],
            "onEmpty": {
                "label": "no location country",
                "subLabel": "no location country details"
            },
            "visible": false
        },
        "followers": {
            "title": "followers",
            "dataSet": [
                /*{
                    "label": "August",
                    "value": 427527
                },
                {
                    "label": "July",
                    "value": 384591
                },
                {
                    "label": "June",
                    "value": 454183
                },
                {
                    "label": "May",
                    "value": 353931
                },
                {
                    "label": "October",
                    "value": 704401
                },
                {
                    "label": "September",
                    "value": 613365
                }*/
            ],
            "onEmpty": {
                "label": "no followers",
                "subLabel": "no followers details"
            },
            "mainValue": 704401
        },
        "languages": {
            "title": "audience language",
            "values": [],
            "onEmpty": {
                "label": "no audience language",
                "subLabel": "no audience language details"
            },
            "visible": false
        },
        "genderSplit": {
            "title": "gender split",
            "values": [],
            "onEmpty": {
                "label": "no gender split",
                "subLabel": "no gender split details"
            },
            "visible": false
        },
        "popularTags": {
            "title": "popular tags",
            "values": [],
            "onEmpty": {
                "label": "no popular tags",
                "subLabel": "no popular tags details"
            }
        },
        "audienceReach": {
            "title": "audience reach",
            "values": [],
            "onEmpty": {
                "label": "no audience reach",
                "subLabel": "no audience reach details"
            },
            "visible": false
        },
        "brandAffinity": {
            "title": "influencer brand affinity",
            "values": [
                /*{
                    "url": "https://storage.googleapis.com/yolomedia/avatars/bmwru.jpg",
                    "label": "bmwru",
                    "subLabel": "BMW Russia"
                },
                {
                    "url": "https://storage.googleapis.com/yolomedia/avatars/avonrussia.jpg",
                    "label": "avonrussia",
                    "subLabel": "Avon Russia"
                },
                {
                    "url": "https://storage.googleapis.com/yolomedia/avatars/sonyrussia.jpg",
                    "label": "sonyrussia",
                    "subLabel": "Sony Russia"
                }*/
            ],
            "onEmpty": {
                "label": "no influencer brand affinity",
                "subLabel": "no influencer brand affinity details"
            },
            "visible": false
        },
        "ageGenderSpread": {
            "title": "age gender split",
            "values": [],
            "onEmpty": {
                "label": "no age gender split",
                "subLabel": "no age gender split details"
            },
            "visible": false
        },
        "popularHashTags": {
            "title": "popular hash tags",
            "values": [/*'губы','людиневерили','olgabuzova_design','МалоПоловин','NotEnoughForMe'*/],
            "onEmpty": {
                "label": "no popular hash tags",
                "subLabel": "no popular hash tags details"
            }
        },
        "verticalMetrics": [
            {
                "label": "active users",
                "value": 0,
                "visible": false
            },
            {
                "label": "active users",
                "value": 0,
                "visible": false
            },
            {
                "label": "notable followers",
                "value": 0,
                "visible": false
            }
        ],
        "bloggerInterests": {
            "title": "blogger interests",
            "values": [
                {
                    "icon": "music",
                    "label": "Music"
                },
                {
                    "icon": "ball",
                    "label": "Sports"
                },
                {
                    "icon": "people",
                    "label": "Family"
                }
            ],
            "onEmpty": {
                "label": "no blogger interests",
                "subLabel": "no blogger interests details"
            }
        },
        "notableFollowers": {
            "title": "audience reach",
            "values": [],
            "onEmpty": {
                "label": "no audience reach",
                "subLabel": "no audience reach details"
            },
            "visible": false
        },
        "audienceInterests": {
            "title": "audience interests",
            "values": [
                {
                    "icon": "music",
                    "label": "Music"
                },
                {
                    "icon": "ball",
                    "label": "Sports"
                },
                {
                    "icon": "people",
                    "label": "Family"
                }
            ],
            "onEmpty": {
                "label": "no audience interests",
                "subLabel": "no audience interests details"
            },
            "visible": false
        },
        "horizontalMetrics": [
            {
                "label": "posts",
                "value": 4192
            },
            {
                "label": "average likes",
                "value": 4059
            },
            {
                "label": "average comments",
                "value": 63
            },
            {
                "label": "quality audience",
                "value": 457860
            }
        ]
    }
}