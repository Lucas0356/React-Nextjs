import ListOfComments from "@/components/ListOfComments";

export default function comments ({ params }) {
    const { id } = params
    return (
        <ListOfComments postId={id}/>
    )
}