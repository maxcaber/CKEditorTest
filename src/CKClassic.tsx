import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';

const CKClassic = () => {
    const [text, setText] = useState('');
    return (
        <div>
            <CKEditor
                editor={ClassicEditor}
                data={text}
                onChange={(e, editor) => setText(editor.getData())}
                config={{ height: 600 }}
            />

            <div >
                <span dangerouslySetInnerHTML={{ __html: (text) }} />
            </div>

        </div>
    );
}

export default CKClassic;