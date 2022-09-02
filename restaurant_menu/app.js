let MENU = {
    Brunch: {
        Eggs_Benedict: {
            small: $5,
            medium: $8,
            large: $11,
            extra_egg: $2
        },

        Muffin: {
            corn: $7,
            blueberry: $7,
            chocolate: $7,
            gluten_free: $20
        },

        Omlette: {
            cheese: $12,
            western: $12,
            Meaty: $12,
            veggy: $12
        },

        Frenchtoast: {
            plain: $5,
            berries: $7,
            whippedCream: $6,
            chocolate: $15
        },

        BreakfastBurrito: {
            cheese: $12,
            western: $12,
            Meaty: $12,
            veggy: $12
        },

        pancakes: {
            plain: $5,
            berries: $7,
            whippedCream: $6,
            chocolate: $15

        }
    },
    Lunch: {
        Burger: {
            plain: $10,
            Western: $10,
            baconCheese: $10,
            Elvis: $10,
        },

        Chicken_Burger: {
            plain: $10,
            Western: $10,
            baconCheese: $10,
            Elvis: $10,
        },

        Salad: {
            plain: $10,
            Western: $10,
            baconCheese: $10,
            Elvis: $10,
        },

        Chicken_Wings: {
            lemon_pepper: $30,
            bbq: $30,
            spicy: $30,
            fire: $30,
        },

        Tacos: {
            chicken: $12,
            beef: $12,
            pork: $12,
            fish: $12,
        },

        Sushi: {
            Chicken: $12,
            Beef: $12,
            Pork: $12,
            Fish: $12,

        }

    },
    Dinner: {
        Steak: {
            rare: $100,
            medium_rare: $100,
            medium: $100,
            well_done: $100,
        },

        Pasta: {
            tomato: $15,
            cheesy: $15,
            bolonaze: $15,
            aribatta: $15,
        },

        Chicken: {
            fried: $27,
            baked: $27,
            grilled: $27,
            boiled: $27,
        },

        Soup: {
            tomato: $6,
            chicken_noodle: $6,
            matzo_ball: $6,
            regular: $6
        },

        BloomingOnion: {
            small: $12,
            medium: $12,
            large: $12,
            spicy: $12,
        },

        Lobster: {
            small: $seasonal,
            medium: $seasonal,
            large: $seasonal,
            XL: $seasonal,
        }
    },
    Desert: {
        FruitSalad: {
            small: $8,
            medium: $8,
            large: $8,
            XL: $8,
        },
        Pie: {
            apple: $5,
            cherry: $5,
            berry: $5,
            vegan: $500,
        },

        IceCream: {
            apple: $5,
            cherry: $5,
            berry: $5,
            vegan: $500,
        },

        BirthdayCake: {
            apple: $5,
            cherry: $5,
            berry: $5,
            vegan: $500,
        },

        Apertif: {
            single: $5,
            double: $10,
            triple: $15,
            moonshine: $50,
        },

        Brownie: {
            small: $8,
            medium: $8,
            large: $8,
            XL: $8,
        }
    },
    Entre: {
        Spaghetti: {
            small: $7,
            medium: $10,
            large: $15,
            family_size: $40
        },

        PBNJ: {
            small: $7,
            medium: $10,
            large: $15,
            family_size: $40
        },

        TunaTartar: {
            small: $7,
            medium: $10,
            large: $15,
            family_size: $40
        },

        sharkfin_soup: {
            small: $7,
            medium: $10,
            large: $15,
            family_size: $40
        },

        Spam: {
            small: $7,
            medium: $10,
            large: $15,
            family_size: $40
        },

        Hotdogs: {
            small: $7,
            medium: $10,
            large: $15,
            family_size: $40
        }
    },
    Appetizers: {
        Tea: {
            small: $7,
            medium: $10,
            large: $15,
            family_size: $40
        },

        OnionRings: {
            small: $7,
            medium: $10,
            large: $15,
            family_size: $40
        },

        ShrimpCocktail: {
            small: $7,
            medium: $10,
            large: $15,
            family_size: $40
        },

        Calamari: {
            small: $7,
            medium: $10,
            large: $15,
            family_size: $40
        },
        Apples: {
            small: $7,
            medium: $10,
            large: $15,
            family_size: $40
        },
        Salad: {
            small: "S7",
            medium: "$10",
            large: $15,
            family_size: $40
        },
    },
}



const displaySpecials = () => {


    let mainTitle = document.querySelector(".ttt")

    mainTitle.addEventListener("click", () => {

        mainTitle.innerText = MENU.Salad.small
    })

}