import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Item details",
    description: "Page with item details",
};

interface Props {
    params: {
        id: string
    }
}

const Details = ({params}: Props) => (
    <div>Details: {params.id}</div>
)

export default Details