export interface CategoryData {
    data: DataCategory[];
    meta: Meta;
}

export interface DataCategory {
    id:         number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    categoryName: string;
    slug:         string;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    mainImage:    MainImage;
}

export interface MainImage {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
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
    small?:    Small;
    thumbnail: Small;
}

export interface Small {
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
