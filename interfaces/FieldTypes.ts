export interface FieldTypes {
    data: Data;
}

export interface Data {
    uid:    string;
    apiID:  string;
    schema: Schema;
}

export interface Schema {
    draftAndPublish:     boolean;
    displayName:         string;
    singularName:        string;
    pluralName:          string;
    description:         string;
    pluginOptions:       PluginOptions;
    kind:                string;
    collectionName:      string;
    attributes:          Attributes;
    visible:             boolean;
    restrictRelationsTo: null;
}

export interface Attributes {
    productName: Description;
    slug:        Slug;
    description: Description;
    images:      Images;
    active:      Active;
    price:       Description;
    origin:      Origin;
    taste:       Origin;
    isFeatured:  Description;
    category:    Category;
}

export interface Active {
    type:    string;
    default: boolean;
}

export interface Category {
    type:            string;
    relation:        string;
    target:          string;
    targetAttribute: null;
    private:         boolean;
}

export interface Description {
    type: string;
}

export interface Images {
    type:         string;
    multiple:     boolean;
    required:     boolean;
    private:      boolean;
    allowedTypes: string[];
}

export interface Origin {
    type: string;
    enum: string[];
}

export interface Slug {
    type:        string;
    targetField: string;
}

export interface PluginOptions {
}
