import {initializeApp} from 'firebase/app';
import {getStorage, ref, getDownloadURL, uploadBytesResumable} from 'firebase/storage';
import { store } from '../../redux/configStore';
import { setMinusLoadingOff, setMinusLoadingOn } from '../../redux/minusLoadingSlice';


const firebaseConfig = {
    apiKey: "AIzaSyAgWm8z-owE7X9Y1Gf3ERtsTl0YQsQceZo",
    authDomain: "xemapp-8f3bc.firebaseapp.com",
    projectId: "xemapp-8f3bc",
    storageBucket: "xemapp-8f3bc.appspot.com",
    messagingSenderId: "61688279917",
    appId: "1:61688279917:web:d0a771a7c6b9dbb81fa064",
    measurementId:  "G-GC37ZD93VR"
}

initializeApp(firebaseConfig)

const storage = getStorage()

export const upload = {
    avatar: (file, setProgress, setUrl) => {
        // bat loading circle
        store.dispatch(setMinusLoadingOn())

        const dateTime = new Date().getTime()
        const metadata= {
          contentType: file.type
        }

        // Luu tru tai... + set name 
        const storageRef = ref(storage, `avatar/${dateTime} - ${file.name}`)


        // cac ham khi uplaoding
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progress > 99.5 ? setProgress(99.9) : setProgress(progress.toFixed(2))
            }, 
            (error) => {
                // Handle unsuccessful uploads

                // tat loading circle
                store.dispatch(setMinusLoadingOff())
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUrl (downloadURL)

                    // tat loading circle
                    store.dispatch(setMinusLoadingOff())
                });
            }
        );
    },

    cover: (file, setProgress, setUrl) => {
         // bat loading circle
         store.dispatch(setMinusLoadingOn())

        const dateTime = new Date().getTime()
        const metadata= {
          contentType: file.type
        }

        // Luu tru tai... + set name 
        const storageRef = ref(storage, `cover/${dateTime} - ${file.name}`)


        // cac ham khi uplaoding
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progress > 99.5 ? setProgress(99.9) : setProgress(progress.toFixed(2))
            }, 
            (error) => {
                // Handle unsuccessful uploads

                // tat loading circle
                store.dispatch(setMinusLoadingOff())
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUrl (downloadURL)

                    // tat loading circle
                    store.dispatch(setMinusLoadingOff())
                });
            }
        );
    },

    poster: (file, setProgress, setUrl) => {
        // bat loading circle
        store.dispatch(setMinusLoadingOn())


        // 
        const dateTime = new Date().getTime()
        const metadata= {
          contentType: file.type
        }

        // Luu tru tai... + set name 
        const storageRef = ref(storage, `poster/${dateTime} - ${file.name}`)


        // cac ham khi uplaoding
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progress > 99.5 ? setProgress(99.9) : setProgress(progress.toFixed(2))
            }, 
            (error) => {
                // Handle unsuccessful uploads

                // tat loading circle
                store.dispatch(setMinusLoadingOff())
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUrl (downloadURL)
                     // tat loading circle
                    store.dispatch(setMinusLoadingOff())
                });
            }
        );
    },


    video: (file, setProgress, setUrl) => {
        // bat loading circle
        store.dispatch(setMinusLoadingOn())

        const dateTime = new Date().getTime()
        const metadata= {
          contentType: file.type
        }

        // Luu tru tai... + set name 
        const storageRef = ref(storage, `video/${dateTime} - ${file.name}`)


        // cac ham khi uplaoding
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                progress > 99.5 ? setProgress(99.9) : setProgress(progress.toFixed(2))
            }, 
            (error) => {
                // Handle unsuccessful uploads

                // tat loading circle
                store.dispatch(setMinusLoadingOff())
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setUrl (downloadURL)
                    // tat loading circle
                    store.dispatch(setMinusLoadingOff())
                });
            }
        );
    },

}
