const React = require("react");
const { useState, useEffect } = React;

const {
    Form,
    Button,
    Image,
    Container,
    Columns,
    Progress
} = require("react-bulma-components");
const { default: BlockUi } = require("react-block-ui");

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
                <Progress color="info" max={totalStudents} value={votes[0]} />
                <Progress color="link" max={totalStudents} value={votes[1]} />
                <Button color="link" loading={voting} onClick={() => setVoting(true)}>개표</Button>
            </BlockUi>
        </Container>
    );
};
