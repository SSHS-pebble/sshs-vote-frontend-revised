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
    require("../../static/two.jpg")
];

module.exports = ({ ...props }) => {
    const [loading, setLoading] = useState(true);
    const [voting, setVoting] = useState(false);
    const [votes, setVotes] = useState([0, 0]);
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
        if(leftData.length === 0) {
            setVoting(false);
            return undefined;
        }
        const timer = setTimeout(() => {
            setLeftData(leftData.slice(1));
            const updatedVotes = votes;
            updatedVotes[leftData[0]]++;
            setVotes(updatedVotes);
        }, 500);
        return () => clearTimeout(timer);
    }, [voting, votes, leftData]);

    return (
        <Container>
            <BlockUi blocking={loading}>
                <Columns className="is-vcentered">
                    <Columns.Column size={2}>
                        <Image src={images[0]} />
                    </Columns.Column>
                    <Columns.Column>
                        <Progress color="info" max={totalStudents} value={votes[0]} />
                        {loading ? null : <p style={{ textAlign: "center" }}>{votes[0]} / {totalStudents} = {Math.trunc(votes[0] / totalStudents * 100)}%</p>}
                    </Columns.Column>
                </Columns>
                <Columns className="is-vcentered">
                    <Columns.Column size={2}>
                        <Image src={images[1]} />
                    </Columns.Column>
                    <Columns.Column>
                        <Progress color="link" max={totalStudents} value={votes[1]} />
                        {loading ? null : <p style={{ textAlign: "center" }}>{votes[1]} / {totalStudents} = {Math.trunc(votes[1] / totalStudents * 100)}%</p>}
                    </Columns.Column>
                </Columns>
                <Button color="link" loading={voting} onClick={() => setVoting(true)} pull="right">개표</Button>
            </BlockUi>
        </Container>
    );
};
