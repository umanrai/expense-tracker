import Paragraph from "./Paragraph"

const BoxWidget = ({ classes, num, title }) => {
    return (
        <div>
            <h4>{title}</h4>
            <Paragraph classes={`money ${classes}`} text={"रू" + num} />
        </div>
    )
}

export default BoxWidget