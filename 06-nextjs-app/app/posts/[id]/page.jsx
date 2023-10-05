import SinglePost from '@/components/SinglePost'

export default function Post ({ params }) {
  const { id } = params
  return (
    <main>
      <h3>Post con el id: {id}</h3>
      <SinglePost id={id} />
    </main>
  )
}
