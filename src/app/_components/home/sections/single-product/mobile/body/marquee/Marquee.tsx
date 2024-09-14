import Container from "./Container";
import Group from "./Group";
import { data } from "./data";

export default async function Marquee() {
    return (
        <div className="block overflow-hidden pt-[10vh]">
            <Container>
                <Group data={data} />
                <Group data={data} />
            </Container>

            <Container>
                <Group data={data} speed="150s" />
                <Group data={data} speed="150s" />
            </Container>
        </div>
    );
}
