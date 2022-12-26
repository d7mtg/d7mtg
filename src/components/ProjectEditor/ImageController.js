import cx from 'clsx'
import { ImageUpload, TextField } from 'components'
import { get, useFormContext } from 'react-hook-form'
import { stripExtension } from 'utils/strings'
import cs from './common.module.scss'
import s from './ImageController.module.scss'
import { RemoveButton } from './RemoveButton'

export const ImageController = ({ name, className, ...rest }) => {
    const { register, setValue, watch, formState: { errors } } = useFormContext()
    const handleUploadImage = result => {
        setValue(name, {
            url: result.url,
            name: result.name,
            id: result.id,
            width: result.width,
            height: result.height,
            alt: stripExtension(result.name)
        }, {
            shouldDirty: true
        })
    }

    const handleRemove = e => {
        setValue(name, null, {
            shouldDirty: true
        })
    }

    const value = watch(name)

    return <div className={cx(s.column, className)}>
        <ImageUpload onUploadComplete={handleUploadImage} error={get(errors, name)} {...rest}>
            {value && <div className={cx(s.thumbnail, s.embedded)}>
                <a href={value.url} target='_blank'>
                    <img src={value.url} href={value.url} alt={value.alt} />
                </a>
            </div>}
        </ImageUpload>
        {value && <div className={cx(cs.fields, cs.noWrap)}>
            <TextField className={cs.full} label='Alt text' {...register(`${name}.alt`)} error={get(errors, name + '.alt')} />
            <RemoveButton onClick={handleRemove} />
        </div>}
    </div>
}