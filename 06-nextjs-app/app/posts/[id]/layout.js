import IndividualPost from '@/components/IndividualPost'

export default function Post ({ children, params }) {
  const { id } = params
  return (
    <>
      <IndividualPost id={id} comments={children} />
    </>
  )
}