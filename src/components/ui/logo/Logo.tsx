import { IBaseComponentProps } from "shared/general/types/base-component-props"

export const Logo: React.FC<IBaseComponentProps> = (props) => {
    const {className, css} = props
    
    return(
        <div className={`${className}`} style={css}>
            <h1 className="!text-2xl lg:!text-4xl">Отзывы</h1>
            <h2 className="!text-[10px] lg:!text-[12px] !-mt-1 ml-1 opacity-70 !font-normal">Тестовое задание от ДГТУ</h2>
        </div>
    )
}