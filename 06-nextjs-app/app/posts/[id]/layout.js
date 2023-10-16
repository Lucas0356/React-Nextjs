import PostById from '@/components/PostById'

export default function Post ({ children, params }) {
  const { id } = params
  return (
    <>
      <PostById id={id} listOfComments={children} />
    </>
  )
}