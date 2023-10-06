import SinglePost from '@/components/SinglePost'

export default function Post ({ children, params }) {
  const { id } = params
  return (
    <>
      <SinglePost id={id} />
      {children}
    </>
  )
}
