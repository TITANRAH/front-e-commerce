export interface ProductBySlug {
    data: ProductBySlugDatum[];
    meta: Meta;
}

export interface ProductBySlugDatum {
    id:         number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    productName: string;
    slug:        string;
    description: string;
    active:      boolean;
    price:       number;
    origin:      string;
    taste:       string;
    isFeatured:  boolean;
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
    data: ImagesDatum[];
}

export interface ImagesDatum {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
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

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
