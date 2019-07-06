const React = require("react");
const { Form } = require("react-bulma-components");

module.exports.InputField = ({ label, ...props }) => (
    <Form.Field>
        <Form.Label>{label}</Form.Label>
        <Form.Control>
            <Form.Input {...props} />
        </Form.Control>
    </Form.Field>
);
