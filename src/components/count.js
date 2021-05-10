const React = require("react");
const { useState, useEffect } = React;

const {
    Button,
    Container,
    Columns,
    Image,
    Progress
} = require("react-bulma-components");
const { default: BlockUi } = require("react-block-ui");

const images = [
    require("../../static/one.jpg"),
    require("../../static/two.jpg"),
    require("../../static/one.jpg")
];

module.exports = ({ ...props }) => {
    const [loading, setLoading] = useState(true);
    const [voting, setVoting] = useState(false);
    const [votes, setVotes] = useState(new Array(images.length).fill(0));
    const [leftData, setLeftData] = useState([]);
    const [totalStudents, setTotalStudents] = useState(0);

    useEffect(() => {
        (async () => {
            const res = await fetch("/api/vote");
            const data = await res.json();
            setLoading(false);
            setLeftData(data.data.filter(el => el !== -1));
            setTotalStudents(data.data.filter(el => el !== -1).length);
        })();
    }, []);

    useEffect(() => {
        if(!voting) { return undefined; }
        let timer;
        if(leftData.length === 0) {
            timer = setTimeout(() => {
                setVoting(false);
            }, 500);
        } else {
            timer = setTimeout(() => {
                setLeftData(leftData.slice(1));
                const updatedVotes = votes;
                updatedVotes[leftData[0]]++;
                setVotes(updatedVotes);
            }, 500);
        }
        return () => clearTimeout(timer);
    }, [voting, votes, leftData]);

    return (
        <Container>
            <BlockUi blocking={loading}>
                {images.map((image, idx) => (
                    <Columns className="is-vcentered">
                        <Columns.Column size={2}>
                            <Image src={image} />
                        </Columns.Column>
                        <Columns.Column>
                            <Progress color="info" max={totalStudents} value={votes[idx]} />
                            {loading ? null : <p style={{ textAlign: "center" }}>{votes[idx]} / {totalStudents} = {Math.trunc(votes[idx] / totalStudents * 100)}%</p>}
                        </Columns.Column>
                    </Columns>
                ))}
                <Button color="link" loading={voting} onClick={() => setVoting(true)} pull="right">개표</Button>
            </BlockUi>
        </Container>
    );
};
