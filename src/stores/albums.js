import { Cloudinary } from '@cloudinary/url-gen';
import { defineStore } from 'pinia';
import { albumsIndex } from './albumsIndex';


export const useAlbumsStore = defineStore('albums', {
    state: () => ({
        albums: [],
        strips: [],
        selectedAlbum: [],
        isLoading: false,
        cloudName: 'ddxatjdzs',
    }),
    actions: {
        getUrlAlbums() {
            const cld = new Cloudinary({
                cloud: {
                    cloudName: this.cloudName
                }
            });
    
            // // Instantiate a CloudinaryImage object for the image with the public ID, 'front_face'.
            albumsIndex.forEach(album => {
                album.thumbnail.elem = cld.image(album.thumbnail.id);
            });
            
            this.albums = albumsIndex;
        },
        divideIntoStrips() {
            const strips = [
                {
                    id: "one",
                    elems: []
                },
                {
                    id: "two",
                    elems: []
                },
                {
                    id: "three",
                    elems: []
                },
                {
                    id: "four",
                    elems: []
                }
            ];

            let count = 0;
            let currentStrip = 0;
            const divided = Math.floor(this.albums.length / 4);
            console.log(this.albums.length / 4);
            
            this.albums.forEach((currentVal, index) => {
                if(count >= divided && currentStrip < 4) {
                    currentStrip++;
                    count = 0;
                }
                strips[currentStrip].elems.push(currentVal);
                count++;
            });
            this.strips = strips;
        },
        getAlbum(id) {
            this.selectedAlbum = this.albums.filter(album => album.name == id)[0];
            return this.albums.filter(album => album.name == id)[0];
        },
        getSelectedAlbum() {
            const cld = new Cloudinary({
                cloud: {
                    cloudName: this.cloudName
                }
            });
            
            console.log(this.selectedAlbum.photos);
            this.selectedAlbum.photos.forEach(photo => {
                photo.elem = cld.image(photo.id);
            });
        }
    }

});
