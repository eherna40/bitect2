import RNFS from 'react-native-fs';

let path_name = RNFS.DocumentDirectoryPath + '/bitec'

export const downloadPrincipalFile = async (data) => {

    const path = path_name + '/' + data.name + '-' + data.id + '.mp4'
    const url_video = data.principal_video
    const download = await RNFS.downloadFile({
        fromUrl: url_video,
        toFile: path
    })
        .promise
        .then((response) => response)
        .catch(err => err)

    if (download.statusCode === 200) {
        return path
    }

    return false
}

export const downloadFiles = async (data) => {

    try {

        await createDirectory()
        data.path = await downloadPrincipalFile(data)
        let arr = []
        const { childs } = data
        for (const category of childs) {
            const { products } = category
            let v = []
            for (const video of products) {

                const path = await donwloadFile(video)
                v.push({
                    ...video,
                    path: path
                })
            }
            category.products = v
            arr.push(category)
        }
        data.childs = arr
        return data
    } catch (error) {
        console.log(error)
    }

}

export const donwloadFile = async (data, id) => {
    const name = replaceCharacteres(data.name)
    const path = path_name + '/' + name + '-' + id + '.mp4'
    const download = await RNFS.downloadFile({
        fromUrl: data.video.videofile,
        toFile: path
    })
        .promise
        .then((response) => response)
        .catch(err => err)

    if (download.statusCode === 200) {
        return path
    }
    return false

}


const replaceCharacteres = (name) => {
    return name.replace(/[^\w\-]+/g, '-');

}

export const createDirectory = async () => {
    const dir = await RNFS.mkdir(path_name).then(res => res).catch(err => err)
    console.log(dir)
}