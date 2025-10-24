import './style/modal-template.scss'
export interface ModalTemplateProps{
    children: React.ReactNode
    onHide?: ()=>void
    disableBackplate?: boolean
}

export const ModalTemplate:React.FC<ModalTemplateProps> = ({children, onHide, disableBackplate}) => {

    function hide() {
        onHide && onHide()
    }

    return(
        <div 
            className={`modal-template ${disableBackplate?"modal-template_z_0":""}`}
        >
            <div 
                onClick={hide} 
                className={`modal-template__backplate ${disableBackplate?"modal-template__backplate_disable":""}`}
            ></div>
            {children}
        </div>
    )
}