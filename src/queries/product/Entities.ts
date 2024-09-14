export type Specs = {
    colors: Color[];
    brands: {
        fa: string;
        en: string;
    }[];
};

export type Color = {
    fa: string;
    en: string;
    code: string;
};

export type Pricing = {
    value: number;
    discount?: {
        value: number;
        expiredAt: number;
    };
    countInStock: number;
    storage?: {
        capacity: string;
        unit: string;
    };
};

export type Product = {
    _id?: string;
    name: {
        en: string;
        fa: string;
    };
    title?: {
        en: string;
        fa: string;
    };
    model: string;
    brand?: {
        en: string;
        fa: string;
    };
    serialNumber: string;
    category: {
        en: string;
        fa: string;
    };
    subCategories: {
        en: string;
        fa: string;
    }[];
    applications?: {
        en: string;
        fa: string;
    }[];
    kinds: {
        en: string;
        fa: string;
    }[];
    description: string;
    cover: string[];
    gallery: {
        color: string;
        photos: string[];
    }[];
    colors: Color[];
    pricing: Pricing[];
    compatibility?: string[];
    box?: {
        fa?: string;
        en?: string;
        description?: string;
        photo?: string;
    }[];
    overviews?: {
        title: string;
        description: string;
    }[];
    highlights?: string[];
    specs: {
        body?: {
            isExists: boolean;
            dimensions?: string;
            depth?: {
                value: string;
                unit: string;
            };
            height?: {
                value: string;
                unit: string;
            };
            width?: {
                value: string;
                unit: string;
            };
            weight?: {
                value: string;
                unit: string;
            };
            build?: string[];
            materials?: {
                front: string;
                back: string;
                frame: string;
            };
            sim?: string[];
            features?: { title: string; description?: string }[];
        };
        display?: {
            isExists: boolean;
            size: string;
            resolution?: {
                hor: string;
                ver: string;
            };
            ppi?: string;
            displayType?: { en?: string; fa?: string };
            protection?: string;
            aspectRatio?: string;
            screenToBodyRatio?: string;
            ambientLightSensor?: string;
            hdr?: string;
            touchScreen?: string;
            refreshRate?: string;
            features?: { title: string; description?: string }[];
        };
        battery?: {
            isExists: boolean;
            capacity?: string;
            power?: string;
            batteryType?: {
                en?: string;
                fa?: string;
            };
            chargingTime?: string;
            lifetime?: {
                title: string;
                description?: string;
            }[];
            fastCharge?: string;
            replaceable?: string;
            cableLength?: {
                value: string;
                unit: string;
            };
            portPosition?: string;
            features?: { title: string; description: string }[];
            featuresWithDescription?: {
                title: string;
                description: string[];
            }[];
        };
        proccessors?: {
            cpu?: {
                isExists: boolean;
                model: string;
                series?: {
                    fa?: string;
                    en?: string;
                };
                manufacturer?: {
                    fa?: string;
                    en?: string;
                };
                baseFrequency?: {
                    value: string;
                    unit: string;
                };
                speedRange?: {
                    value: string;
                    unit: string;
                };
                cores?: {
                    value: string;
                    description: string;
                };
                threads?: string;
            };
            gpu?: {
                isExists: boolean;
                model: string;
                series?: {
                    fa?: string;
                    en?: string;
                };
                manufacturer?: {
                    fa?: string;
                    en?: string;
                };
                gpuType?: string;
                baseClock?: {
                    value: string;
                    unit: string;
                };
                boostClock?: {
                    value: string;
                    unit: string;
                };
                threads?: string;
                dedicated?: {};
            };
            chipset?: string;
        };
        memory?: {
            isExists: boolean;
            ram?: {
                capacity: string;
                ramType?: string;
                clock?: {
                    value: string;
                    unit: string;
                };
                upgradable?: string;
            };
            cache?: string;
            rom?: {};
        };
        storage?: {
            isExists: boolean;
            capacities: {
                value: string;
                unit: string;
            }[];
            storageType?: string;
            upgradable?: string;
        };
        connectivity?: {
            isExists: boolean;
            connections?: string[];
            network?: {
                isExists: boolean;
                technologies?: string[];
                band2G?: string[];
                band3G?: string[];
                band4G?: string[];
                band5G?: string[];
                speed?: string;
            };
            ports?: {
                isExists: boolean;
                charging?: string;
                audio?: string;
                thunderbolt?: string;
                audioJack?: string;
                sdCardReader?: string;
                usbA?: string;
                usbC?: string;
                hdmi?: string;
                display?: string;
                vga?: string;
                ethernet?: string;
            };
            wifi?: string[];
            nfc?: string;
            radio?: string;
            bluetooth?: string[];
            bluetoothVersion?: string;
            positioning?: string[];
            opticalDriver?: string;
            fingerprint?: string;
        };
        camera?: {
            isExists: boolean;
            front?: {};
            back?: {};
            features?: {
                title?: string;
                description?: string[];
            }[];
        };
        other?: {
            isExists: boolean;
            speaker?: {
                title?: string;
                description?: string[];
            };
            touchpad?: {
                size?: { hor: string; ver: string };
                description?: string[];
            };
            keyboard?: {
                isExists: boolean;
                type?: string;
                touchId?: string;
                numPad?: string;
                backlight?: string;
                keyTravel?: string;
            };
            features?: string[];
        };
        technologies?: {
            title: string;
            description?: string[];
        }[];
        sensors?: {
            fa?: string;
            en?: string;
            description?: string[];
        }[];
        microphones?: {
            title?: string;
            description?: string[];
        }[];
        controls?: {
            title?: string;
            description?: string[];
        }[];
        audioSources?: {
            title?: string;
            description?: string[];
        }[];
        powerSource?: string;
        os?: string;
    };
    slider?: {
        title?: string;
        description?: string;
        photo?: string;
    }[];
    featured?: {
        hotBanner?: {
            isHotBanner: boolean;
            product?: string;
            photo: string;
            title: string;
            subTitle: string;
        };
        edu?: {
            isEdu: boolean;
            product: string;
            photo: string;
            highlights: string[];
        };
    };
    media?: {
        videos?: {
            title?: string;
            description?: string;
            file?: string;
        }[];
        articles?: {
            title?: string;
            content?: string;
            photo?: string;
            source?: string;
        }[];
    };
    reviews?: string[];
    questions?: string[];
    rating: number;
    salesNumber: number;
};
