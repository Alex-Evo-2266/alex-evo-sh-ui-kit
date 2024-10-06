
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
        <div className="modal-container">
            <div onClick={hide} style={{display:disableBackplate?"none":undefined}} className="backplate"></div>
            {children}
        </div>
    )
}