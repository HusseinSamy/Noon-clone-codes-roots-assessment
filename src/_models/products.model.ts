export interface Products {
    GetPercentageForVendors: GetPercentageForVendors;
    lastoffers: GetFreeDliveryBranches;
    getMostOrderedBranch: GetMostOrderedBranch;
    MostSellItems: MostSellItems;
    GetNearestBranche: GetFreeDliveryBranches;
    GetFreeDliveryBranches: GetFreeDliveryBranches;
}

export interface GetFreeDliveryBranches {
    title: string;
    data: RestaurantsElement[];
}

export interface RestaurantsElement {
    name: string;
    RestauranthId: number;
    description?: null;
    logo: string;
    cover: string;
    delivery_time: number;
    delivery_cost: number;
    rate: null;
    IsOpen: string;
    cuisines: Cuisine[];
}

export interface Cuisine {
    id: number;
    name: string;
}

export interface GetPercentageForVendors {
    title: string;
    data: GetPercentageForVendorsDatum[];
}

export interface GetPercentageForVendorsDatum {
    id: number;
    restaurants: RestaurantsElement;
}

export interface MostSellItems {
    title: string;
    data: MostSellItemsDatum[];
}

export interface MostSellItemsDatum {
    itemamount: string;
    itemtotal: number;
    menu_categories_items: MenuCategoriesItems;
}

export interface MenuCategoriesItems {
    id: number;
    name: string;
    photo: string;
    descriptions: string;
    descriptions_en: string;
    name_en: string;
    menu_categories_id: number;
    price: number;
    created: Date;
    modified: Date;
    active: number;
}

export interface GetMostOrderedBranch {
    title: string;
    data: GetMostOrderedBranchDatum[];
}

export interface GetMostOrderedBranchDatum {
    name: string;
    RestauranthId: number;
    cover: string;
    delivery_time: number;
    delivery_cost: number;
    total: number;
    ordersnumber: number;
    branches: Branches;
}

export interface Branches {
    name: string;
    id: number;
    restaurant: Restaurant;
}

export interface Restaurant {
    name: string;
    logo: string;
    cover: string;
    RestauranthId: number;
    cuisines: Cuisine[];
}
