import {
    Document,
    InferSchemaType,
    model,
    Model,
    models,
    Schema,
    Types,
} from "mongoose";

const VideoSchema = new Schema({
    title: String,
    description: String,
    file: String,
});
const ArticleSchema = new Schema({
    title: String,
    content: String,
    photo: String,
    source: String,
});

const ProductSchema = new Schema(
    {
        name: {
            en: String,
            fa: String,
        },
        title: {
            en: String,
            fa: String,
        },
        model: String,
        brand: {
            en: String,
            fa: String,
        },
        serialNumber: String,
        category: {
            en: String,
            fa: String,
        },
        subCategories: [
            {
                en: String,
                fa: String,
            },
        ],
        application: [
            {
                en: String,
                fa: String,
            },
        ],
        kinds: [
            {
                en: String,
                fa: String,
            },
        ],
        description: String,
        cover: [String],
        gallery: [
            {
                color: String,
                photos: [String],
            },
        ],
        colors: [
            {
                fa: String,
                en: String,
                code: String,
            },
        ],
        pricing: [
            {
                value: Number,
                discount: {
                    value: Number,
                    expiredAt: Number,
                },
                storage: {
                    capacity: String,
                    unit: String,
                },
                countInStock: Number,
            },
        ],
        compatibility: [String],
        box: [
            {
                fa: String,
                en: String,
                description: String,
                photo: String,
            },
        ],
        overviews: [
            {
                title: String,
                description: String,
            },
        ],
        highlights: [String],
        specs: {
            // BODY: [DONE]
            body: {
                isExists: Boolean,
                dimensions: String,
                depth: {
                    value: String,
                    unit: String,
                },
                height: {
                    value: String,
                    unit: String,
                },
                width: {
                    value: String,
                    unit: String,
                },
                weight: {
                    value: String,
                    unit: String,
                },
                build: [String],
                materials: {
                    front: String,
                    back: String,
                    frame: String,
                },
                sim: [String],
                features: [{ title: String, description: String }],
            },
            // DISPLAY: [DONE]
            display: {
                isExists: Boolean,
                size: String,
                resolution: {
                    hor: String,
                    ver: String,
                },
                ppi: String,
                displayType: { fa: String, en: String },
                protection: String,
                aspectRatio: String,
                screenToBodyRatio: String,
                ambientLightSensor: String,
                hdr: String,
                touchScreen: String,
                refreshRate: String,
                features: [{ title: String, description: String }],
            },
            // BATTERY: [DONE]
            battery: {
                isExists: Boolean,
                capacity: String,
                power: String,
                batteryType: {
                    en: String,
                    fa: String,
                },
                chargingTime: String,
                lifetime: [
                    {
                        title: String,
                        description: String,
                    },
                ],
                fastCharge: String,
                replaceable: String,
                cableLength: {
                    value: String,
                    unit: String,
                },
                portPosition: String,
                features: [{ title: String, description: String }],
                featuresWithDescription: [
                    { title: String, description: [String] },
                ],
            },
            // PROCCESSORS: [DONE]
            proccessors: {
                cpu: {
                    isExists: Boolean,
                    model: String,
                    series: {
                        fa: String,
                        en: String,
                    },
                    manufacturer: {
                        fa: String,
                        en: String,
                    },
                    baseFrequency: {
                        value: String,
                        unit: String,
                    },
                    speedRange: {
                        value: String,
                        unit: String,
                    },
                    cores: {
                        value: String,
                        description: String,
                    },
                    threads: String,
                },
                gpu: {
                    isExists: Boolean,
                    model: String,
                    series: {
                        fa: String,
                        en: String,
                    },
                    manufacturer: {
                        fa: String,
                        en: String,
                    },
                    gpuType: String,
                    baseClock: {
                        value: String,
                        unit: String,
                    },
                    boostClock: {
                        value: String,
                        unit: String,
                    },
                    threads: String,
                    dedicated: {},
                },
                chipset: String,
            },
            // MEMORY: [DONE]
            memory: {
                isExists: Boolean,
                ram: {
                    capacity: String,
                    ramType: String, // Unified / DDR3/4 ...
                    clock: {
                        value: String,
                        unit: String,
                    }, // 4266 Megahertz
                    upgradable: String,
                },
                cache: String,
                rom: {},
            },
            // STORAGE: [DONE]
            storage: {
                isExists: Boolean,
                capacities: [
                    {
                        value: { type: String },
                        unit: { type: String },
                    },
                ],
                storageType: { type: String },
                upgradable: { type: String },
            },
            // CONNECTIVITY: [DONE]
            connectivity: {
                isExists: Boolean,
                connections: [String],
                network: {
                    isExists: Boolean,
                    technologies: [String],
                    band2G: [String],
                    band3G: [String],
                    band4G: [String],
                    band5G: [String],
                    speed: String,
                },
                ports: {
                    isExists: Boolean,
                    charging: String,
                    audio: String,
                    thunderbolt: String,
                    audioJack: String,
                    sdCardReader: String,
                    usbA: String,
                    usbC: String,
                    hdmi: String,
                    display: String,
                    vga: String,
                    ethernet: String,
                },
                wifi: [String],
                nfc: String,
                radio: String,
                bluetooth: [String],
                bluetoothVersion: String,
                positioning: [String],
                opticalDriver: String,
                fingerprint: String,
            },
            // CAMERA: [DONE]
            camera: {
                isExists: Boolean,
                front: {},
                back: {},
                features: [
                    {
                        title: String,
                        description: [String],
                    },
                ],
            },
            // OTHER: [DONE]
            other: {
                isExists: Boolean,
                speaker: {
                    title: String,
                    description: [String],
                },
                touchpad: {
                    size: { hor: String, ver: String },
                    description: [String],
                },
                keyboard: {
                    isExists: Boolean,
                    keyboardType: String,
                    touchId: String,
                    numPad: String,
                    backlight: String,
                    keyTravel: String,
                },
                features: [String],
            },
            // [DONE]
            technologies: [
                {
                    title: String,
                    description: [String],
                },
            ],
            // [DONE]
            sensors: [
                {
                    fa: String,
                    en: String,
                    description: [String],
                },
            ],
            // [DONE]
            microphones: [
                {
                    title: String,
                    description: [String],
                },
            ],
            // [DONE]
            controls: [
                {
                    title: String,
                    description: [String],
                },
            ],
            // [DONE]
            audioSources: [
                {
                    title: String,
                    description: [String],
                },
            ],
            // [DONE]
            powerSource: String,
            os: String,
        },
        slider: [
            {
                title: String,
                description: String,
                photo: String,
            },
        ],
        featured: {
            isHotBanner: Boolean,
            hotBanner: {
                isHotBanner: Boolean,
                product: String,
                photo: String,
                title: String,
                subTitle: String,
            },
            edu: {
                isEdu: Boolean,
                product: String,
                photo: String,
                highlights: [String],
            },
        },
        rating: { type: Number, default: 0 },
        reviews: [{ type: Schema.Types.ObjectId, ref: "Review" }],
        questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
        media: {
            videos: [VideoSchema],
            articles: [ArticleSchema],
        },
        salesNumber: { type: Number, default: 0 },
    },
    { timestamps: true }
);

type IProduct = InferSchemaType<typeof ProductSchema> & {
    _id: Types.ObjectId;
};

let Product: Model<IProduct & Document>;

try {
    Product =
        models.Product || model<IProduct & Document>("Product", ProductSchema);
} catch (error) {
    Product = model<IProduct & Document>("Product", ProductSchema);
}

export default Product;
