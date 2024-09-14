export default function convertProductFaName(name: string): string {
    if (name.includes("-")) {
        return name.split("-").join(" ");
    } else {
        return name.split(" ").join("-");
    }
}
