import { CKEditor } from '@ckeditor/ckeditor5-react';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { useState } from 'react';

const CKCustom = () => {
    const [text, setText] = useState('');
    return (
        <div>
            <CKEditor
                editor={Editor}
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

export default CKCustom;