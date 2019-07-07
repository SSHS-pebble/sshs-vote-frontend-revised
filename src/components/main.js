const React = require("react");
const { useState, useRef } = React;

const {
    Form,
    Button,
    Image,
    Container,
    Columns
} = require("react-bulma-components");
const { withToastManager } = require("react-toast-notifications");

const { InputField } = require("./helpers.js");
const images = [
    require("../../static/one.jpg"),
    require("../../static/two.jpg")
];

module.exports = withToastManager(({ toastManager }) => {
    const [id, setId] = useState("");
    const [vote, setVote] = useState(0);
    const [loading, setLoading] = useState(false);
    const formEl = useRef(null);
    const submit = async e => {
        e.preventDefault();
        if(!formEl.current.reportValidity()) { return; }
        setLoading(true);
        try {
            const res = await fetch("/api/vote", {
                method: "post",
                body: JSON.stringify({
                    id,
                    vote
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            setLoading(false);
            if(!data.status) {
                throw new Error(data.error);
            }
            toastManager.add("성공적으로 제출되었습니다.", { color: "info" });
        } catch(e) {
            switch(e.message) {
            case "nonexistent-id":
                toastManager.add("입력하신 선거코드가 존재하지 않습니다.", { color: "danger" });
                break;
            case "already-voted":
                toastManager.add("해당 선거코드는 이미 사용되었습니다.", { color: "danger" });
                break;
            default:
                toastManager.add("알 수 없는 오류가 발생하였습니다.", { color: "danger" });
                break;
            }
        }
    };
    return (
        <Container>
            <form ref={formEl}>
                <InputField
                    label="선거코드"
                    type="text"
                    placeholder="선거코드"
                    required
                    value={id}
                    onChange={e => setId(e.target.value)}
                />
                <Form.Label>
                    후보 선택
                </Form.Label>
                <Form.Field>
                    <Columns>
                        {images.map((src, idx) => (
                            <Columns.Column key={src}>
                                <Image src={src} onClick={() => setVote(idx)} />
                                <Form.Radio name="vote" checked={idx == vote} onChange={() => setVote(idx)}>
                                    {" "}기호 {idx + 1}번
                                </Form.Radio>
                            </Columns.Column>
                        ))}
                    </Columns>
                </Form.Field>
                <Form.Field>
                    <Form.Control>
                        <Button color="link" loading={loading} onClick={submit} pull="right">투표</Button>
                    </Form.Control>
                </Form.Field>
            </form>
        </Container>
    );
});
