import { Plugins, CameraResultType, CameraSource, Filesystem, FilesystemDirectory } from '@capacitor/core'

const { Camera, Storage } = Plugins

const PHOTO_STORAGE = 'photos'

class PhotoService {
  photos = []

  async addNewToGallery () {
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    })
    this.photos.push(await this.savePicture(capturedPhoto))

    Storage.set({
      key: PHOTO_STORAGE,
      value: JSON.stringify(this.photos.map(p => {
        const photoCopy = { ...p }
        delete photoCopy.base64

        return photoCopy
      }))
    })
  }

  async savePicture (cameraPhoto) {
    const base64Data = await this.readAsBase64(cameraPhoto)

    const fileName = new Date().getTime() + '.jpeg'
    await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: FilesystemDirectory.Data
    })

    return this.getPhotoFile(cameraPhoto, fileName)
  }

  async readAsBase64 (cameraPhoto) {
    const response = await fetch(cameraPhoto.webPath)
    const blob = await response.blob()

    return this.convertBlobToBase64(blob)
  }

  convertBlobToBase64 (blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onerror = reject
      reader.onload = () => {
        resolve(reader.result)
      }
      reader.readAsDataURL(blob)
    })
  }

  async getPhotoFile (cameraPhoto, fileName) {
    return {
      filepath: fileName,
      webviewPath: cameraPhoto.webPath
    }
  }

  async loadSaved () {
    const photos = await Storage.get({ key: PHOTO_STORAGE })
    this.photos = JSON.parse(photos.value) || []

    for (const photo of this.photos) {
      const readFile = await Filesystem.readFile({
        path: photo.filepath,
        directory: FilesystemDirectory.Data
      })
      photo.base64 = `data:image/jpeg;base64,${readFile.data}`
    }
  }
}

export default new PhotoService()
