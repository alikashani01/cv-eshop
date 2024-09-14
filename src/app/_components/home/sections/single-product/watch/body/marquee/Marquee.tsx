import Container from "./Container";
import Group from "./Group";
import { data } from "./data";

export default async function Marquee() {
    return (
        <div className="block overflow-hidden">
            <Container>
                <Group data={data} speed="100s" />
                <Group data={data} speed="100s" />
            </Container>

            <Container>
                <Group data={data} speed="150s" />
                <Group data={data} speed="150s" />
            </Container>
        </div>
    );
}
