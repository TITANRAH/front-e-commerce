export interface ProductType {
    id:         number;
    attributes: ProductAttributes;
}

export interface ProductAttributes {
    productName: string;
    slug:        string;
    description: string;
    active:      boolean;
    price:       number;
    origin:      string;
    taste:       string;
    isFeatured:  null;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    images:      Images;
    category:    Category;
}

export interface Category {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    categoryName: string;
    slug:         string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
}

export interface Images {
    data: Datum[];
}

export interface Datum {
    id:         number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export interface Formats {
    large:     Large;
    small:     Large;
    medium:    Large;
    thumbnail: Large;
}

export interface Large {
    ext:         string;
    url:         string;
    hash:        string;
    mime:        string;
    name:        string;
    path:        null;
    size:        number;
    width:       number;
    height:      number;
    sizeInBytes: number;
}
