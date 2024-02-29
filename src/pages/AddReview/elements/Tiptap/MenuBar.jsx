import {useCurrentEditor} from '@tiptap/react';

const MenuBar = () => {
    const { editor } = useCurrentEditor()

    if (!editor) {
      return null
    }
  
    return (
        <div className=' flex items-center flex-wrap'>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={
                !editor.can()
                .chain()
                .focus()
                .toggleItalic()
                .run()
                }
                className={`${editor.isActive('italic') ? 'is-active' : ''} flex items-center`}
            >
                    <p className='w-[20px] h-[20px] text-[12px] rounded-full border-[3px] text-primary border-primary flex items-center justify-center mr-2' >1</p>
                    <p className='inline-block'>Số chỉ mục</p>
            </button>
    
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                !editor.can()
                .chain()
                .focus()
                .toggleStrike()
                .run()
                }
                className={editor.isActive('strike') ? 'is-active' : ''}
            >
                <p className='text-[18px] font-semibold'>Tiêu đề đoạn văn</p>
            </button>
    



            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'is-active' : ''}
            >
                <p className=' font-semibold text-primary'>1. Ý chính</p>
            </button>
    

            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={
                !editor.can()
                .chain()
                .focus()
                .toggleCode()
                .run()
                }
                className={editor.isActive('code') ? 'is-active' : ''}
            >
                Văn bản
            </button>
    
    
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={
                !editor.can()
                .chain()
                .focus()
                .toggleBold()
                .run()
                }
                className={editor.isActive('bold') ? 'is-active' : ''}
            >
                <b className=' font-semibold'>In đậm</b>
            </button>
        
        
            
            <button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                <p className=' text-primary'>Màu chữ</p>
            </button>



            <button onClick={() => editor.chain().focus().clearNodes().run()}>
                Nút CTA
            </button>
    


            <button
                onClick={() => editor.chain().focus().toggleHighlight().run()}
                className={`${editor.isActive('highlight') ? 'is-active' : ''} flex items-center`}
            >
                <i className="fa fa-image mr-2"></i>
                <p>Hình ảnh</p>
            </button>
        </div>
    )
  }

export default MenuBar 
