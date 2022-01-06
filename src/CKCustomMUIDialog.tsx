import { CKEditor } from '@ckeditor/ckeditor5-react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { useState } from 'react';

const CKCustomMUIDialog = () => {
    const [text, setText] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div>
            <Button onClick={() => setIsVisible(true)}>Show Dialog</Button>
            <Dialog open={isVisible} onClose={() => setIsVisible(false)} maxWidth='lg' fullWidth >
                <DialogTitle>Test Editor</DialogTitle>
                <DialogContent style={{minHeight:300}}>
                    <CKEditor
                        editor={Editor}
                        data={text}
                        onChange={(e, editor) => setText(editor.getData())}
                        config={{ height: 600 }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setIsVisible(false)}>Close</Button>
                </DialogActions>
            </Dialog>


            <div >
                <span dangerouslySetInnerHTML={{ __html: (text) }} />
            </div>

        </div>
    );
}

export default CKCustomMUIDialog;