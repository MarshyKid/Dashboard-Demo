const getEligibleItems = (item, id=false) => {
    const items = {
        pantsDarkBlue: 'Pants (Unisex) - Dark Blue',
        poloRed: 'Polo T-Shirt (Unisex) Short Sleeves - Singapore Red',
        poloWhite: 'Polo T-Shirt (Unisex) Short Sleeves - White',
        roundNeckRed: 'Round Neck T-Shirt (Unisex) Short Sleeves - Red',
        windbreakerDarkBlue: 'Windbreaker (Unisex) - Dark Blue',
        pouchRed: 'Pouch - Singapore Red',
        armsleeveDarkBlue: 'Arm Sleeves - Dark Blue',
        capLightSilver: 'Cap - Light Silver',
        roundNeckGradientPurple: 'Round Neck T-Shirt (Unisex) Short Sleeves - Gradient Purple',
        pouchSeaBlue: 'Pouch - Sea Blue',
        pantsUnisex: 'Pants (Unisex) - Black',
        shortsUnisex: 'Shorts (Unisex) - Black',
        shirtRed: 'T-Shirt (Unisex) Short Sleeves - Red',
        poloBlue: 'Polo T-Shirt (Unisex) Short Sleeves - Blue',


    }
    const itemsID = {
        'EXCO Polo': "978a8c0e-ba61-4011-8899-ffd42fbadf48",
        'Workforce Round Neck': "452017bc-4440-4718-b403-049e8afaa2e7",
        'Technical Officials Polo': "b44461f6-4428-4c02-89a4-6686b1104fa3",
        'Table Officials Polo': "0aa906b8-357b-41ed-98ba-d463080051b1",
    }
    const map = {
        'SPORTSSG EXCO' : {'EXCO Polo' : 2},
        'Workforce' : {'EXCO Polo' : 1, 'Workforce Round Neck' : 1},
        'Technical Official' : {'Technical Officials Polo' : 2},
        'Table Official' : {'Table Officials Polo' : 2}
    };
    if (item in map) {
        if (id) {
            const idObj = {}
            for (const key in map[item]) {
                idObj[itemsID[key]] = map[item][key];
            }
            return idObj;
        } else {
            return map[item];
        }
    }
    return ''
}

export default getEligibleItems;