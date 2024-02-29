import { useCurrentEditor } from '@tiptap/react'

const Preview = () => {
  const { editor } = useCurrentEditor()
  console.log(editor)

  return (
    <pre>
     preview
    </pre>
  )
}
export default Preview
