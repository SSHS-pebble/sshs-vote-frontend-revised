const React = require("react");
const { Button, Notification } = require("react-bulma-components");

module.exports = ({
    children,
    autoDismiss,
    autoDismissTimeout,
    onDismiss,
    onExited,
    placement,
    transitionDuration,
    transitionState,
    ...props
}) => (
    <Notification {...props}>
        {children}
        <Button remove onClick={onDismiss} />
    </Notification>
);
