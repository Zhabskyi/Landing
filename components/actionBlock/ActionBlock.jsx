import Button from '../button/Button';
import './ActionBlock.scss';

const ActionBlock = (props) => {
		return 	<div className={`${props.classes} action-block__content`}>
				{props.children}
			<div className="action-block__controls">
					<Button onClick={props.onAction}>Jetzt anmelden</Button>
			</div>
			</div>

}

export default ActionBlock;