import { useLocation } from "react-router-dom"


const TemplatePage = () => {
    const { template } = useLocation()?.state;
    return (
        <div>
            <div>
                <img width={200} src={template?.main_image} alt="" />
            </div>
            <div>
                <div>
                    <h2>{template?.template_name}</h2>
                    <p>{template?.stacks.join(", ")}</p>
                </div>
                <div>
                    <p>{template?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default TemplatePage