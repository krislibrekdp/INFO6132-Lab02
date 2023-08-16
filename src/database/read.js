import { collection, getDocs } from 'firebase/firestore';
import { db } from './config'

export function load() {
    console.log('Load...');

    const data = [];

    const dbCollection = collection(db, "post");
    getDocs(dbCollection)
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const post = {
                ...doc.data(),
                id: doc.id
            };
            data.push(post);
        });
    })
    .catch((error) => {
        console.log('Error: ', error)
    });

    return new Promise ((resolve, reject) => {
        resolve(data);
    });

}