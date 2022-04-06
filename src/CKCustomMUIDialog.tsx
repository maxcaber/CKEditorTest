import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { useState } from 'react';
import './App.css';

const CKCustomMUIDialog = () => {
    const [text, setText] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const editHTML = () =>{
        const newHtml = text.replace("<ul>", "<ul type='a'>" )
        setText(newHtml);
        console.log('called edit')

    }

    const closeDialog = () =>{
        setIsVisible(false);
        setTimeout(editHTML,2000)
    }

    return (
        <div>
            <style>
                {`
                .ck-rounded-corners, .ck.ck-balloon-panel, .ck.ck-balloon-panel, .ck-rounded-corners { z-index: 1000000 }
                `}
            </style>
            <Button onClick={() => setIsVisible(true)}>Show Dialog</Button>
            <Button onClick={() => editHTML()}>Edit HTML</Button>
            <Dialog open={isVisible} onClose={() => setIsVisible(false)} maxWidth='lg' fullWidth disableEnforceFocus >
                <DialogTitle>Test Editor</DialogTitle>
                <DialogContent style={{ minHeight: 300 }}>
                    <CKEditor
                        editor={Editor}
                        data={text}
                        onChange={(e, editor) => setText(editor.getData())}
                        config={{ height: 600 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() =>{closeDialog()}}>Close</Button>
                </DialogActions>
            </Dialog>


            <div >
            <h2>Raw HTML</h2>
            <div>{text}</div>
                <h2>Rendered HTML</h2>
                <span dangerouslySetInnerHTML={{ __html: (text) }} />
            </div>

        </div>
    );
}

export default CKCustomMUIDialog;