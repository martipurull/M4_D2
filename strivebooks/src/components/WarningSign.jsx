import Alert from "react-bootstrap/Alert";

const WarningSign = ({ content }) => (
    <Alert className="text-center" variant="danger">
        {content}
    </Alert>
)

export default WarningSign