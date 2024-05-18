
export interface ModalTemplateProps{
    children: React.ReactNode
    onHide?: ()=>void
}

export const ModalTemplate:React.FC<ModalTemplateProps> = ({children, onHide}) => {

    function hide() {
        onHide && onHide()
    }

    return(
        <div className="modal-container">
            <div onClick={hide} className="backplate"></div>
            {children}
        </div>
    )
}