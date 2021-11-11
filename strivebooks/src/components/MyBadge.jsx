import Badge from 'react-bootstrap/Badge'

const MyBadge = ({ content, colour }) => (
    <Badge className="my-badge" style={{ color: colour }} variant="secondary">{content}</Badge>
)

export default MyBadge