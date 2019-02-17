import Button from '../button';

export const ActionBlock = ({children, onAction}) => {
    return <div className="action-block">
        <div className="action-block__content">{children}</div>
        <div className="action-block__controls">
            <Button onClick={onAction}>Click me</Button>
        </div>
    </div>
}