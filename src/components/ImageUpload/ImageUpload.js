import { ReactComponent as UploadCloud } from 'assets/icons/upload-cloud.svg'
import cx from 'clsx'
import { Button, ProgressBar } from 'components'
import { useEffect, useRef, useState } from 'react'
import { uploadImage } from 'utils/backend'
import s from './ImageUpload.module.scss'

export const ImageUpload = ({ className, label, active, error, onUploadComplete, children, multiple }) => {
    const chooser = useRef()
    const [files, setFiles] = useState([])
    const [uploading, setUploading] = useState(false)
    const [progress, setProgress] = useState(-1)


    useEffect(() => {
        if (!files.length || uploading)
            return

        setUploading(true)
        const doUpload = async () => {
            let completed = 0
            const singleProgress = 1 / files.length

            for (const file of files) {
                const result = await uploadImage(file, frac => setProgress(singleProgress * completed + singleProgress * frac))
                onUploadComplete(result)
                completed++
            }

            setProgress(-1)
            setUploading(false)
            setFiles([])
        }
        doUpload()


    }, [files])

    const handleDragOver = e => {
        e.preventDefault()
    }

    const handleDrop = e => {
        e.preventDefault()
        if (uploading)
            return

        let files = []
        if (e.dataTransfer.items) {
            for (const f of e.dataTransfer.items) {
                if (f?.kind !== 'file' || !f.type.startsWith('image/'))
                    continue

                files.push(f.getAsFile())
            }
        } else {
            files.push(e.dataTransfer.files.filter(f => f.type.startsWith('image/')))
        }

        setFiles(files)
    }

    const handleChooseFile = e => {
        if (uploading)
            return

        chooser.current.click()
    }

    const handleSelectFile = e => {
        setFiles([...e.target.files].filter(f => f.type.startsWith('image/')))
        e.target.value = ''
    }

    return <div className={cx(s.root, className)}>
        {label && <label>{label}</label>}
        <div className={cx(s.chooser, active && s.active, error && s.error)}>
            <div
                className={s.dropzone}
                onClick={handleChooseFile}
                onDragOver={handleDragOver}
                onDrop={handleDrop}>

                <input ref={chooser} onChange={handleSelectFile} type='file' accept='image/*' multiple={multiple ? 'multiple' : ''} />
                <UploadCloud className={s.cloud} />
                <span className={s.text}><span className={s.coloredText}>Click to upload</span> or drag and drop</span>
                <div className={s.progressContainer}>
                    {uploading && <ProgressBar progress={progress} />}
                </div>
            </div>
            {children}
        </div>
    </div>
}