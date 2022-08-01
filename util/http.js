const urlFB = 'https://react-native-test-12cb8-default-rtdb.europe-west1.firebasedatabase.app/images.json';

export async function fetchImages() {
    try {
        const responseData = await fetch(urlFB, {
            method: 'GET'
        });
        const res = await responseData.json();
        const images = [];

        for (const key in res) {
            const imageObj = {
                id: key,
                image: `https://firebasestorage.googleapis.com/v0/b/react-native-test-12cb8.appspot.com/o/${res[key].imageTitle}?alt=media&token=${res[key].imageUrl}`
            };
            images.push(imageObj);
        }
        return images;
    } catch (err) {

    }
} 