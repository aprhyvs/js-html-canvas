class Resources {
    constructor() {
        this.toLoad = {
            sky: "public/sprites/sky.png",
            ground: "public/sprites/ground.png",
            hero: "public/sprites/hero-sheet.png",
            shadow: "public/sprites/shadow.png",
        };

        // A bucket to keep all of our images
        this.images = {};

        // Load each image
        Object.keys(this.toLoad).forEach(key => {
            const img = new Image();
            img.src = this.toLoad[key];
            this.images[key] = {
                image: img,
                isLoaded: false
            }
            img.onload = () => {
                this.images[key].isLoaded = true;
            }
        })
    }
}

// create one instance for the whole app to use
export const resources = new Resources();